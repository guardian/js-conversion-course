const arr = ['a'];
arr['hey'] = 'should I really be allowed in an array?';
arr[5] = 'b';

for (let i = 0; i < arr.length; i++) {
    console.log(`element at index ${i} is ${arr[i]}`);
}

arr.forEach((el, i) => {console.log(`element at index ${i} is ${el}`)});
