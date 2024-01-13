//package events;
import java.awt.event.*;
import java.awt.*;

public class MyEvent extends Frame {
    public MyEvent(String title) {
        super(title);
        Button b1;
        b1 = new Button("Click me");
        add(b1);

        ButtonListener listen = new ButtonListener();

        b1.addActionListener(listen);
        
        setVisible(true);
        setSize(100, 100);
    }

    public static void main(String args[]) {
       new MyEvent("Example Button Listener");
    }
};

class ButtonListener implements ActionListener {
    public void actionPerformed(ActionEvent evt) {
        //Button source = (Button)evt.getSource();
        System.out.println("The button is pressed");
    }
}