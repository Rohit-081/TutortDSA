import java.util.Scanner;

class FirstSetBit {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the First Set Bit Program!");
        System.out.print("Please Enter your number to find first set bit: ");
        int first = input.nextInt();
        input.close();

        if (first == 0) {
            System.out.print("The number is 0, so there are no set bits.");
            return;
        }

        int position = 1;
        while (first > 0) {
            if ((first & 1) == 1) {
                break;
            }
            first = first >> 1;
            position++;
        }
        System.out.println("Your first set bit position is at: " + position);
    }
}
