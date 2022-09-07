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
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
