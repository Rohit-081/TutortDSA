def pos_of_rightmost_diff_bit(m,o):
    n = m ^ o;

    if n == 0:
      return -1

    position = 1

    while (n & 1) == 0:
        n = n >> 1
        position += 1

    return position


# Test Cases
print(pos_of_rightmost_diff_bit(11, 9))  # Expected: 2
print(pos_of_rightmost_diff_bit(52, 4))  # Expected: 3
print(pos_of_rightmost_diff_bit(9, 9))   # Expected: -1