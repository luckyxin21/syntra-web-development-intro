const isUnique = (arr) => {
  const breadcrumbs = {};
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~ LOOP ~~~~ i === ${i}`);
    if (breadcrumbs[arr[i]]) {
      result = false;
    } else {
      breadcrumbs[arr[i]] = true;
    }
  }

  return result;
};

// console.log(isUnique([1,2,3]) === true);

const uniqSort = function (arr) {
  const breadcrumbs = {};
  const result = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    // start loop at 1 as element 0 can never be a duplicate
    if (!breadcrumbs[arr[i]]) {
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
};

uniqSort([4, 2, 2, 3, 2, 2, 2]); // => [2,3,4]
