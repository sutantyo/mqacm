import java.io.*;
import java.util.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

		while (in.hasNext()){
			int l = in.nextInt();
			int u = in.nextInt();
      if (l == 0 && u == 0)
        return;

      int count = 0;
      for (int i = l; i <= u; i++){
          Double sqrt = Math.floor(Math.sqrt(i));
          if (sqrt*sqrt == i){
            count++;
          }
      }
			System.out.println(count);
		}
	}
}
