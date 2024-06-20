const test = `In 1991, while studying computer science at University of Helsinki, Linus Torvalds began a project that later became the Linux kernel. He wrote the program specifically for the hardware he was using and independent of an operating system because he wanted to use the functions of his new PC with an 80386 processor. Development was done on MINIX using the GNU C Compiler.`;
const test2 = `In1991,whilestudyingstudyingcomputerscienceatUniversityof Helsinki`;

const size = 40;
const size2 = 1;

function formatText(text, max) {
  if (text.length === 0) return "text is empty";
  if (max <= 0) return "max must be greater than 0";
  
  let lines = "";
  const splitted = text.split(" ");
  if (splitted.length === 1) return splitted[0];

  let curLine = splitted[0];

  for (let i = 1; i < splitted.length; i++) {
    let lineLength = (curLine + ` ${splitted[i]}`).length;
    if (lineLength <= max) {
      curLine += ` ${splitted[i]}`;
    } else if (lineLength > max) {
      curLine += `\n`;
      lines += curLine;
      curLine = `${splitted[i]}`;
    }
  }

  lines += curLine;

  return lines;
}

console.log(`TESTING WITH "${test}"\nFOR MAX LINE LENGTH = ${size}`)
let output = formatText(test, size);
console.log(output);
console.log(`=================================================`);

console.log(`TESTING WITH "${test}"\nFOR MAX LINE LENGTH = ${size2}`)
output = formatText(test, size2);
console.log(output);
console.log(`=================================================`);

console.log(`TESTING WITH "${test2}"\nFOR MAX LINE LENGTH = ${size}`)
output = formatText(test2, size);
console.log(output);
console.log(`=================================================`);

console.log(`TESTING WITH "${test2}"\nFOR MAX LINE LENGTH = ${size2}`)
output = formatText(test2, size2);
console.log(output);
