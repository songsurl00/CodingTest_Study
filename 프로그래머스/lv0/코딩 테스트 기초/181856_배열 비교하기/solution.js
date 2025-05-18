function solution(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    arr1Reduce = arr1.reduce((acc, cur) => acc + cur, 0);
    arr2Reduce = arr2.reduce((acc, cur) => acc + cur, 0);
    if (arr1Reduce > arr2Reduce) {
      return 1;
    } else if (arr1Reduce < arr2Reduce) {
      return -1;
    } else {
      return 0;
    }
  }
}
