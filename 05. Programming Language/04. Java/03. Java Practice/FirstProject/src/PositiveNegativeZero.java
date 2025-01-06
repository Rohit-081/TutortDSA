import java.util.Scanner;

class PositiveNegativeZero {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to Number Identification.");
        System.out.print("Please Enter your number: ");
        int num = input.nextInt();

        if(num > 0){
            System.out.println("Positive");
        } else if( num < 0) {
            System.out.println("Negative");
        }  else {
            System.out.println("zero");
        }
    }
}
