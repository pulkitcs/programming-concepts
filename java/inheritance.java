class animal {
  String type;

  public animal() {
    type = "any";
    this.log("Constructor called");
  }

  public void age(int age) {
    this.log("old age of the dog is "+age);
  }

  public void log(String message) {
    System.out.println(message);
  }
}

class dog extends animal {
  public dog() {
    super();
  }

  public void age(int age) {
    super.age(20);
    this.log("new age of the dog is "+age);
  }
  public static void main(String[] arg) {
    dog d = new dog();
    d.age(10);
  }
}