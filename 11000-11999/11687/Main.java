import java.io.*;
import java.util.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));
    String s = in.nextLine();

    int prev, next;
    int index = 2;
    while (!s.equals("END")){
      prev = s.length();
      if (prev == 1 && Integer.parseInt(s) == 1){
        System.out.println(1);
        s = in.nextLine();
        index = 2;
        continue;
      }
      //System.out.print(prev);
      next = intLength(prev);
      while (prev != next){
        //System.out.println(" " + next);
        index++;
        prev = next;
        next = intLength(prev);
      }
      System.out.println(index);


      s = in.nextLine();
      index = 2;
    }

	}

  public static int intLength(int n){
    int count = 0;
    while (n > 0){
      n = n / 10;
      count++;
    }
    return count;
  }

}
