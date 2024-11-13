function C(input){
    const [n, m] = input.shift().split(' ').map(Number);
    //console.log(n, m);
    let ary = new Array(n + 6);
    for(i = 0; i < n + 6; i++){
        ary[i] = new Array(n + 6).fill('.');
    }
    //console.log(ary);
    for(i = 0; i < m; i++){
        let [a, b] = input[i].split(' ').map(Number);
        a += 2;
        b += 2;
        let a1 = a + 1;
        let a2 = a + 2;
        let a3 = a - 1;
        let a4 = a - 2;
        let b1 = b + 1;
        let b2 = b + 2;
        let b3 = b - 1;
        let b4 = b - 2;
        //console.log(a, b);
        ary[a][b] = '#';
        //console.log(typeof(ary[a2][b1]));
        if(ary[a2][b1] === '.'){
            ary[a2][b1] = '#';
        }
        if(ary[a1][b2] === '.'){
            ary[a1][b2] = '#';
        }
        if(ary[a3][b2] === '.'){
            ary[a3][b2] = '#';
        }
        if(ary[a4][b1] === '.'){
            ary[a4][b1] = '#';
        }
        if(ary[a4][b3] === '.'){
            ary[a4][b3] = '#';
        }
        if(ary[a3][b4] === '.'){
            ary[a3][b4] = '#';
        }
        if(ary[a1][b4] === '.'){
            ary[a1][b4] = '#';
        }
        if(ary[a2][b3] === '.'){
            ary[a2][b3] = '#';
        }
    }

    for(i = 0; i < n + 6; i++){
        ary[i].shift();
        ary[i].shift();
        ary[i].shift();
        ary[i].pop();
        ary[i].pop();
        ary[i].pop()
    }
    ary.shift();
    ary.shift();
    ary.shift()
    ary.pop();
    ary.pop()
    ary.pop();
    let count = 0;
    for(i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            if(ary[i][j] === '.'){
                count++;
            }
        }
    }
    console.log(count);
}
C(require('fs').readFileSync('C.txt', 'utf8').split('\n').map((x) => x.trim()))