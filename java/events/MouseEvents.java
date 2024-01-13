import java.awt.*;
import java.awt.event.*;

public class MouseEvents {
    public static void main(String args[]) {
        Frame f = new Frame("Testing mouse event");
        f.setSize(500, 500);
        f.setVisible(true);

        f.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                System.out.println("Mouse clicked" + " " + e.getX() + "," + e.getY());
            }
        });

    }
}