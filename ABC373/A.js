function A(input){
    let count = 0;
    for(i = 0; i < input.length; i++){
        if(input[i].length === i + 1){
            count++;
        }
    }
    console.log(count);
}
A(require('fs').readFileSync('A.txt', 'utf8').split('\n').map((x) => x.trim()))