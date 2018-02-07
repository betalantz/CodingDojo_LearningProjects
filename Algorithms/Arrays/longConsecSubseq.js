function longestContigousSubsequence(seq) {

    // to pointers to point at the current and next
    var count; 
    var j;
    var i = 0;
    var result = 0;
    var temp = [];
    var final = []

    // if array length is 1, return the empty array

    while(i < seq.length - 1){
        count = 0;
        j = i + 1;

        temp.push(seq[i])
        while(seq[i] < seq[j] && j < seq.length){
            count += 1;  
            temp.push(seq[j])
            j += 1
            i += 1      
        }

        if(count > result){
            result = count;
            final = temp;
        }

        i += 1;
        temp = [];
        //console.log(i + " " + count);
    }
    return final;

}
let arr = [7, 6, 5, 4, 1, 2]
console.log(longestContigousSubsequence(arr));

function longestContigSubseq(arr){
    let subSeqLength = 1
    let longest = 1
    let indexStart = 0
    let indexEnd = 0

    for (let i=0; i<arr.length-1; i++){
        // check if current is equal to next
        if(arr[i]==arr[i+1]-1){
            subSeqLength++ // if it is we increment
            if (subSeqLength > longest){ // we assign the longest and new bounds
                longest = subSeqLength
                indexStart = i+2-subSeqLength // make sure the index start is correct
                indexEnd = i+2
            }
        } else {
            subSeqLength = 1 // else reinitiate the straight length
        }
    }
    for (let x = indexStart; x < indexEnd; x++) // print the sequence
        console.log(arr[x] + ", ");
}
let arr2 = [3, 6, 5, 1, 9, 3, 2, 3, 4, 5, 1]
longestContigSubseq(arr2);