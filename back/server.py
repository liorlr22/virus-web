import socket
import pyautogui
import time
from PIL import ImageGrab
from PIL import Image
import cv2
import os
from mss import mss

IP = "0.0.0.0"
PORT = 1234
client_sockets = []

run = True
waiting_for_command = False


def main():
    global client_sockets
    global waiting_for_command
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((IP, PORT))
    server_socket.listen(1)
    print(f"[SERVER] listening on: {IP}:{PORT}")
    conn, client_address = server_socket.accept()
    client_sockets.append(conn)
    print(f"[SERVER] client {client_address} connected")
    receive(conn)
    print(1)
    waiting_for_command = True


def receive(conn):
    send(conn, "run")
    command = client_sockets[0].recv(1024).decode()
    switch(conn, command)


def send(conn, content):
    conn.send(content.encode())


def send_video(conn, path):
    f = open(path, 'rb')
    length = f.read(1024*4)
    while length:
        conn.send(length)
        length = f.read(1024*4)
    f.close()


def switch(conn, command, file_path=None):
    match command:
        case "info":
            get_info(conn)
        case "pic":
            print(2)
            pic(conn)


def get_info(conn):
    time.sleep(3)
    for i in range(10):
        conn.send(str(pyautogui.position()).encode())
        time.sleep(0.5)


def capture_screenshot():
    # Capture entire screen
    with mss() as sct:
        monitor = sct.monitors[1]
        sct_img = sct.grab(monitor)
        # Convert to PIL/Pillow Image
        return Image.frombytes('RGB', sct_img.size, sct_img.bgra, 'raw', 'BGRX')


def pic(conn):
    for i in range(100):
        snapshot = capture_screenshot()
        save_path = rf"pics\pic{i}.jpg"
        snapshot.save(save_path)

    image_folder = 'pics'
    video_name = 'video.avi'

    images = [img for img in os.listdir(image_folder) if img.endswith(".jpg")]
    frame = cv2.imread(os.path.join(image_folder, images[0]))
    height, width, layers = frame.shape

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    video = cv2.VideoWriter(video_name, fourcc, 27, (width, height))

    for image in images:
        video.write(cv2.imread(os.path.join(image_folder, image)))

    cv2.destroyAllWindows()
    # send(conn, video)
    video.release()
    print(3)
    send(conn, "vid")
    print("[SERVER] sending video to client")
    send(conn, "doneVideo")
    # send_video(conn, r"C:\Users\IMOE001\Documents\lior lerner very secret\pythonProject7\video.mp4")


if __name__ == '__main__':
    while run:
        if not waiting_for_command:
            main()
