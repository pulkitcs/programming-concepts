public class AnimalClass {
  // Method overloading
  void printText(String color, String type) {
    System.out.println(color+" "+type);
  }

  int printText(String type) {
    System.out.println("grey "+type);
    return 0;
  }
  
  // Constructor overloading
  public AnimalClass(String color, String type) {
    this.printText(color, type);
  }

  public AnimalClass(String type) {
    this.printText(type);
  }

  public static void main(String args[]) {
    new AnimalClass("black", "cat");
    new AnimalClass("dog");
  }
}
