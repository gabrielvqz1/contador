    const countIt = () =>{
    let word = document.getElementById("word").value;
    word = word.toLowerCase().match(/[a-z]/g).sort();
    let letterCount = {};
    
    
    
    word.forEach(letter => {
    
    if (letterCount[letter]){
    letterCount[letter]++;
    }else{
    letterCount[letter] = 1;
    }
    })
    let infoArray = Object.entries(letterCount);
    let resultArray = [];
    for (let i = 0; i < infoArray.length; i++){
    infoArray[i][0] = infoArray[i][0] + ':';
    resultArray.push(infoArray[i]);
    }
     finalArray = [];
    for (let j = 0; j < resultArray.length; j++){
    finalArray.push(resultArray[j].join(""));
    
    }
     resultString = finalArray.join("");
    document.getElementById("result").innerHTML = resultString;
    document.getElementById("word").value = "";
    }