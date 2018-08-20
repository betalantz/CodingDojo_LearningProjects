function gradingStudents(grades){
    let res = []
    for (let i=0; i<grades.length; i++){
        let x = (Math.round(grades[i]/5))*5
        if (grades[i]>=38 && grades[i]<x){
            res.push(x)
        } else {
            res.push(grades[i])
        }
    }
    return res
}
const grades1 = [73,67,38,33]
console.log(gradingStudents(grades1));