function zero_negativity(arr) {
    for (int of arr) {
        if (int < 0) {
            return false;
        }
    }
    return true;
}

function is_even(num) {
    if (num % 2 !== 0) {
        return false;
    }
    return true;
}

function how_many_even(arr) {
    var count = 0;
    for (int of arr) {
        if (is_even(int) == true) {
            count++;
        }
    }
    return count;
}

function create_dummy_array(n) {
    var arr = [];
    while (n > 0) {
        let x = Math.floor(Math.random() * 10)
        arr.push(x);
        n--;
    }
    return arr;
}
function random_choice(arr) {
    let len = arr.length;
    let x = Math.floor(Math.random() * len)
    return arr[x];
}

let math1 = zero_negativity([2,-5, 1])
console.log(math1)

let math2 = is_even(9)
console.log(math2)

let math3 = how_many_even([2, 10, 17, 31, 42, 45])
console.log(math3)

let math4 = create_dummy_array(15)
console.log(math4)

let math5 = random_choice([45, 166, 0, -23, 3.3, -7, 25])
console.log(math5)