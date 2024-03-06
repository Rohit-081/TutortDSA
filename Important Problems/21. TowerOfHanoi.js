function towerofhanoi(N, fromRod, toRod, usingRod) {
  if (N === 1) {
    console.log(`move disk 1 from rod ${fromRod} to rod ${toRod}`);
    return;
  }
  towerofhanoi(N - 1, fromRod, usingRod, toRod);
  console.log(`move disk ${N} from rod ${fromRod} to rod ${toRod}`);
  towerofhanoi(N - 1, usingRod, toRod, fromRod);
}

towerofhanoi(4, "A", "C", "B");
