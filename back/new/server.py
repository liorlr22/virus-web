import socket

IP = "0.0.0.0"
PORT = 1234
client_sockets = []

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind((IP, PORT))
server_socket.listen(1)
print(f"[SERVER] listening on: {IP}:{PORT}")
conn, client_address = server_socket.accept()
client_sockets.append(conn)
print(f"[SERVER] client {client_address} connected")

run = True
waiting = False


def receive():
    global conn, waiting
    data = client_sockets[0].recv(1024).decode()
    print(f'[SERVER] client sent "{data}"')
    waiting = True


def send(msg=""):
    global conn, waiting
    conn.send(msg.encode())
    print("[SERVER] sent data")
    waiting = False


send("im up")

while run:
    if not waiting:
        receive()
    else:
        send()
