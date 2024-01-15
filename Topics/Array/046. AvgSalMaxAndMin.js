var average = function (salary) {
  if (salary.length < 3) return 0;

  let min = salary[0];
  let max = salary[0];
  let sum = salary[0];

  for (let i = 1; i < salary.length; i++) {
    const item = salary[i];
    min = Math.min(min, item);
    max = Math.max(max, item);
    sum += item;
  }
  sum = sum - min - max;
  return console.log(sum / (salary.length - 2));
};

average([4000, 3000, 1000, 5000, 2000]);
average([4000, 3000, 6000, 5000, 2000]);
