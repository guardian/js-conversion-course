const arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; i++) {
    console.log(`element at index ${i} is ${arr[i]}`);
}

arr.forEach((el, i) => {console.log(`element at index ${i} is ${el}`)});
