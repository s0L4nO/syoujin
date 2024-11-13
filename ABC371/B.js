function ABC371_B(input){
    let ary = input.split('\n');
    let temp = ary.shift().split(' ');
    console.log()
    const n = temp[0];
    const m = temp[1];
    let count = 0;
    let family = 1;
    let aryN = [];
    for(i = 0; i < n; i++){
      let j = i + 1;
      aryN.push(j);
    }
    //console.log(n, m, ary);
    
    for(i = 0; i < m; i++){
        let temp1 = ary[i].split(' ');
        let a = Number(temp1[0]);
        let b = temp1[1];
        if(family = a){
            count = 0;
        }
        if(aryN.includes(a) && count == 0 && b == 'M'){
            console.log('Yes');
            count++;
            family++;
        } else {
            console.log('No');
            count++;
        }
    }
}
ABC371_B(require('fs').readFileSync('/dev/stdin', 'utf8'))