public class GarbageCollection {
  int numbers[] = {30, 8, 1989};

  protected void finalize() throws Throwable {
    System.out.println("gc is called");
  }

  public static void main(String[] args) {
    GarbageCollection gb = new GarbageCollection();

    // Required
   gb = null;

    // Required
    System.gc();   
  }
}
