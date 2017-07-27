 function numbersOnly(arr)
    {
        var newArr = [];
        for(var i=0; i < arr.length; i++)
        {
            if(typeof arr[i] === "number")
            {
            newArr.push(arr[i]);
            }
        }
    return newArr;
    }
    // numbersOnly([5, "sting", -4, "red", 0.14]);
    /* Why doesn't the above line work? */

    var testArr = [5, "sting", -4, "red", 0.14]
    console.log(numbersOnly(testArr));