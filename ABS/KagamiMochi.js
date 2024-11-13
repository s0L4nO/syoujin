function kagamiMochi(input){
    const n = input.shift();
    let d = input.sort((x, y) => y - x);
    //console.log(n, d);
    let ans = 1;
    for(i = 0; i < n; i++){
        if(d[i] > d[i + 1]){
            ans++;
        }
    }
    console.log(ans);
}
kagamiMochi(require('fs').readFileSync('KagamiMochi.txt', 'utf8').trim().split('\n').map((x) => parseInt(x, 10)))