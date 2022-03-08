function scuberGreetingForFeet(numberFeet){
    // Write your code here!
    let scuberGreetingForFeet;
    if (numberFeet<=400) {
      scuberGreetingForFeet = `This one is on me!`;
    } else if (numberFeet>2000) {
      scuberGreetingForFeet = `I will gladly take your thirty bucks.`;
    } if (numberFeet>2500) {
      scuberGreetingForFeet = `No can do.`;
    }
    return scuberGreetingForFeet 
}

function ternaryCheckCity(city){
  // Write your code here!
  // return city==="NYC"?"Ok, sounds good.":"No go."
let ternaryCheckCity;
ternaryCheckCity = city==="NYC"?"Ok, sounds good.":"No go.";
return ternaryCheckCity
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case `generous`: return `Thank you so much.`;
    case `not as generous` : return `Thank you.`;
    default: return `Bye.`;
  }
}