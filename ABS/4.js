function four(input){
    const n = parseInt(input[0]);
    let ary = input[1].split(' ').map(Number);
    //console.log(n, ary);
    let ans = 0;
    let flag = 0;
    while(ary.every((element) => element % 2 === 0)){
        for(i = 0; i < n; i++){
            ary[i] /= 2;
        }
        ans++;
    }
    console.log(ans);
}
four(require('fs').readFileSync('4.txt', 'utf8').split('\n'))