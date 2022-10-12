// Iteration 1: Names and Input
let hacker1 = "Vishnu";
console.log(`The driver\'s name is ${hacker1}.`);
let hacker2 = "Hugo";
console.log(`The navigator\'s name is ${hacker2}.`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let capitals = "";
for (let i = 0; i < hacker1.length; i++) {
  capitals += `${hacker1[i].toUpperCase()} `;
}
console.log(capitals);

let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
console.log(reverse);

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum purus et diam rhoncus egestas. Duis varius ornare libero, ut eleifend dui dignissim ut. Morbi ac accumsan ante, in faucibus felis. Proin a elit faucibus, eleifend mauris et, efficitur sem. Pellentesque tincidunt est non rhoncus lacinia. Praesent pharetra pellentesque convallis. Sed sollicitudin velit ac eros blandit sollicitudin. Suspendisse aliquet, ex ac hendrerit luctus, elit metus bibendum est, id blandit lorem urna non sapien. Cras hendrerit pulvinar lectus in viverra. Suspendisse ac purus nec sem aliquam vulputate.
Ut ultricies mattis ligula quis tincidunt. Integer posuere placerat elementum. Aliquam imperdiet purus eu convallis hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi metus enim, ornare vitae sodales pulvinar, auctor vitae felis. Pellentesque id gravida enim. Proin at arcu vel neque lobortis fermentum a sed quam. Praesent nec nisi aliquam elit rhoncus dapibus. Suspendisse at auctor purus. Nullam eu feugiat ex. Ut tincidunt aliquam turpis a tempus. Morbi faucibus egestas mi, at fermentum risus rutrum quis. Mauris dignissim condimentum laoreet. Cras ipsum enim, sagittis sollicitudin eros pharetra, ullamcorper laoreet purus. Sed non feugiat purus, quis hendrerit lacus.
Pellentesque pellentesque mi non ligula ullamcorper, in eleifend metus elementum. Vestibulum vel enim feugiat, interdum turpis ut, posuere elit. Duis ultricies scelerisque ex, a finibus velit venenatis sed. Ut eget tristique quam. Nullam malesuada lectus ac orci lobortis interdum. Morbi sagittis urna urna, at ultricies justo molestie quis. Phasellus ac tempor purus, a faucibus ex. Morbi mattis orci eget sapien tincidunt, nec bibendum libero laoreet. Cras quis vestibulum ante. Curabitur convallis augue pellentesque, pharetra erat ac, porttitor nisl. Curabitur sapien enim, faucibus ac consequat vel, condimentum luctus justo. Nullam elit ligula, gravida eget varius at, dapibus at nisi. Aliquam eget ullamcorper neque, quis porta mauris. Maecenas molestie nunc et velit suscipit, porta finibus dui maximus. Nunc fermentum tellus mi, et rhoncus lectus interdum vel. Phasellus nec neque interdum, scelerisque lacus a, maximus odio.`;

let count = 1;
for (x of paragraph) {
  if (x === " " || x === "\n") {
    count += 1;
  }
}
console.log(count);

let countEt = 0;
let word = "";

paragraph.split(" ").map((x) => {
  x === "et" ? (countEt += 1) : 1 === 1;
});
console.log(countEt);

//Bonus 2:

let phraseToCheck = "kayak";
function isPalindrome(str) {
  let original = str
    .replace(/[.,\/#'?!$% \^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ")
    .toLowerCase()
    .split("")
    .join("");
  let reversed = str
    .replace(/[.,\/#'?!$% \^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  //let reverse = original.reverse();
  console.log(original, reversed);
  if (original === reversed) {
    console.log("It's a palindrome");
  } else {
    console.log("It's not a palindrome");
  }
}

isPalindrome(phraseToCheck);
