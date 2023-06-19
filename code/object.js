const names = [
  { name: "bangla", prize: 300 },
  { name: "english", prize: 450 },
  { name: "math", prize: 500 },
  { name: "data communication", prize: 700 },
  { name: "object", prize: 600 },
  { name: "object", prize: 600 },
  { name: "object", prize: 600 },
];

const totalPrize = names.reduce((acc, cur) => {
  if (acc[cur.name]) {
    acc[cur.name].quantiti++;
    acc[cur.name].prize += cur.prize;
  } else {
    acc[cur.name] ={
      prize: cur.prize,
      quantiti: 1,
    };
  }
  return acc;
}, []);
console.log(totalPrize);


