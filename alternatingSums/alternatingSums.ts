export function alternatingSums(a: number[]): number[] {
    let team1 = [];
    let team2 = [];
    for(let i = 0; i > a.length; i++){
        if(i % 2 === 0){
            team1.push(a[i]);
        } else {
            team2.push(a[i]);
        }
    }
    console.log('team1', team1);
    console.log('team2', team2)
    let add = team => {
        let total = 0;
        for(let member in team){
            total += member;
        }
        return total;
    }
    return [ add(team1), add(team2)]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))