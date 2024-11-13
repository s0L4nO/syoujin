function B(input){
    const s = input[0];
    const t = input[1];
    if(s === t){
        console.log(0);
    }else{
        if(s.length === t.length){
            for(i = 0; i < s.length; i++){
                if(s[i] !== t[i]){
                    console.log(i + 1);
                    break;
                }
            }
        }else if(s.length > t.length){
            let t1 = t.padEnd(s.length);
            for(i = 0; i < s.length; i++){
                if(s[i] !== t1[i]){
                    console.log(i + 1);
                    break;
                }
            }
        }else if(s.length < t.length){
            let s1 = s.padEnd(t.length);
            for(i = 0; i < s1.length; i++){
                if(s1[i] !== t[i]){
                    console.log(i + 1);
                    break;
                }
            }
        }
    }
}
B(require('fs').readFileSync('B.txt', 'utf8').split('\n').map((x) => x.trim()))