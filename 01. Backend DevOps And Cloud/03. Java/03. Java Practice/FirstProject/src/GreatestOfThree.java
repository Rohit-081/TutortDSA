import java.util.Scanner;

class GreatestOfThree {
    public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the World of Three\n");
        System.out.print("Please Enter Your First Number: ");
        int first = input.nextInt();
        System.out.print("Please Enter Your Second Number: ");
        int second = input.nextInt();
        System.out.print("Please Enter Your Third Number: ");
        int third = input.nextInt();

        if(first >= second && first >= third){
            System.out.println("First Win!");
        } else if(second >= first && second >= third) {
            System.out.println("Second Win! ");
        } else {
            System.out.println("Third Win!");
        }
    }
}
