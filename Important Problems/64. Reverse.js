function reverseWord(str){
        let strNew = '';
        for(let i = str.length-1; i>=0; i--){
            strNew += str[i];
        }
        console.log(strNew);
}

reverseWord("Geeks");
