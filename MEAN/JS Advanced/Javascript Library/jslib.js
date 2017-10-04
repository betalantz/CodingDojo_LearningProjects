var _ = {
    map: function(list, iteratee) {
        var results = []
        for(let i = 0; i < list.length; i++) {
                results.push(iteratee(list[i]))
        }
        return results
    },
    reduce: function(list, iteratee, memo) { 
        let sum = memo
        for(let i = 0; i < list.length; i++) {
            sum = iteratee(sum, list[i])
        }
        return sum
    },
    find: function(list, iteratee) {   
        for(let i = 0; i < list.length; i++) {
            if (iteratee(list[i])) {
                return (list[i])
            }
        }
    },
    filter: function(list, iteratee) { 
        var results = []
        for(let i = 0; i < list.length; i++) {
            if (iteratee(list[i])) {
                results.push(list[i])
            }
        }
        return results
    },
    reject: function(list, iteratee) { 
        var results = []
        for(let i = 0; i < list.length; i++) {
            if (!iteratee(list[i])) {
                results.push(list[i])
            }
        }
        return results
    }
  }
 // you just created a library with 5 methods!

var by3 = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(by3); // => [3, 6, 9]
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum); // => 6
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even); // => 2
var gt3 = _.find([1, 2, 3, 4, 5, 6], function(num){ return num > 3; });
console.log(gt3);
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
var odds = _.filter([1, 2, 3, 4, 5, 6], (num)=>{ return num % 2 !== 0; });
console.log(odds); // if things are working right, this will return [2,4,6].
var odder = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odder); //=> [1, 3, 5]
  