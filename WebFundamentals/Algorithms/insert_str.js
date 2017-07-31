function insert(str, index, insertStr){
    console.log(insertStr);
    var result = "";
    var res2 = "";
    for (var i = 0; i < str.length; i++){
        result += str[i];
            if (i===index){
                console.log(index);
                console.log(insertStr);
                for (var x = 0; x < insertStr.length; x++){;
                console.log(x);
                res2 += insertStr[x];
                console.log(res2);
                result += res2;
                console.log(result);
                console.log(x, 'sjddjsjdkjkjdkjks')
                }
            }
        
    }
    console.log(result); 
    return result;   
}
insert("winter", 3, "spring");