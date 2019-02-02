// spread operator
function print(...numbers){
    console.log(numbers);
}

print(1,2,2,2,3)

// destructuring assignment with arrays
{
    let c = [100, 200];
    let [a, b] = c;
    console.log(a , b)

    let got = ["JohnSnow ", "Daneres ", "Tyrion"];
    let [ice, fire, wine] = got;
    console.log(ice + fire + wine);

    let nums = [1,2,3,4,5,6,7,8];
    let [first, ...remaining] = nums;
    console.log(first, remaining);

    let itsme = {
        name: "pank",
        lastName: "ambalgi"
    }

    let {name, lastName} = itsme;

    console.log(name+lastName);
}

// arrow functions
{
    let printThis = (a=1, b=2, c=3) => {
        console.log(a, b, c);
    }

    printThis();
}

//map functions
{
    let points = [1,2,3,4,5,6];
    let addedOne = points.map(element => element+1)
    console.log(addedOne);
}

//filter functions

{
    let scores = [55,56,78,89,90, 100];

    let passing = scores.filter (element => element >=70);

    console.log(passing);

    let highest = scores.find(element => {
        return element == 100;
        }
    )
    console.log(highest);
}

import {pank} from './student.js'

console.log(pank.greet());