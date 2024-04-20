const webSocket = new WebSocket("ws://localhost:4000");
let idgen: number = 0;

const incrementIdgen = () => {
  idgen += 1;
  return idgen;
};

export { webSocket, incrementIdgen };
