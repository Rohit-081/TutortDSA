import java.util.Scanner;

class MaxConsecutiveOnes {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Max Consecutive Ones.");
        System.out.print("Please Enter the Number for consecutive ones: ");
        int num = input.nextInt();
        input.close();

        int count = 0;
        while( num > 0){
            num = num & (num << 1);
            count++;
        }
        System.out.println(count);
    }
}
