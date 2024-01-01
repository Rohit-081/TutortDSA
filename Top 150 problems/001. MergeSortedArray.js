var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;
  let first = m - 1;
  let second = n - 1;
  while (first >= 0 && second >= 0) {
    if (nums1[first] > nums2[second]) {
      nums1[last] = nums1[first];
      first--;
      last--;
    } else {
      nums1[last] = nums2[second];
      second--;
      last--;
    }
  }
  while (second >= 0) {
    nums1[last] = nums2[second];
    second--;
    last--;
  }
  return nums1;
};
