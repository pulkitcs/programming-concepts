// Source code is decompiled from a .class file using FernFlower decompiler.
package learning;

public class Counter {
   private static int counter = 0;

   public Counter() {
   }

   public static int getCounter() {
      ++counter;
      return counter;
   }
}
