function traveling(input){
    let n = parseInt(input.shift());
    let ary = input.map((x) => x.split(' ').map(Number));
    //console.log(n, ary);
    let deer = [0, 0];
    let judge = true;
    let time = 0;
    for(i = 0; i < n; i++){
        let [t, x, y] = ary[i];
        //console.log(t, x, y);
        if((Math.abs(x - deer[0]) + Math.abs(y - deer[1])) - (t - time) > 0 || ((Math.abs(x - deer[0]) + Math.abs(y - deer[1])) - (t - time)) % 2 === 1){
            judge = false;
            break;
        }
        deer = [x, y];
        time = t;
        //console.log(judge);
    }
    if(judge){
        console.log('Yes');
    }else{
        console.log('No');
    }
}
traveling(require('fs').readFileSync('traveling.txt', 'utf8').trim().split('\n'))