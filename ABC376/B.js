function B(input){
    const[n, q] = input.shift().split(' ').map(Number);
    //console.log(n, q);
    let ring = new Array(n * 2).fill('.');
    let ans = 0;
    ring[0] = 'L';
    ring[n] = 'L';
    let Ln = 0;
    ring[1] = 'R';
    ring[n + 1] = 'R';
    let Rn = 1;
    console.log(ring);
    for(i = 0; i < q; i++){
        let [h, t] = input[i].split(' ');
        //console.log(h, t);
        let count1 = 0;
        let count2 = 0;
        ring[t - 1] = 't';
        ring[n + t - 1] = 't';
        if(h === 'L'){
            for(j = Ln; j < n * 2; j++){
                if(ring[j] !== '.'){
                    break;
                }else{
                    count1++;
                }
            }
            for(j = Ln + n; j < n * 2; j++){
                if(ring[j] !== '.'){
                    break;
                }else{
                    count2++;
                }
            }
            if(count1 < count2){
                count1 = count2;
                count2 = 0;
            }
            
        }
    }
    console.log(ans);
}
B(require('fs').readFileSync('B.txt', 'utf8').split('\n'))