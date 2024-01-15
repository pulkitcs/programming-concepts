public class functionOverloading {
    public void runner(int a) {
        System.out.println("not overloading");
    }

    public void runner(int a, String s) {
        System.out.println("overloading");
    }
    
    public static void main(String args[]) {
        functionOverloading obj = new functionOverloading();
        obj.runner(1, "Hello");
        obj.runner(10);
    } 
}
