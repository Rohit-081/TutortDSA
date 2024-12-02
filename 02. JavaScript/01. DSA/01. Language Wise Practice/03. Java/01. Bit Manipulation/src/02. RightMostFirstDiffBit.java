import java.util.Scanner;

class RightMostFirstDiffBit {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Welcome to the Rightmost First Different Bit Program!");
        System.out.print("Please Enter First Number: ");
        int first = input.nextInt();

        System.out.print("Please Enter Second Number: ");
        int second = input.nextInt();

        input.close(); // Close scanner to free resources

        // XOR to identify differing bits
        int xorResult = first ^ second;

        // Check if both numbers are identical
        if (xorResult == 0) {
            System.out.println("There is no different bit; both numbers are identical.");
            return;
        }

        // Find the position of the rightmost differing bit
        int position = 1; // Start with position 1 (1-based indexing)
        while (xorResult > 0) {
            if ((xorResult & 1) == 1) { // Check if the least significant bit differs
                break;
            }
            xorResult = xorResult >> 1; // Right shift to check the next bit
            position++;
        }

        System.out.println("The Rightmost First Different Bit is at position: " + position);
    }
}
