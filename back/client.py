import socket
import time
import turtle
import threading

SERVER_IP = "127.0.0.1"
SERVER_PORT = 1234

my_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
my_socket.connect((SERVER_IP, SERVER_PORT))
print(f"[CLIENT] connected to attacked computer on {SERVER_IP}:{SERVER_PORT}")
time.sleep(0.5)

run = True
waiting_for_command = False


def open_window():
    pass


def receive():
    while run:
        data = my_socket.recv(1024).decode()
        msg = data
        while msg:
            msg = msg + my_socket.recv(1024).decode()
            print("server sent:", data)


# def clean(data):
#     data = data[6:19]
#     data = data.replace(')', '')
#     data = data.replace('x', '')
#     data = data.replace('y', '')
#     data = data.replace('=', '')
#     data = data.replace(' ', '')
#     return data
#

# def receive_points():
#     data = my_socket.recv(1024).decode()
#     while data:
#         points = []
#         data = my_socket.recv(1024).decode()
#         data = clean(data)
#         if data == '':
#             continue
#         else:
#             data = data.split(',')
#         points.append(data)
#         return float(data[0]), float(data[1])
#
#
# def turtle_draw(x, y):
#     s = turtle.getscreen()
#     t = turtle.Turtle()
#     t.goto(receive_points())
#     t.dot(2)
#     turtle.done()


def send():
    command = str(input("enter command: "))
    my_socket.send(command.encode())
    # match command:
    #     case "pic":
    #         pic()


x = threading.Thread(target=receive)
x.start()

while run:
    if not waiting_for_command:
        send()
