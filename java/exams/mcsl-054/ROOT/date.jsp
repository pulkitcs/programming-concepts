<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8" />
<title>Hello World</title>

<body>
  <h2>Welcome to JSP</h2>
  <% java.util.Date date = new java.util.Date(); %>
  <% out.println("Welcome to first JSP page"); %>
  <% out.println("Currently the day, date and time is");
    out.println(date);
  %>
</body>

</html>