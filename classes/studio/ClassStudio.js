//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let sum = 0;
        for(let i = 0; i < this.scores.length; i++){
            sum += Number(this.scores[i]);
        }
        return (sum / this.scores.length).toFixed(1);
    }
    status(){
        let averageTestScore = this.average();
        if(averageTestScore >= 90){
            return 'Accepted';
        }else if (averageTestScore >= 80){
            return 'Reserve';
        }else if (averageTestScore >= 70){
            return 'Probationary';
        }else {
            return 'Rejected';
        }

    }

}

const lori = new CrewCandidate('lori',100,[95, 98, 90]);
const gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
// console.log(lori);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
lori.addScore(83);
console.log(lori);

// average test
console.log(lori.average());

lori.addScore(0);

// status check
//console.log(`${lori.name} earned an average test score of ${lori.average()}% and has a status of ${lori.status()}`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let counter = 0;
while (gladGator.status() !== 'Reserve'){
    gladGator.addScore(100);
    counter+=1;
}

console.log(`${gladGator.name} took ${counter} attempts to be ${gladGator.status()}`);
