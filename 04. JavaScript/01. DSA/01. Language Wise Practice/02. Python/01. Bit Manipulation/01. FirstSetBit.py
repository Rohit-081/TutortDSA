def get_first_set_bit(n):
  if n == 0:
    return 0
  position = 1
  while n > 0:
    if (n&1) == 1:
      return position
    
    n = n >> 1
    position += 1



inputs = [18, 20, 3365, 15, 0]
for num in inputs:
  print(f"First set bit of {num} is at position: {get_first_set_bit(num)}")