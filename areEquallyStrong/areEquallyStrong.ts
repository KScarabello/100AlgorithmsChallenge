export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let you = [yourLeft, yourRight];
    let friend = [friendsLeft, friendsRight];
    if(you.sort()[0] === friend.sort()[0] && you.sort()[1] === friend.sort()[1]){
        return true;
    } else {
        return false;
    }
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
