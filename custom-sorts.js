function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
}

function oddEvenSort(arr) {
  // Your code here
  let left = [];
  let right = [];
  arr.forEach((num) => {
    if (num % 2 === 0) right.push(num);
    else left.push(num);
  });
  // console.log(left);
  // let leftSort = left.sort();
  // let rightSort = right.sort();
  // console.log(leftSort);
  // console.log(rightSort);
  return [...left.sort((a, b) => a - b), ...right.sort((a, b) => a - b)];
}

function validAnagrams(s, t) {
  let first = s.split('').sort().join('');
  let second = t.split('').sort().join('');
  return first === second
}

function reverseBaseSort(arr) {
  arr.sort((a, b) => a - b);
  return arr.sort((a, b) => b.toString().length - a.toString().length);
}

function frequencySort(arr) {
  let frequencies = {};
  let numbers = [];
  let results = [];
  arr.forEach(num => {
    if (!frequencies[num]) {
      frequencies[num] = 1
      numbers.push(num)
    }
    else frequencies[num]++;
  });
  numbers.sort((a, b) => {
    return b - a
  });
  numbers.sort((a, b) => {
    return frequencies[a] - frequencies[b]
  });
  // console.log(numbers)
  numbers.forEach(num => {
    let input = num;
    let counter = frequencies[num]
    while (counter > 0) {
      results.push(input)
      counter--;
    }
  })
  return results;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
