const extendHex = (shortHex) => {
  // Remove the "#" symbol if present
  shortHex = shortHex.replace("#", "");

  // Split the short hex code into individual color components
  const red = shortHex[0];
  const green = shortHex[1];
  const blue = shortHex[2];

  // Extend each color component to two characters
  const fullHex = `${red}${red}${green}${green}${blue}${blue}`;

  // Add the "#" symbol and return the full hex code
  return `#${fullHex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
