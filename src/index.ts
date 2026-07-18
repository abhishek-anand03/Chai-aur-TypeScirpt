function greet(person: string): string {
  return `Hello ${person}, Welcome to Chaicode`
}

const username: string = "Chai aur TypeScript"
console.log(greet(username));

function meeting(time: string): string {
  return `Meet me at ${time} O'clock in the Central Park.`
}

const meetingTime: string = "18:30";

console.log(meeting(meetingTime));
