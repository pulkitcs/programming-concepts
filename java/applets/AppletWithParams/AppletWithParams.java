import java.applet.Applet;
import java.awt.Graphics;

public class AppletWithParams extends Applet {
    //private String str = "no param provided";

    public void paint(Graphics g) {
        String str = this.getParameter("message");
        g.drawString(str, 0, 20);
    }
}