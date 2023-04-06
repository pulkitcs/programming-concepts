class thread1 {
  public static void main(String[] args) {
    try {
      Thread threadRef = Thread.currentThread();
      System.out.println("Current Thread" + threadRef);
      System.out.println("Before changing the name of the main thread: " + threadRef);
      

      // CHanging the internal of the thread
      threadRef.setName("MyFirstThread");
      System.out.println("After changing the name of the main thread: " + threadRef);
    }

    catch(Exception e) {
      System.out.println("Main thread caught an error, program exiting");
      System.exit(1);
    }
  } 
}
