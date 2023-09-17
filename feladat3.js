const array =[0,7,16,30,41]
const reversedArray = []

for(let i = array.length - 1; i >= 0; i--) 
{
  const valueAtIndex = array[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)