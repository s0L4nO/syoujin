function otoshidama(input){
    const [n, y] = input;
    let ans = new Array(3).fill(-1);
    //console.log(n, y);
    for(i = 0; i <= n; i++){
        for(j = 0; j <= n - i; j++){
            let k = n - i - j;
            //console.log(i, j, k);
            if(10000 * i + 5000 * j + 1000 * k === y){
                ans = [i, j, k];
            }
        }
    }
    console.log(...ans);
}
otoshidama(require('fs').readFileSync('otoshidama.txt', 'utf8').trim().split(' ').map((x) => parseInt(x, 10)))