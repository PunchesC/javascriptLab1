const hours = prompt('How many hours did you work this week: ');
const wage = prompt('What is your wage: ');

const totalPaycheck = hours * wage;

if (hours > 40) {
  let bonusPaycheck = (hours - 40) * (wage * 0.5) + totalPaycheck;
  let bonusMessage = 'Your pay with overtime is: ' + '$' + bonusPaycheck;
  console.log(bonusMessage);
  alert(bonusMessage);
  alert("It will take you " + (Math.ceil(1000000/bonusPaycheck)) + " to become a million. Good luck!");
} else {
  let paycheckMessage = 'Your pay is: ' + '$' + totalPaycheck;
  console.log(paycheckMessage);
  alert(paycheckMessage);
  alert("It will take you " + (Math.ceil(1000000/totalPaycheck)) + " weeks to become a million. Good luck!");
}
