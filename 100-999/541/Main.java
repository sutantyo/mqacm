import java.io.*;
import java.util.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

		while (in.hasNext()){
			int n = in.nextInt();
      if (n == 0)
        return;
      int[][] m = new int[n][n];

      // populate matrix and work out sum of each row
      int[] row_sum = new int[n];
      int[] col_sum = new int[n];
      for (int i = 0; i < n; i++){
        int sum = 0;
        for (int j = 0; j < n; j++){
            m[i][j] = in.nextInt();
            sum = sum + m[i][j];
        }
        row_sum[i] = sum;
      }

      // find sum of each column
      for (int j = 0; j < n; j++){
        int sum = 0;
        for (int i = 0; i < n; i++){
            sum = sum + m[i][j];
        }
        col_sum[j] = sum;
      }

      // count the number of odd rows
      int odd_row_total = 0;
      int odd_row = 0;
      for (int i = 0; i < n; i++){
        if (row_sum[i]%2 == 1){
          odd_row_total++;
          odd_row = i;
        }
      }

      // count the number of odd columns
      int odd_col_total = 0;
      int odd_col = 0;
      for (int i = 0; i < n; i++){
        if (col_sum[i]%2 == 1){
          odd_col_total++;
          odd_col = i;
        }
      }

      // print result according to number of odd rows/columns
      if (odd_col_total > 1 || odd_row_total > 1)
        System.out.println("Corrupt");
      if (odd_col_total == 0 && odd_row_total == 1)
        System.out.println("Corrupt");
      else if (odd_col_total == 1 && odd_row_total == 0)
        System.out.println("Corrupt");
      else if (odd_col_total == 0 && odd_row_total == 0)
        System.out.println("OK");
      else if (odd_col_total == 1 && odd_row_total == 1)
        System.out.println("Change bit (" + (odd_row+1) + "," + (odd_col+1) + ")");


		}
	}
}
