import java.util.Scanner;

class XORProblemI {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the XOR related Problem first!");
        System.out.print("Please Enter the length of  array and value: ");

        int n = input.nextInt();

        int[] arr = new int[n];
        System.out.println("Please Enter the elements of the array: ");
        for(int i = 0; i < n; i++){
            arr[i] = input.nextInt();
        }

        

    }
}
