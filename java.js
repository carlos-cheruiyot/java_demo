

let username = "carlos";
console.log(username);
let age = 70;
let isMember = true; 

if (age >= 65 && isMember) {
    console.log("Eligible for discount");
  }

  let city = "";
  if (!city) {
    console.log("City is not set");
  }

  let isStudent = true;
  if ((age >= 18 && age <= 30) || isStudent) {
    console.log("Eligible for youth program");
  }

  let isRaining = false;
  if (!isRaining) {
    console.log("Let's go outside!");
  }

  let temperature = 32;
  console.log(temperature > 30 ? "Hot day" : "Comfortable day");

  let isLoggedIn = false;
  let guestAccess = true; 
  if (isLoggedIn || guestAccess) {
    console.log("Access granted");
  }

  let score = 100;
  if (typeof score === "number") {
    console.log("Valid score");
  } else {
    console.log("Invalid score");
  }

  let hasTickets = false;
  let isVIP = true;
  if (hasTickets || isVIP) {
    console.log("Access granted");
  }

  function canDrive(age, hasLicense) {
    return age >= 18 && hasLicense;
  }

  console.log(canDrive(20, true));