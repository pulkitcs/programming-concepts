class ThreadI implements Runnable{
  ThreadI() {
    System.out.println("Constructor called");
  }

  public void run() {
    System.out.println("Thread started");
  }

  public static void main(String[] args) {
    Thread t = new Thread(new ThreadI());
    t.start();
  }
}
