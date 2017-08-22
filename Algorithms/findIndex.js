function findIndex(arr, target){
    
        for (var i = 0; i<arr.length; i++){
            
            if (arr[i]=target){
                console.log i;
                return i;
            }
        return undefined;
        }
    }
    findIndex([99, 10, 3], 10)