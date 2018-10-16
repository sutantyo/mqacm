import java.io.*;
import java.util.*;
import java.lang.*;

public class Main {

  public static void main (String args[]){

    Scanner in = new Scanner(new InputStreamReader(System.in));

    int cases = in.nextInt();
    for (int i = 0; i < cases; i++){
      int a = in.nextInt();
      int b = in.nextInt();
      int c = in.nextInt();

      if (a > 20 || b > 20 || c > 20)
        System.out.println("Case " + (i+1) + ": bad");
      else
        System.out.println("Case " + (i+1) + ": good");
    }
  }
}
