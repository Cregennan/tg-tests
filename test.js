let t = [39, 78, 56, 36, 24, 25, 15, 15, 89, 71];
for(let i = 0; i < t.length; i++){
    for(let j = i; j < t.length; j++){
        if( t[i] > t[j]){
            [t[i], t[j]] = [t[j], t[i]];
        }
    }
}
console.log(t);