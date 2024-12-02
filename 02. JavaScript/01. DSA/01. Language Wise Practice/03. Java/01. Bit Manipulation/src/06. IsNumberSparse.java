import java.util.Scanner;

class IsNumberSparse {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the 'Is Number Sparse' Checker!");
        System.out.print("Please Enter a number: ");
        int number = input.nextInt();
        input.close();

        // Check if the number is sparse
        if ((number & (number >> 1)) == 0) {
            System.out.println("The number " + number + " is sparse.");
        } else {
            System.out.println("The number " + number + " is not sparse.");
        }
    }
}
