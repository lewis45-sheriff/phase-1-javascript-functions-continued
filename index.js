
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

console.log(saturdayFun()); 
console.log(saturdayFun("bathe my dog")); 

console.log(mondayWork()); 
console.log(mondayWork("work from home")); 

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated coder"));
console.log(encouragingPromptFunction()); 
