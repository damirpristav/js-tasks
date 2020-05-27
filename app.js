function sortedPairs(numbersArr) {
  if(numbersArr.length > 0) {
    let pairs = [];
    for(let i = 0; i < numbersArr.length; i++) {
      for(let j = i + 1; j < numbersArr.length; j++) {
        if(numbersArr[i] % numbersArr[j] === 0 || numbersArr[j] % numbersArr[i] === 0) {
          pairs.push(`(${numbersArr[i]},${numbersArr[j]})`);
        }
      }
    }
    console.log(`${pairs.length} - ${pairs.join(',')}`);
  }else {
    console.log('Your array is empty, please add some numbers');
  }
}

sortedPairs([2,4,6]);
sortedPairs([2,4,16]);

function changeCapitalization(text) {
  const charactersArr = text.split('');
  const newArr = charactersArr.map(char => {
    if(char === char.toUpperCase()) {
      return char.toLowerCase();
    }else if(char === char.toLowerCase()) {
      return char.toUpperCase();
    }
  });
  console.log(newArr.join(''));
}

changeCapitalization('Damir je Cool');

