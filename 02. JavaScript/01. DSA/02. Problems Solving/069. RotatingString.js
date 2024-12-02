// https://www.youtube.com/watch?v=M04IJUf_jEQ&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr&index=1
// https://leetcode.com/problems/rotate-string/

var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  if (s.length === 0 && goal.length === 0) {
    return false;
  }
  s = s + s;
  return s.includes(goal);
};

console.log(rotateString("abcde", "cdeab"));
