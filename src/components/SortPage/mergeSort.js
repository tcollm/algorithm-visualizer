// import { DEFAULT_BAR, SORTED_BAR } from "./constants";

// https://www.geeksforgeeks.org/merge-sort/
const merge = (arr, left, mid, right) => {
  // const animations = []; // array for animating the algorithm

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
      // animations.push({ index: k, value: lArr[i].value, color: SORTED_BAR });
      arr[k].value = lArr[i];
      i++;
    } else {
      // animations.push({ index: k, value: rArr[j].value, color: SORTED_BAR });
      arr[k].value = rArr[j];
      j++;
    }
    k++;
  }

  // copy remaining elements of left array if they exists
  while (i < lLen) {
    // animations.push({ index: k, value: lArr[i].value, color: SORTED_BAR });
    arr[k].value = lArr[i];
    i++;
    k++;
  }

  // copy remaining elements of right array if they exists
  while (j < rLen) {
    // animations.push({ index: k, value: rArr[j].value, color: SORTED_BAR });
    arr[k].value = rArr[j];
    j++;
    k++;
  }

  // // apply animations with delay
  // animations.forEach((a, index) => {
  //   setTimeout(() => {
  //     setArray((prevArray) => {
  //       prevArray.map((bar, barIndex) => {
  //         barIndex === a.index ? { value: a.value, color: a.color } : bar;
  //       });
  //     });
  //   }, index * 100);
  // });

  // // reset colors to default after animations are done
  // const resetDelay = animations.length * 100;
  // setTimeout(() => {
  //   setArray((prevArray) => {
  //     prevArray.map((bar, index) => {
  //       index >= left && index <= right // only reset colors in current subarray
  //         ? { ...bar, color: DEFAULT_BAR }
  //         : bar;
  //     });
  //   });
  // }, resetDelay);
};

export const mergeSort = (arr, left, right) => {
  // TODO: return animations from merge and then display here?
  if (left >= right) {
    return;
  }

  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
};
