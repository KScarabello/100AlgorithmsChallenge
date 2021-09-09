export function alphabeticShift(inputString: string): string {
    let alphaArray = inputString.split('');
    let resultArray = [];
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    alphaArray.forEach(letter => {
        if(letter === 'z'){
            resultArray.push('a');
        } else {
            resultArray.push(alpha[alpha.indexOf(letter) + 1]);
        }
    })

    return resultArray.join('');
}

// const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

console.log(alphabeticShift('crazy'));