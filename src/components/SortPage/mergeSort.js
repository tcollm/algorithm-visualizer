// https://www.geeksforgeeks.org/merge-sort/
const merge = (arr, left, mid, right) => {
  const lLen = mid - left + 1;
  const rLen = right - mid;

  // temp arrays
  const lArr = new Array(lLen);
  const rArr = new Array(rLen);

  // copy data from arr to temp arrays
  for (let i = 0; i < lLen; i++) {
    lArr[i] = arr[left + i].value;
  }
  for (let j = 0; j < rLen; j++) {
    rArr[j] = arr[mid + 1 + j].value;
  }

  let i = 0,
    j = 0;
  let k = left;

  // merge temp arrays back into array in sorted order
  while (i < lLen && j < rLen) {
    if (lArr[i] <= rArr[j]) {
      arr[k].value = lArr[i];
      i++;
    } else {
      arr[k].value = rArr[j];
      j++;
    }
    k++;
  }

  // copy remaining elements of left array if they exist (implies that the right array is empty)
  while (i < lLen) {
    arr[k].value = lArr[i];
    i++;
    k++;
  }

  // copy remaining elements of right array if they exist (implies that the left array is empty)
  while (j < rLen) {
    arr[k].value = rArr[j];
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
