function A(input){
    let a = [];
    let b = [];
    let c = [];
    let d = [];
    for(i = 0; i < input.length; i++){
        if(input[i] === 1){
            a.push(input[i]);
        }else if(input[i] === 2){
            b.push(input[i]);
        }else if(input[i] === 3){
            c.push(input[i]);
        }else if(input[i] === 4){
            d.push(input[i]);
        }
    }
    let count = 0;
    count += Math.floor(a.length / 2);
    count += Math.floor(b.length / 2);
    count += Math.floor(c.length / 2);
    count += Math.floor(d.length / 2);
    console.log(count);
}
A(require('fs').readFileSync('A.txt', 'utf8').split(' ').map(Number))