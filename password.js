//accessing the range input
const range = document.getElementById("RANGE");
//const rangevalue = range.value;
const characters = document.getElementById("CHARACTER");
//this basically appends RANGE NUMBER to NUMBER OF CHARACTER whenever RANGE is clicked
range.onclick = () => {
  char();
};

//this basically appends NUMBER OF CHARACTER to RANGE whenever NUMBER OF CHARACTER is clicked
characters.onclick = () => {
  ranges();
};

//logic behind appending RANGE.VALUE to CHARACTER.VALUE
function char() {
  characters.value = range.value;
}

//logic behind appending CHARACTER.VALUE to RANGE.VALUE
function ranges() {
  range.value = characters.value;
}

//Accessing and defining the last three CHARACTERS
const uppercase = document.getElementById("UPPERCASE");
const number = document.getElementById("NUMBER");
const symbols = document.getElementById("SYMBOLS");
const password = document.getElementById("PASSWORD");

function generatepasswordbtn() {
  //Storing all the CHARACTER VALUE/CHECKBOX above in FUNCTION's PARAMETERS below
  CharacterAmount = range.value;
  IncludeNumber = number.checked;
  IncludeUppercase = uppercase.checked;
  IncludeSymbols = symbols.checked;
  //this variable stores function that carries parameters that stores values/checked of each CHARACTERS ENTERED
  const passwords = generatepassword(
    CharacterAmount,
    IncludeNumber,
    IncludeUppercase,
    IncludeSymbols
  );

  password.innerText = passwords;
}

//DELETE function for erasing passwords
function COPY() {
  password.innerText = "";
}

//This function is the one called up in the "generatepasswordbtn()"stored in a variable called PASSWORD
//AND once Value and checked are selected, the function is run.
//this function basically generates PASSWORDS with four PARAMETERS
function generatepassword(
  CharacterAmount,
  IncludeNumber,
  IncludeSymbols,
  IncludeUppercase
) {
  //DEFINING the logic for getting PASSWORDS with LOWERCASE as DEFAULT
  let ALLCHARACTERS = LOWERCASE;
  if (IncludeUppercase) ALLCHARACTERS = ALLCHARACTERS.concat(UPPERCASE);
  if (IncludeNumber) ALLCHARACTERS = ALLCHARACTERS.concat(NUMBER);
  if (IncludeSymbols) ALLCHARACTERS = ALLCHARACTERS.concat(SYMBOLS);

  const passwordcharacter = [];
  for (let i = 0; i < CharacterAmount; i++) {
    const charactercode =
      ALLCHARACTERS[Math.floor(Math.random() * ALLCHARACTERS.length)];
    passwordcharacter.push(String.fromCharCode(charactercode));
  }
  return passwordcharacter.join("");
}

// Calling the function for getting ASCII Character Codes with RANGE OF CHARACTERS
const UPPERCASE = toptobottom(65, 90);
const LOWERCASE = toptobottom(97, 122);
const NUMBER = toptobottom(48, 57);
const SYMBOLS = toptobottom(33, 47)
  .concat(toptobottom(58, 64))
  .concat(toptobottom(91, 96))
  .concat(123, 126);

// function for getting ASCII Character Codes
function toptobottom(bottom, top) {
  const array = [];
  for (let i = bottom; i <= top; i++) {
    array.push(i);
  }
  return array;
}
