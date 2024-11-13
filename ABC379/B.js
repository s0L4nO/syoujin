function B(input){
    let [n, k] = input[0].split(' ').map(Number);
    let ary = input[1].trim().split('X');
    //console.log(n, k, ary);
    let ans = 0;
    for(i = 0; i < ary.length; i++){
        ans += Math.floor(ary[i].length / k);
    }
    console.log(ans);

}
B(require('fs').readFileSync('B.txt', 'utf8').trim().split('\n'))