const myName = 'Curtis Punches';

const age = 29;

const birthday = 'July 29';

const detroitGC = false;

const lifeEvents = [
  'I was born in Grand Rapids, Michigan',
  'I went to Michigan State University',
  'I was captain of my High School Basketball Team',
  'I have visited London, United Kingdoms',
];

if (detroitGC === true) {
  console.log(
    'My name is ' +
      myName +
      'and I am a student at Grand Circus in Detroit, Michigan. I am currently ' +
      age +
      ' years old and my birthday is on ' +
      birthday +
      '.'
  );
} else {
  console.log(
    'My name is ' +
      myName +
      'and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ' +
      age +
      ' years old and my birthday is on ' +
      birthday +
      '.'
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

const randomNumber = Math.floor(Math.random() * 10) + 1;
let i = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    i++;
    console.log(randomNumber + ' !==5');
    
  } else {
    i++;
    console.log(
      "5 === 5. It took " + i +  " iterations to randomly generate the number 5.");
    break;
  }
}
