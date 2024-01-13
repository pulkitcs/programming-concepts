import java.io.IOException;

class MultipleCatch {
  int nums[] = { 0, 1, 2, 3};
  boolean a = true;


  void conditions() {
    try {

    }
    catch(ArrayIndexOutOfBoundsException box) {

    }
    catch(NumberFormatException nfe) {

    }
    finally {

    }
  }

  class Multithrow {
    public static void copy() throws IOException {
      throw new IOException("Files not available");
    }

    void checkCondition() {
      if (a == true) {
        throw new IllegalArgumentException("Exception caused with a true value");
      }
      if (a == false) {
        throw new IllegalArgumentException("Exception occured with false value");
      }
    }
  }

  public static void main() {
   
  }
}
