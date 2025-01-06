import java.sql.SQLOutput;
import java.util.Scanner;

public class AgeDifference {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Age Calculator.");
        System.out.print("Please Enter the Age details: ");
        int age = input.nextInt();

        if(age  >= 60){
            System.out.println("You are a senior citizen.");

        } else if ( age >= 20){
            System.out.println("You are an adult.");
        } else if ( age >= 13) {
            System.out.println("You are a teen.");
        } else {
            System.out.println("You are a child.");
        }
    }
}
