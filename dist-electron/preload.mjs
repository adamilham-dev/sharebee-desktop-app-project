"use strict";

const o = require("electron");

o.contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...e) {
    const [n, r] = e;
    return o.ipcRenderer.on(n, (t, ...c) => r(t, ...c));
  },
  off(...e) {
    const [n, ...r] = e;
    return o.ipcRenderer.off(n, ...r);
  },
  send(...e) {
    const [n, ...r] = e;
    return o.ipcRenderer.send(n, ...r);
  },
  invoke(...e) {
    const [n, ...r] = e;
    return o.ipcRenderer.invoke(n, ...r);
  },
});
