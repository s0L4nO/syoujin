function D(input){
    const [n, m] = input.shift().split(' ').map(Number);
    let output = newArray(n);
    console.log(...output);
}
D(require('fs').readFileSync('D.txt', 'utf8').split('\n'))