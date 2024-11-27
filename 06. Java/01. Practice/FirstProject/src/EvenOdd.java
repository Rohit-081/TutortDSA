import java.util.Scanner;

class EvenOdd {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Even Odd Game!");
        System.out.print("Please Enter the Number: ");
        int num = input.nextInt();
        if(num % 2 == 0){
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }
}
