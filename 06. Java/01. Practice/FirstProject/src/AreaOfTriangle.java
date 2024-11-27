import java.util.Scanner;

class AreaOfTriangle {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to Area of Triangle Magic.");
        System.out.print("Please Enter the base of the Triangle: ");
        double base  = input.nextDouble();
        System.out.print("Please Enter the perpendicular height of the Triangle: ");
        double height  = input.nextDouble();
        double area = 0.5 * base * height;
        System.out.println("Area: "+ area + "cms2");

    }
}
