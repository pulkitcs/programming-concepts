package classAndObjects;

public class ThisReference {
  ThisReference() {
    System.out.println("Contructor is called");
  }

  public void print(String str) {
    System.out.println(str);
  }

  public static void main(String[] args) {
    ThisReference thisRef = new ThisReference();
    thisRef.print("This is the this object");
  }
}
