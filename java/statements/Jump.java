package statements;

public class Jump {
  public void print(int num) {
    System.out.println(num);
  }

  public void print(String str) {
    System.out.println(str);
  }

  public static void main(String args[]) {
    // Break;
    Jump j = new Jump();

    for(int i = 0; i < 10; i++) {
      j.print(i);
      if (i == 7) break;
    }
    j.print("break");

    for(int i = 0; i < 10; i++) {
      if (i == 7) continue;
      j.print(i);
    }
    j.print("continue");
  }
}
