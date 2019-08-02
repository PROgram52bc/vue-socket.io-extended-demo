#!/usr/bin/env python3
import eventlet
import datetime
from flask_socketio import SocketIO
from flask import Flask

socketio = SocketIO(cors_allowed_origins=['http://localhost:8080'])

eventlet.monkey_patch()
def send_time():
    while True:
        socketio.emit('time', str(datetime.datetime.now()))
        eventlet.sleep(1)

eventlet.spawn(send_time)

app = Flask(__name__)

@app.route('/hello')
def greet():
    """ The end point to say hello """
    return "hello World!"

socketio.init_app(app)

if __name__ == "__main__":
    socketio.run(app)
