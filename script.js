/*quetion 1*/



const heightYinka = 1.69;
const massYinka = 78;

const heightMoyo = 1.95;
const massMoyo = 92;


const bmiYinka = (78 / 1.69**2);
console.log(bmiYinka);

const bmiMoyo =(92 / 1.95**2);
console.log(bmiMoyo);

yinkaHigherBmi =  27.309968138370508;
moyoHigherBmi = 24.194608809993426;

console.log(yinkaHigherBmi > moyoHigherBmi)


/*question 2*/

if( yinkaHigherBmi > moyoHigherBmi ){

console.log("Yinka's BMI is higher than Moyo's");
}
else {
    console.log("Moyo's BMI is higher than Yinka");
}


let firstName = "Yinka's";
let  yinkaBmi = "(27.3)";
let  secondName = "Moyo's";
let  moyoBmi = " (24.2)";

const samadNew = firstName + "BMI" + yinkaBmi + "is higher than" + secondName + "BMI" + moyoBmi+ "!" ;
console.log(samadNew);





