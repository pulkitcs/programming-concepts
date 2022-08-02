
public class loops {
  void printNumber(int number, String msg) {
    switch(number) {
      case 1:
      case 9:
      case 8:
        System.out.println(msg + number);
      break;

    }
  }

  public static void main(String[] args) {

    int numbers[] = {1, 9, 8, 9};

    loops lp = new loops();

    for(int i = 0; i < numbers.length; i++) {
      lp.printNumber(numbers[i], "From for loop ");
    }

    int counter = 0;
    while(counter < numbers.length) {
      lp.printNumber(numbers[counter], "From while loop ");
      ++counter;
    }

    counter = 0;
    do {
      lp.printNumber(numbers[counter], "From do loop ");
      ++counter;
    }
    while(counter < numbers.length);

  }
}
