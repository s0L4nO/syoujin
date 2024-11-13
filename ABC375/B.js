function B(input){
    const n = parseInt(input.shift());
    let cost = 0;
    input.unshift([0, 0]);
    input.push([0, 0]);
    for(i = 0; i < n + 1; i++){
        let j = i + 1;
        let [a, b] = input[i].map(Number);
        let [c, d] = input[j].map(Number);
        //console.log(a, b, c, d);
        cost += Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
    }
    console.log(cost,input);
}
B(require('fs').readFileSync('B.txt', 'utf8').trim().split('\n').map((X) => X.split(' ').map(Number)))