function Coins(input){
    let [a, b, c, x] = input.map(Number);
    //console.log(a, b, c, x);
    //2 2 2 100
    //A:500 B:100 C:50
    let ans = 0;
    for(i = 0; i <= a; i++){
        for(j = 0; j <= b; j++){
            for(k = 0; k <= c; k++){
                if((500 * i) + (100 * j) + (50 * k) === x){
                    ans++;
                }
            }
        }
    }
    console.log(ans);
}
Coins(require('fs').readFileSync('coins.txt', 'utf8').split('\n'))