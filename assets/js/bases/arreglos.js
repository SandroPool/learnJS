// const arr = new Array(10);
const arr = ["Mario 3", "Mega Man", "Chrono Trigger"];
console.log({ arr });
console.log(arr);

let arregloCosas = [
  true,
  123,
  "fernando",
  1 + 6,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr Willy", "Dr Woodman"]],
];

console.log(arregloCosas[7][4][1]);
