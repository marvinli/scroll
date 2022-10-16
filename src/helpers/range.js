function squish(pos, start, stop) {
  if (pos < start) return 0;
  if (pos > stop) return 1;
  return (pos - start) / (stop - start);
}

export default squish;
