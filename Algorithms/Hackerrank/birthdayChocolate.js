function birthdayChoc(s, d, m) {
    let seqs = 0
    for (let i=0; i<s.length; i++){
        let months = m
        let days = 0
        while (months > 0){
            days += s[i+(months-1)]
            months--
        }
        if (days == d) {
            seqs++
        }
    }
    return seqs
}
const sq1 = [1,2,1,3,2]
const d1 = 3
const m1 = 2
