function C(input){
    const n = parseInt(input.shift());
    /*let b = new Array(n);
    console.log(input);
    for(i = 0; i < n; i++){
        b[i] = new Array(n).fill('.');
    }*/
    let a = new Array(n);
    for(i = 0; i < n; i++){
        a[i] = new Array(n);
        for(j = 0; j < n; j++){
            a[i][j] = input[i][j];
        }
    }
    for( i = 0; i <= n / 2; i++){
        for(x = i; x <= n + 1 - i; x++){
            for(y = i; y <= n + 1 - i; y++){
                let j = n + 1 - x;
                let tmp = a[y][j];
                a[x][y] = tmp;
                //console.log(j);
            }
        }
    }
    console.log(a);
}
C(require('fs').readFileSync('C.txt', 'utf8').split('\n').map((x) => x.trim()))