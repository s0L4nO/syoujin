function someSums(input){
    let [n, a, b] = input;
    //console.log(n, a, b);
    let ans = [];
    for(i = 0; i <= n; i++){
        num = String(i);
        let sum = 0;
        for(j = 0; j < num.length; j++){
            sum += Number(num[j]);
        }
        if(sum >= a && sum <= b){
            ans.push(i);
        }
    }
    console.log(ans.reduce((x, y) => x + y));
}
someSums(require('fs').readFileSync('someSums.txt', 'utf8').split(' ').map(Number))