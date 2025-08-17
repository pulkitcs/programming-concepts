package learning;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FormServlet extends HttpServlet {
  public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    res.setContentType("text/html");
    PrintWriter out = res.getWriter();
    String your_name = req.getParameter("name");
    out.println("<html>");
    out.println("<head><title>Your Name</title></head>");
    out.println("<body><p>Welcome " + your_name + "</p></body>");
    out.println("</html>");
  }
}

