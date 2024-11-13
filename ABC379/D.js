function D(input){
    const q = parseInt(input.shift());
    let ary = [];
    for(i = 0; i < q; i++){
        let tmp = input[i].split(' ').map(Number);
        let num = tmp[0];
        switch(num){
            case 1:
                ary.push(0);
                break;
            case 2:
                let t = tmp[1];
                for(j = 0; j < ary.length; j++){
                    ary[j] += t;
                }
                break;
            case 3:
                let h = tmp[1];
                let ans = 0;
                for(j = 0; j < ary.length; j++){
                    if(ary[j] >= h){
                        ans++;
                    }
                }
                ary.splice(ans);
                console.log(ans);
                break;
        }
        //console.log(ary);
    }
}
D(require('fs').readFileSync('D.txt', 'utf8').split('\n'))