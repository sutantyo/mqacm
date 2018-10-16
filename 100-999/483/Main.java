import java.io.*;
import java.util.*;
import java.lang.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

		while (in.hasNext()){
      String line = in.nextLine();
      String[] ss = line.split("\\s");
      String answer = "";

      for (int i = 0; i < ss.length-1; i++){
        StringBuilder temp = new StringBuilder(ss[i]);
        answer = answer + temp.reverse().toString() + " ";
      }
      StringBuilder temp = new StringBuilder(ss[ss.length-1]);
      answer = answer + temp.reverse().toString();
      System.out.println(answer);
		}
	}
}
