class Employee {
  protected double attitude;
  protected int numHoursPerWeek, wagePerHour;

  public Employee(int wage, int hours, double att) {
    attitude = att;
    wagePerHour = wage;
    numHoursPerWeek = hours;
  }

  public double getProductivity() {
    return numHoursPerWeek*attitude;
  }

  public double getTeamProductivity() {
    return getProductivity();
  }

  public int WeekSalary() {
    return wagePerHour*numHoursPerWeek;
  }
}

public class Manager extends Employee {
  public Manager(int wage, int hours, double att, Employee underling) {
    super(wage, hours, att);
  }

  public double getProductivity() {
    return super.getProductivity();
  }

  public double getTeamProductivity() {
    return super.getTeamProductivity();
  }

  public int WeekSalary() {
    return super.WeekSalary();
  }

  public static void main(String[] args) {
    Manager m = new Manager(10000, 40, 90, new Employee(5000, 40, 90));

    System.out.println("The Week salary is "+m.WeekSalary());
    System.out.println("The team productivity is "+m.getProductivity());
    System.out.println("The team team productivity is "+m.getTeamProductivity());
  }
}