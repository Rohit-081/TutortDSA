import java.util.Scanner;

class PowerOfTwo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Power of Two Checker!");
        System.out.print("Please Enter a Number: ");
        int num = input.nextInt();
        input.close();

        // Check if the number is zero or a power of two
        if (num <= 0) {
            System.out.println("The number " + num + " is NOT a power of two.");
        } else if ((num & (num - 1)) == 0) {
            System.out.println("The number " + num + " is a power of two.");
        } else {
            System.out.println("The number " + num + " is NOT a power of two.");
        }
    }
}
