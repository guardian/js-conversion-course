arr = 3;

function getObj() {
    let x = 3;

    return {
        incrementX() {
            x++
        },
        getX() {
            return x
        }
    }
}

const o = getObj();

console.log(`initial inner x: ${o.getX()}`);

o.incrementX();

console.log(`incremented inner x: ${o.getX()}`);

console.log(`global x: ${x}`);
