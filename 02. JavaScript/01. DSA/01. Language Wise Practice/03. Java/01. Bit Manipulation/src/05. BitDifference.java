import java.util.Scanner;

class BitDifference {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Bit Difference World! ");
        System.out.print("Please Enter the first number: ");
        int first = input.nextInt();
        System.out.print("Please Enter the second number: ");
        int second = input.nextInt();

        // Calculate differing bits
        int xorResult = first ^ second;
        int count = 0;
        while (xorResult > 0) {
            xorResult = xorResult & (xorResult - 1);
            count++;
        }

        // Display result
        System.out.println("The number of differing bits between " + first + " and " + second + " is: " + count);
    }
}
