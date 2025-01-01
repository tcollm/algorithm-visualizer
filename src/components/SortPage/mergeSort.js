// https://www.geeksforgeeks.org/merge-sort/
const merge = (arr, left, mid, right) => {
  const lLen = mid - left + 1;
  const rLen = right - mid;

  // temp arrays
  const lArr = new Array(lLen);
  const rArr = new Array(rLen);

  // copy data from arr to temp arrays
  for (let i = 0; i < lLen; i++) {
    lArr[i] = arr[left + i];
  }
  for (let j = 0; j < rLen; j++) {
    rArr[j] = arr[mid + 1 + j];
  }

  let i = 0,
    j = 0;
  let k = left;

  // merge temp arrays back into array in sorted order
  while (i < lLen && j < rLen) {
    if (lArr[i] <= rArr[j]) {
      arr[k] = lArr[i];
      i++;
    } else {
      arr[k] = rArr[j];
      j++;
    }
    k++;
  }

  // copy remaining elements of left array if they exists
  while (i < lLen) {
    arr[k] = lArr[i];
    i++;
    k++;
  }

  // copy remaining elements of right array if they exists
  while (j < rLen) {
    arr[k] = rArr[j];
    j++;
    k++;
  }
};

export const mergeSort = (arr, left, right) => {
  if (left >= right) {
    return;
  }

  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
};
