function A(input){
    const [n, c] = input[0].split(' ').map(Number);
    let t = input[1].split(' ').map(Number);
    //console.log(n, c, t);
    let count  = 1;
    let getTime = t[0];
    for(i = 1; i < n; i++){
        if(t[i] - getTime >= c){
            count++;
            getTime = t[i];
        }
    }
    console.log(count);
}
A(require('fs').readFileSync('A.txt', 'utf8').split('\n'))