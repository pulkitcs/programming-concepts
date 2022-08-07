package PCSIO;

interface animal {
  String type = "";
  void isPlant();
}

class Dog implements animal{
  String type;

  public void isPlant() {
    type = "Husky";
    System.out.println(type + " is a dog");
  }

  public static void main(String args[]) {
    Dog d = new Dog();
    d.isPlant();
  }
}
