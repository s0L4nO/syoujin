function A(input){
    let str = [];
    for(i = 0; i < input.length; i++){
        str.push(input[i]);
    }
    str.sort();
    if(str.join('') === 'ABC'){
        console.log('Yes');
    }else{
        console.log('No');
    }
    //console.log(str.join(''));
}
A(require('fs').readFileSync('A.txt', 'utf8').trim())