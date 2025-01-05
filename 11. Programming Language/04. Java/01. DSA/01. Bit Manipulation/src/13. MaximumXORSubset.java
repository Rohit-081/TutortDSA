import java.util.Scanner;

class MaximumXORSubset {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Max Subset XOR Finder! ");
        System.out.print("Please Enter the size of the array: ");
        int n = input.nextInt();

        int[] arr = new int[n];
        System.out.println("Please Enter the elements of the array: ");
        for(int i = 0; i < n; i++){
            arr[i] =    input.nextInt();
        }
        input.close();

        int maxXor = findMaxSubsetXOR(arr);
        System.out.println("The Maximum XOR value is: " + maxXor);
    }

    public static int findMaxSubsetXOR(int[] arr){
            int n = arr.length;
            int maxXor = 0;

            // Iterate over all possible subsets
            for(int i = 0; i < (1 << n); i++){
                int subsetXor = 0;

                for(int j = 0; j < n; j++){
                    if((i & (1 << j)) != 0){
                        subsetXor ^= arr[j];
                    }
                }
                if(subsetXor > maxXor){
                    maxXor = subsetXor;
                }
            }
            return maxXor;
    }

}
