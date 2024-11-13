function C(input){
    const n = input[0];
    let k = input[1].split(' ').map(Number).sort((x, y) => x - y);
    let sum = k.reduce((x, y) => x + y);
    console.log(k);
    let a = 0;
    let b = 0;
    console.log(sum / 2);
    let x = 0;
    let max = 0;
    for(i = 0; i < n; i++){
        
    }
}
C(require('fs').readFileSync('C.txt', 'utf8').split('\n').map(x => x.trim()))