function B(input){
    let output = 0;
    let az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let str = input.split('');
    let current = str.indexOf('A');
    for(i = 0; i < az.length; i++){
        output +=  Math.abs(current - str.indexOf(az[i]));
        current = str.indexOf(az[i]);
    }
    console.log(output);
}
B(require('fs').readFileSync('B.txt', 'utf8').trim())