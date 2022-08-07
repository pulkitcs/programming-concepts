class MyExceptions extends Exception {
  // Throwable FillInStackTrce();
  // String GetMessage();
  // String ToString();

  private int value;

  MyExceptions (int a) {
    value = a;
  }

  public String toString() {
    return "Some New Error " + value;
  }
}

class MyException {
  static void compute(int a) throws MyExceptions {
    if (a >= 10) {
      throw new MyExceptions(a);
    }
  }

  public static void main(String args[]) {
    try {
      compute(11);
    }
    catch(MyExceptions e) {
      System.out.println("error info: " + e);
    }
  }
}