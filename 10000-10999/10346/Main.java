import java.io.*;
import java.util.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

		while (in.hasNext()){
			int n = in.nextInt();
			int k = in.nextInt();

      // total cigarette at start
      int total = n;
      // the leftover butts (starting value for butts)
      int butt = n;

      // keep going until we don't have enough butts to make a cigarette
      while (butt >= k){
        // make the leftover butts into cigarettes, add this
        total = total + (butt/k);
        // how many butts we have left
        butt = butt/k + butt%k;
      }
      System.out.println(total);

		}

	}
}
