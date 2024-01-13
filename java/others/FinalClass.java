 class AA {
  //final 
  void aa() {
    System.out.println("This is working using final");
  }
}

class FinalClass extends AA {
  FinalClass() {

  }

  // cannot be overriden
  void aa() {
    System.out.println("This is working using final");
  }
 
  public static void main(String[] args) {
    System.out.println("This is working");
    
    FinalClass f = new FinalClass();
    f.aa();
  }
}


// Final word prevents class to be inherited
// Final Method to be overriden
// Making constants
