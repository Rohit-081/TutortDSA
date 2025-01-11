import java.util.Scanner;

class CheckWhetherKthBit {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Check Whether Kth is set Bit or not!");
        System.out.print("Please Enter the First Number: ");
        int first = input.nextInt();
        System.out.println("Please Enter the kth Bit: ");
        int kthBit = input.nextInt();
        input.close();
        first = first >> kthBit;
        if((first & 1) == 1){
            System.out.print(true);
            return;
        } else {
            System.out.print(false);
            return;
        }

       }
}
