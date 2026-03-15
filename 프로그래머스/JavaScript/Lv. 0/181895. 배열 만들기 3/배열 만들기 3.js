function solution(arr, intervals) {
  const a1 = intervals[0][0];
  const b1 = intervals[0][1];
  const a2 = intervals[1][0];
  const b2 = intervals[1][1];

  return arr.slice(a1, b1 + 1).concat(arr.slice(a2, b2 + 1));
}