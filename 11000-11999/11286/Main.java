import java.io.*;
import java.util.*;


public class Main {

    public static void main (String args[]){

      Scanner in = new Scanner(new InputStreamReader(System.in));

      int n = in.nextInt();
      while (n > 0){

        HashMap<String,Integer> count = new HashMap<>();
        for (int i = 0; i < n; i++){
          TreeSet<Integer> ts = new TreeSet<>();
          for (int j = 0; j < 5; j++){
              ts.add(in.nextInt());
          }
          if (count.containsKey(ts.toString())){
            count.put(ts.toString(),1+count.get(ts.toString()));
          }
          else{
            count.put(ts.toString(),1);
          }
        }

        int max = 0;
        for (String s : count.keySet()){
          if (count.get(s) > max){
            max = count.get(s);
          }
        }
        int max_count = 0;
        for (String s : count.keySet()){
          if (count.get(s) == max){
            max_count = max_count + max;
          }
        }
        System.out.println(max_count);
        n = in.nextInt();
      }
    }
}
