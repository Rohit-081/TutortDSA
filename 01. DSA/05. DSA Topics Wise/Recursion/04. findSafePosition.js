function safePos(n, k) {
  if (n === 1) return 0;
  return (safePos(n - 1, k) + k) % n;
}

console.log(safePos(5, 3));
