// const turnOnCoffeeMaker = (brand) => {
//     console.log(`1. Turn on the ${brand} coffee maker.`);
// };

// const addWater = (ounces) => {
//     console.log(`2. Add ${ounces} ounces of water to the coffee maker.`);
// };

// const addCoffeeBeans = (roast) => {
//     console.log(`3. Add ${roast} coffee beans to the coffee maker.`);
// };

// const getMug = (size) => {
//     console.log(`4. Get a ${size} mug and place it under the coffee maker.`);
// };
// const pressStart = (color) => {
//     console.log(`5. Press the ${color} start button to brew the coffee.`);
// };

// const addSugarAndCream = (amount) => {
//     console.log(`6. Once the coffee has brewed, add a ${amount} of cream and sugar to the mug.`);
// };

// turnOnCoffeeMaker("Hamilton Beach");
// addWater(8);
// addCoffeeBeans("light");
// getMug("small");
// pressStart("green");
// addSugarAndCream("medium");

// const add = (firstNumber, secondNumber) => {
//     const sum = firstNumber + secondNumber
//     return sum
// }

// const subtract = (firstNumber, secondNumber) => {
//     const result = firstNumber - secondNumber;
//     return result;
// };

// const divide = (firstNumber, secondNumber) => {
//     const dividend = firstNumber / secondNumber;
//     return dividend;
// };

// const multiply = (firstNumber, secondNumber) => {
//     const times = firstNumber * secondNumber;
//     return times;
// };

// const answer = multiply(10,2);

// console.log(answer);

const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	};

	return newChassisObject;
};

// const addBody = (chassisObject) => {
//     const chassisBody.body = "Fever";
//     return chassisBody;
// };

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const addWheels = (chassisWheels) => {
	// Use dot notation to add a new property
	chassisWheels.wheels = 4;

	// Return the chassis that now has a body property on it
	return chassisWheels;
}

const addEngine = (chassisEngine) => {
    chassisEngine.engine = "4.8L";
    return chassisEngine;
}

const addSteeringWheel = (chassisSteeringWheel) => {
    chassisSteeringWheel.steeringWheel = "Tilting";
    return chassisSteeringWheel;
}

const addDriveTrain = (chassisDriveTrain) => {
    chassisDriveTrain.driveTrain = "Two wheel drive";
    return chassisDriveTrain;
}

const newCarBlank = createChassis();
const newCarWithWheels = addWheels(newCarBlank);
const newCarWithEngine = addEngine(newCarWithWheels);
const newCarWithBody = addBody(newCarWithEngine);
const finishedCar = addDriveTrain(newCarWithBody);

console.log(finishedCar);




