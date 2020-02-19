var i = 1;

while(i <= 20){
  console.log(`Hello, world ${i}`);
  i++;
}

var i = 1;

while(i <= 20){
  console.log("Hello, world");
  i++;
}

var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard"];

for(var i=0; i<moviesArray.length; i++){
  console.log(moviesArray[i]); 
}

var it107Array=["Kalla", "Gary", "Jeffery", "Rhiannon"]

for(var i=0; i < it107Array.length; i++){
  console.log(`${it107Array[i]} is here today!`); 
}

var interestsArray = ["Sleeping", "Watching TV", "Hanging out with Matthew", "Eating", "Going to the mall"];

for(var i=0; i<interestsArray.length; i++){
 if(interestsArray[i] === "Eating") {
  console.log(`My favorite interest is: ${interestsArray[i]}`);
}
else {
  console.log(`My other interest is: ${interestsArray[i]}`)
}
}

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(var i=0; i<harryPotterTitles.length; i++){
  console.log(`Harry Potter: ${harryPotterTitles[i]}`); 
}

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
for(var i=0; i < grades.length; i++){
  if(grades[i] > 0 && grades[i]<= 69){
console.log(`You got an F.`)

  }else if(grades[i] > 70 && grades[i]<= 76){
    console.log(`You got a D.`)}
  
 else if(grades[i] > 77 && grades[i]<= 84){
  console.log(`You got a C.`)}
  
  else if(grades[i] > 84 && grades[i]<= 92 ){
console.log(`You got a B.`)

} else if(grades[i] > 93 && grades[i]<= 100){
console.log(`You got an A.`)
}
  }

for(var i=0; i < 100; i++){
  console.log("TWEET TWEET TWEET!");
}

var favoriteFoodsArray = ["Pizza", "Tacos", "Ribs", "Mochi", "Grilled Cheese"]
for(var i = 0; i < favoriteFoodsArray.length; i++){
  console.log(favoriteFoodsArray[i]);
}