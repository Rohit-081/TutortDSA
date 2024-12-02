import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please Enter your Name:");
        String name = scanner.nextLine();
        System.out.println("Good Morning " + name);
        System.out.print("Welcome " + name + ", Also tell me your age: ");
        int age = scanner.nextInt();
        System.out.println("Your age is: " + age);
    }
}
