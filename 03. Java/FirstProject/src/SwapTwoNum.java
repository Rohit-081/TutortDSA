import java.util.Scanner;

public class SwapTwoNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to Swapping station\n\n");
        System.out.print("Enter value of A: ");
        int a = input.nextInt();
        System.out.print("Enter value of B: ");
        int b = input.nextInt();
        int swap = a;
        a = b;
        b = swap;
        System.out.println("Value of a: " + a);
        System.out.print("Value of b: " + b);
    }
}
