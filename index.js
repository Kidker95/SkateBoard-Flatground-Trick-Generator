const stance = ["", "Fakie ", "Nollie ", "Switch "];
const FSBS = ["FS ", "BS "];
const canBeFSBS = ["Kickflip", "Heelflip", "Underflip", "Sex Change"];
const cantBeFSBS = [
  "Hardflip",
  "360 Hardflip",
  "Hard Doubleflip",
  "Varial Kickflip",
  "Varial Heelflip",
  "Inward Heelflip",
  "360 Inward Heelflip",
  "Inward Double Heelflip",
  "Impossible",
  "Forward Impossible",
  "360 Flip",
  "540 Flip",
  "Lazer Flip",
  "Pressure Flip",
  "Pressure Heelflip",
  "Pressure Kickflip",
  "Casper Flip",
  "Hospital Flip",
  "Double Kickflip",
  "Double Heelflip",
  "Ghetto Bird",
  "Fingerflip",
];
const mustBeFSBS = [
  "Shuvit",
  "360 Shuvit",
  "540 Shuvit",
  "Bigspin",
  "Bigflip",
  "Bigheel",
  "Biggerspin",
  "Biggerflip",
  "Biggerheel",
  "180",
  "360",
  "540",
];
const lateTricks = [
  " late Shuvit",
  " late Kickflip",
  " late Heelflip",
  " late Impossible",
  " late Varial Heelflip",
  " late Hardflip",
  " late Body Varial",
  " late 360 Flip",
  " late FS Bigspin",
  " late BS Bigspin",
];

const randomSkateTrick = () => {
  const randomStance = stance[Math.floor(Math.random() * stance.length)];
  const randomFSBS = FSBS[Math.floor(Math.random() * FSBS.length)];
  const randomCanBeFSBS =
    canBeFSBS[Math.floor(Math.random() * canBeFSBS.length)];
  const randomCantBeFSBS =
    cantBeFSBS[Math.floor(Math.random() * cantBeFSBS.length)];
  const randomMustBeFSBS =
    mustBeFSBS[Math.floor(Math.random() * mustBeFSBS.length)];
  const randomLateTrick =
    lateTricks[Math.floor(Math.random() * lateTricks.length)];

  const randomFSBSTrick = randomStance + randomFSBS + randomCanBeFSBS;
  const randomCantBeFSBSTrick = randomStance + randomCantBeFSBS;
  const randomMustBeFSBStrick = randomStance + randomFSBS + randomMustBeFSBS;
  const canBeFSBSTrick = randomStance + randomCanBeFSBS;

  const randomNumber = Math.random();
  if (randomNumber < 0.25) {
    return randomFSBSTrick + randomLateTrick;
  } else if (randomNumber < 0.5) {
    return randomCantBeFSBSTrick;
  } else if (randomNumber < 0.75) {
    return randomMustBeFSBStrick;
  } else {
    return canBeFSBSTrick;
  }
};

const clearTrick = () => {
  document.getElementById("trickDisplay").textContent = "";
};

console.log(randomSkateTrick());
