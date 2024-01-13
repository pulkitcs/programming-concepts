abstract class abstractClass {
  abstract void child();
}

class AbstractClassAnimal extends abstractClass {
  AbstractClassAnimal() {
    System.out.println("The constructor called");
  }

  void child () {
    System.out.println("This does work");
  }

  public static void main(String[] args) {
    AbstractClassAnimal a = new AbstractClassAnimal();
    a.child();
  }
}