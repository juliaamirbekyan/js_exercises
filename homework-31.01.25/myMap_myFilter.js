function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }

    function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
    let numbers = [1, 2, 3, 4, 5];

    let doubled = myMap(numbers, (num) => num * 2);
  console.log('Doubled:', doubled); 

    let odds = myFilter(numbers, (num) => num % 2 === 1);
  console.log('Odds:', odds);
  