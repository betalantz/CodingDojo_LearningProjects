function getTotalX(a, b){
    let resA = []
    let resB = []
    for (let i=2; i <= Math.pow(a[a.length-1],2); i++){
        if (i % a[0] == 0){
            resA.push(i)
        }
    }
    for (let j=1; j<a.length; j++){
        for (let i=2; i <= Math.pow(a[a.length-1],2); i++){
            if (i % a[j] == 0 && i != resA[j]){
                resA.splice(i,1)
            }
        }
    }
    
    // for (let j=0; j<b.length; j++){
    //     for (let i=2; i <= 100; i++){
    //         if (b[j] % i == 0){
    //             resB.push(i)
    //         }
    //     }
    // }
    console.log(resA);
    // console.log(resB);
    // var setA = new Set(resA)
    // var setB = new Set(resB)
    // var intersection = new Set([...setA].filter(x => setB.has(x)));
    for (let k=0; k<b.length; k++){
        for (let m=0; m<resA.length; m++){
            if (b[k] % resA[m] != 0) {
                resA.splice(m, 1)
            }
        }
    } 
    // const uniqueArr = res.filter((elem, idx, res) => res.indexOf(elem)===idx)
    // return Array.from(intersection)
    return resA
}
const a1 = [2,6]
const b1 = [24, 36]
console.log(getTotalX(a1, b1));