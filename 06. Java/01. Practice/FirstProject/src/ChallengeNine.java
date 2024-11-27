import java.util.Scanner;

public class ChallengeNine {
    public static void main(String[] args){
        System.out.println("Welcome to Arithmatic calculator.");
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the first value of your operation: ");
        double firstValue = input.nextDouble();
        System.out.println("Enter the second value of your operation" );
        double secondValue = input.nextDouble();

        double result = firstValue * secondValue;
        System.out.println(result);


    }
}
