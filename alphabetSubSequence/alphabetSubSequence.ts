export function alphabetSubsequence(s: string): boolean {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let count = 0;
    let result = true;
    let strArr = s.split('');
    let index = 0;
    while(result){
       alpha.findIndex(strArr[count]) 
    }
    // for(let letter = 1; letter > s.split('').length; letter++){
    //     let nextIndex = alpha.findIndex(i => i === s.split('')[letter]);
    //     if(nextIndex <= index){
    //         result = false
    //     } else {
    //         index = nextIndex;
    //     }
        
    // }
    return result;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
