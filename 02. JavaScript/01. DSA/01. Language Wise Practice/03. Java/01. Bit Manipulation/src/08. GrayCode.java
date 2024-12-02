import java.util.Scanner;

class GrayCode {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Gray Code!");
        System.out.print("Please Enter the Number: ");
        int num = input.nextInt();

        num = num ^ (num >> 1);
        System.out.println("Gray Code Printed: " + num);
    }
}
