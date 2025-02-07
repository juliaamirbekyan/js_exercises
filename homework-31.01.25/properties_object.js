let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let value in salaries){
    sum += salaries[value]
}
console.log(sum)