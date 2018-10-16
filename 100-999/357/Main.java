import java.io.*;
import java.util.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

		while (in.hasNext()){
			int n = in.nextInt();

      int ways = 0;
      int n1 = n;
      for (int i = 0; i*50 <= n1; i++){

        int n2 = n1-i*50;
        for (int j = 0; j*25 <= n2; j++){

          int n3 = n2-j*25;
          for (int k = 0; k*10 <= n3; k++){

            int n4 = n3-k*10;
            for (int l = 0; l*5 <= n4; l++){
                ways++;
            }
          }
        }
      }

      if (ways == 1){
			     System.out.println("There is only 1 way to produce " + n + " cents change.");
      }
      else{
			     System.out.println("There are " + ways + " ways to produce " + n + " cents change.");
      }
		}
	}
}
