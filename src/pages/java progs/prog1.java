public class prog1 {
    public static void main(String[] args) {
        int a = 10;
        int b = -0;
        try {
            int c = sum(a, b);
            System.out.println("Sum is " + c);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
    
    public static int sum(int a, int b) {
        if (a < 0 || b < 0) {
            throw new IllegalArgumentException("Invalid input");
        }
        int result = a + b;
        return result;
        // Unreachable throw statement
        // throw new RuntimeException("This statement is unreachable");
    }
}