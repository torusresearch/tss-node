// document = {}
// let resolve;
// const p = new Promise(r => resolve = r);
// import tss from "tss-lib";
// tss.default().then(resolve);
// onmessage = async ({ data }) => {
//     await p;
//     const {method, args} = data.data;
//     const result = tss[method](...args)
//     postMessage({ data: result })
// }
document = {};
importScripts("tss_lib.min.js");
let resolve;
const p = new Promise((r) => (resolve = r));
tss_lib.default().then(resolve);
const tss = tss_lib;
onmessage = async ({ data }) => {
  await p;
  const { method, args } = data.data;
  const result = tss[method](...args);
  postMessage({ data: result });
};
