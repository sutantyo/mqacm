import java.io.*;
import java.util.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

		while (in.hasNextInt()){
      int b1 = in.nextInt();
      int g1 = in.nextInt();
      int c1 = in.nextInt();
      int b2 = in.nextInt();
      int g2 = in.nextInt();
      int c2 = in.nextInt();
      int b3 = in.nextInt();
      int g3 = in.nextInt();
      int c3 = in.nextInt();


      int min = g1+c1+b2+g2+b3+c3;
      String combo = "BCG";

      int current_min = g1+c1+b2+c2+b3+g3;
      if(current_min < min){
        min = current_min;
        combo = "BGC";
      }
      current_min = b1+g1+g2+c2+c3+b3;
      if(current_min < min){
        min = current_min;
        combo = "CBG";
      }

      current_min = b1+g1+c2+b2+c3+g3;
      if(current_min < min){
        min = current_min;
        combo = "CGB";
      }


      current_min = b1+c1+g2+c2+b3+g3;
      if(current_min < min){
        min = current_min;
        combo = "GBC";
      }

      current_min = b1+c1+g2+b2+c3+g3;
      if(current_min < min){
        min = current_min;
        combo = "GCB";
      }


      System.out.println(combo + " " + min);
    }

  }

}
