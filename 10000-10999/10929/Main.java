import java.io.*;
import java.util.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

		while (in.hasNext()){
      String line = in.nextLine();
      if (line.equals("0"))
        return;
      int neg = -1;
      int c = 1;
      int sum = 0;
      for (int i = 0; i < line.length(); i++){
          c = c * neg;
          if (line.charAt(i) >= 48 && line.charAt(i) <= 57){
            sum = sum + (c * (line.charAt(i)-48));
            System.out.print(line.charAt(i));
          }
      }
      if (sum % 11 == 0)
        System.out.println(" is a multiple of 11.");
      else
        System.out.println(" is not a multiple of 11.");
    }
	}
}
