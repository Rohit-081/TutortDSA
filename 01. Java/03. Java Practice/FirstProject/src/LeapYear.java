import java.util.Scanner;

class LeapYear {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to Leap Year Identification!.");
        System.out.print("Please Enter the Year: ");
        int year = input.nextInt();
        if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
            System.out.println("Leap Year");
        }  else {
            System.out.println("Not a Leap Year");
        }
    }
}
