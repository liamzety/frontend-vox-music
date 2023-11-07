import io from 'socket.io-client';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '//https://vox-music-api.onrender.com'
    : '//localhost:3030';

let socket: any;

export default {
  setup,
  terminate,
  on,
  off,
  emit,
};

function setup() {
  socket = io(BASE_URL);
}

function terminate() {
  socket = null;
}

function on(eventName: any, cb: () => any) {
  socket.on(eventName, cb);
}

function off(eventName: any, cb: () => any) {
  socket.off(eventName, cb);
}

function emit(eventName: any, data: any) {
  socket.emit(eventName, data);
}
