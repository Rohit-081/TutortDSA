import java.util.Scanner;

class SwapAllOddAndEvenBits {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Swap All Odd And Even Bits Class!");
        System.out.print("Please Enter the Number: ");
        int num = input.nextInt();
        input.close();

        // Extract even and odd bits
        int ev = num & 0xAAAAAAAA; // Mask for even bits
        int od = num & 0x55555555; // Mask for odd bits

        // Shift even bits right and odd bits left
        ev >>= 1;
        od <<= 1;

        // Combine shifted bits
        int result = ev | od;

        // Print the result
        System.out.println("Original number: " + num);
        System.out.println("Number after swapping odd and even bits: " + result);
    }
}
