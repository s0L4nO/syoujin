function A(input){
    const n = input[0];
    let s = input[1];
    let count = 0;
    for(i = 0; i < n; i++){
        let j = i + 1;
        let k = i + 2;
        if(s[i] === '#' && s[j] === '.' && s[k] === '#'){
            count++;
        }
    }
    console.log(count);
}
A(require('fs').readFileSync('A.txt', 'utf8').split('\n').map((X) => X.trim()))