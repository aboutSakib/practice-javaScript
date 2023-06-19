const add10 = (n) => n + 10;
const time3 = (n) => n * 3;
const div2 = (n) => n / 2;

const n = 5;
const x = div2(time3(add10(n)));
console.log(x);

const compose =(...fns)=>{
    return (x)=>{
        return fns.reduce((v,f)=>f(v),x)
    }
}
const x2=compose(add10,time3,div2)(n)
console.log(x2);
