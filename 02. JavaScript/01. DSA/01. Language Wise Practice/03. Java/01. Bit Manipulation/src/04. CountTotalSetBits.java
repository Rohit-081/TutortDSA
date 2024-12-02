import java.util.Scanner;

class CountTotalSetBits {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to the Count Total Set Bits! ");
        System.out.print("Please Enter the Number: ");
        int n = input.nextInt();
        input.close();

        int count = 0;
        for(int i = 1; i <= n; i++){
            count += getCount(i);
        }
        System.out.println(count);
    }

    public static int getCount(int num){
        int c = 0;
        while(num > 0){
            num = num & (num - 1);
            c++;
        }
        return c;
    }
}
