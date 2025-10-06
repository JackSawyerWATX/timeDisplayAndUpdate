let message = "Global";

function showMessage() {
  let message = "Local";
  console.log(message)
}

function calculateTime() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = hour + minutes / 60 + seconds / 3600;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM"

  //  console.log(`Current time: ${hour}:${formattedMinutes}:${formattedSeconds}`);

  const displayHour = hour % 12 === 0 ? 12 : hour % 12;

  let greeting;
  if (hour < 6) {
    greeting = "Good Night";
  } else if (hour <= 12) {
    greeting = "Good Morning";
  } else if (hour <= 17) {
    greeting = "Good Afternoon";
  } else if (hour <= 20) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return `${greeting} -- ${displayHour}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

console.log(message);
showMessage();

function updateGreeting() {
  console.clear();
  console.log(calculateTime());
}

setInterval(updateGreeting, 1000)
