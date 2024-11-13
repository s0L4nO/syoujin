function cardGameForTwo(input){
    const n = parseInt(input[0]);
    let card = input[1].split(' ').map(Number).sort((a, b) => (a > b ? -1 : 1));
    let a = [];
    let b = [];
    //console.log(n, card, a, b);
    for(i = 0; i < n; i++){
        if(i % 2 === 0){
            a.push(card[i]);
        }else{
            b.push(card[i]);
        }
    }
    console.log(a.reduce((x, y) => x + y) - b.reduce((x, y) => x + y));
}
cardGameForTwo(require('fs').readFileSync('CardGameForTwo.txt', 'utf8').split('\n'))