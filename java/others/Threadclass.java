public class Threadclass extends Thread{
  Threadclass() {
    System.out.println("Contructor Initialized");
  }

  public void run() {
    System.out.println("Thread started");
  }

  public static void main(String[] args) {
    Threadclass th = new Threadclass();
    th.start();
  }
}
