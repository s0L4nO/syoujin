function A(input){
    let num = String(input);
    let a = num[0];
    let b = num[1];
    let c = num[2];
    console.log(b + c + a + ' ' + c + a + b);
}
A(require('fs').readFileSync('A.txt', 'utf8').trim())