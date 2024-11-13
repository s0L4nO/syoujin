function A(input){
    let s = input.trim();
    if(s.substring(s.length - 3) === 'san'){
        console.log('Yes');
    }else{
        console.log('No');
    }
}
A(require('fs').readFileSync('A.txt', 'utf8'))