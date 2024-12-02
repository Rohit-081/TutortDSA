import java.util.Scanner;

public class ChallengeEight {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to the arithmetic calculator journey.");
        System.out.print("Enter the first value: ");
        int firstValue = scanner.nextInt();
        System.out.print("Enter the second value: ");
        int secondValue = scanner.nextInt();
        int addition = firstValue + secondValue;
        int substraction = firstValue - secondValue;
        int multiplication = firstValue*secondValue;
        int division = firstValue / secondValue;
        int modulo = firstValue % secondValue;
        System.out.println(addition);
        System.out.println(substraction);
        System.out.println(multiplication);
        System.out.println(division);
        System.out.println(modulo);
    }
}
