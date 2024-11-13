function C(input){
    const n = Number(input[0]);
    let a = input[1].split(' ').map(Number);
    let b = input[2].split(' ').map(Number);
    let maxA = a.reduce((x, y) => Math.max(x, y));
    let maxB = b.reduce((x, y) => Math.max(x, y));
    console.log(maxA + maxB);
}
C(require('fs').readFileSync('C.txt', 'utf8').trim().split('\n').map((x) => x.trim()))