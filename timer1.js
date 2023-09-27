const timer = (inputArr) => {
  for (let elm of inputArr) {
    const parsedNum = parseFloat(elm);
    if (!Number.isFinite(parsedNum) || parsedNum < 0) {
      console.log(`Invalid input: ${elm} (skipping)`);
      continue;
    }
    setTimeout(() => {
      process.stdout.write("\x07");
    }, parsedNum * 1000);
  }
};

const cmdInput = process.argv.slice(2);

if (cmdInput.length === 0) {
  console.log("No number provided, ending immediately");
} else {
  timer(cmdInput);
}
