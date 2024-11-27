import java.util.Scanner;

class Grading {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Grading System! ");
        System.out.print("Please Enter your Percentage: ");
        float percentage = input.nextFloat();

        if(percentage >= 90){
            System.out.println("A");
        } else if (percentage >= 75) {
            System.out.println("B");
        } else if (percentage >= 60){
            System.out.println("C");
        } else if (percentage >= 30){
            System.out.println("D");
        } else {
            System.out.println("Sorry");
        }
    }
}
