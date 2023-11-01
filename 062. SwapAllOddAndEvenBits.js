const N1 = 23;

function swapBits(n) {
  let ev = n & 0xaaaaaaaa;
  let od = n & 0x55555555;
  ev >>= 1;
  od <<= 1;
  return console.log(ev | od);
}

swapBits(N1);