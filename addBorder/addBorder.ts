export function addBorder(picture: string[]): string[] {
    let innerString = string => {
        return `*${string}*`
    }
    return ["*****", ...picture.map(str => innerString(str)), "*****"]
}

console.log(addBorder(["abc", "ded"]));