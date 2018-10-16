import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args){

        Scanner in = new Scanner(new InputStreamReader(System.in));

        int no_of_case = in.nextInt();
        in.nextLine();
        in.nextLine();

        String s;
        for (int i = 0; i < no_of_case; i++){
          int count = 0;
          HashMap<String,Integer> t = new HashMap<>();
          s = in.nextLine();
          while (!s.equals("")){
            count++;
            Integer jj = t.get(s);
            if (jj != null)
              t.put(s,jj+1);
            }
            else{
              t.put(s,1);
            }
            if (in.hasNextLine())
              s = in.nextLine();
            else
              s = "";
          }

          for (String x : t){
              System.out.printf("%s %.4f\n", x, t.get(x) * 100.0 / count);
          }
          if (i < no_of_case-1)
            System.out.println();
        }

    }
}
