public class MyThreadDemo extends Thread{
  public String myMessage[] = {"Java", "is", "a", "very", "good", "Programming", "Language"};

  MyThreadDemo(String s) {
    super(s);
  }
}
