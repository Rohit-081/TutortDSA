import java.util.Scanner;

class FindMaxANDValue {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Maximum value ");
        System.out.print("Please Enter the Number Value: ");
        int n = input.nextInt();
        int[] arr = new int[n];
        System.out.println("Please Enter the elements of the array: ");
        for(int i = 0; i < n; i++){
            arr[i] = input.nextInt();
        }
        input.close();
        int maxANDValue = findMaxANDValue(arr);
        System.out.println("Maximum AND Value using Brute Force: " + maxANDValue);
    }

    public static int findMaxANDValue(int[] arr) {
        int n = arr.length;
        int maxANDValue = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int andValue = arr[i] & arr[j];
                if (andValue > maxANDValue) {
                    maxANDValue = andValue;
                }

            }
        }
        return maxANDValue;
    }
}
