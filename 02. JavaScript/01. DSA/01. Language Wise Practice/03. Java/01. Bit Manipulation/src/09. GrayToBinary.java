import java.util.Scanner;

class GrayToBinary {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Gray to Binary Code!");
        System.out.print("Please Enter a Gray Code Number: ");
        int num = input.nextInt();
        input.close();

        int binary = 0;
        int gray = num;
        while(num != 0){
            binary = binary ^ num;
            num = num >> 1;
        }
        // Display the result
        System.out.println("The binary equivalent of Gray code " + gray + " is: " + binary);
    }
}
