const args = process.argv;
const timerNums = args.slice(2);

for (const item of timerNums) {
  let num = Number(item);
  if ((typeof num === "number") && (num >= 0)) {
    setTimeout(() => {
      process.stdout.write('BEEP\n');
    }, (num * 1000));
  }
}