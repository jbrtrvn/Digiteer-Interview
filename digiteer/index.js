function firstUniqueChar(str){
    let charCount = {};

    for (let i=0; i<str.length; i++){
        charCount[str[i]] = (charCount[str[i]] || 0) +1;
    }

    for (let i=0; i<str.length; i++){
        if(charCount[str[i]] ===1 ){
            return str[i];
        }
    }
    return "";
}

console.log(firstUniqueChar("aabbcc"));
console.log(firstUniqueChar("abacabd"));
console.log(firstUniqueChar("abcd"));