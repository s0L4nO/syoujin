function B(input){
    const n = parseInt(input.shift());
    let trash = [];
    for(i = 0; i < n; i++){
        trash.push(input.shift().split(' ').map(Number));
    }
    const Q = parseInt(input.shift());
    let question = [];
    for(i = 0; i < Q; i++){
        question.push(input.shift().split(' ').map(Number));
    }
    //console.log(n, q, trash, question);
    for(i = 0; i < Q; i++){
        let [t, d] = question[i];
        let [q, r] = trash[t - 1];
        //console.log(t, d, q, r);
        for(j = d; j < d + q; j++){
            if(j % q === r){
                console.log(j);
                break;
            }
        }
    }
}
B(require('fs').readFileSync('B.txt', 'utf8').split('\n'))