function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    const re = /(Mr|Mrs|Ms|Dr|Er)\.[A-Z][a-z]*$/
    /*
     * Do not remove the return statement
     */
    return re;
}
function regexVarInt() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = /[0-9]+/g;
    
    /*
     * Do not remove the return statement
     */
    return re;
}
function main(s) {
    const re = regexVarInt();
    
    const r = s.match(re);
    console.log(r);
    for (const e of r) {
        console.log(e);
    }
}
const str = "102, 1948948, and 1.3 and 4.5"
main(str)