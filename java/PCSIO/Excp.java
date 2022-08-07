package PCSIO;

class Excp {
  public static void main(String[] args) {
    int data[] = {0, 1, 2, 3};

    try {
      System.out.println(data[5]);
    }
    catch(ArrayIndexOutOfBoundsException e) {
      System.out.println("Exception handled");
    }
  }
}