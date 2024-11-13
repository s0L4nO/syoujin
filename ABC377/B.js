function B(input){
    let ans = 0;
    let ary = new Array(8);
    for(i = 0; i < 8; i++){
        ary[i] = new Array(8)
        ary[i] = input[i].split('');
    }
    //console.log(ary);
    for(i = 0; i < 8; i++){
        for(j = 0; j < 8; j++){
            if(!ary[i].includes('#')){
                let count = 0;
                for(k = 0; k < 8; k++){
                    if(ary[k][j] === '#'){
                        count++;
                    }
                }
                if(count === 0){
                    ans++;
                }
            }
        }
    }
    console.log(ans);
}
B(require('fs').readFileSync('B.txt', 'utf8').split('\n').map((x) => x.trim()))