function A(input){
    let str = [];
    for(i = 0; i < input.length; i++){
        str.push(input.substring(i, i + 1));
    }
    //console.log(str);
    let output = [];
    for(i = 0; i < str.length; i++){
        if(str[i] !== '.'){
            output.push(str[i]);
        }
    }
    console.log(output.join(''));
}
A(require('fs').readFileSync('A.txt', 'utf8'))