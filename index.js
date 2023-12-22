const sumFunction = () => {
    let sum = 0;
    return (value) => {
        sum += value;
        return sum;
    }
}
const sum = sumFunction();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));