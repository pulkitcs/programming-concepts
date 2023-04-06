class A {
  A() {
    System.out.println("A base class");
  }

  private void accessPrivate() {
    System.out.println("Private method access was called");
  }

  final void accessPublic() {
    System.out.println("Public  method access was called");
  }
}

class B extends A{
  B() {
    super();
    System.out.println("B base class");
  }

  protected void accessProtected() {
    System.out.println("Protected method access was called");
    accessPrivate();
    super.accessPublic();
  }

  private int accessPrivate() {
    System.out.println("Overided Private method access was called");
    return 0;
  }
}

class C extends B{
  C() {
    super();
    System.out.println("C base class");
  }

  public static void main(String[] args) {
    C c = new C();
    c.accessProtected();
    
    // cannot be accessed
    //c.accessPrivate();

    c.accessPublic();
  }
}