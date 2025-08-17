package learning;
import java.io.*;
import java.net.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CounterSession extends HttpServlet {
  public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    String heading;

    res.setContentType("text/html");

    PrintWriter out = res.getWriter();
    HttpSession session = req.getSession(true);
    Integer count = (int)session.getAttribute("count");

    if(count == null) {
      count = 0;
      heading = "Welcome to first time visit";
    }
    else {
      heading = "Welcome again";
      count += 1;
    }

    session.setAttribute("count", count);

    out.println("<html><head></head><body>"+ count + "</body></html>");
  }
}