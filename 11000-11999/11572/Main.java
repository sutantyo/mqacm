import java.io.*;
import java.util.*;


public class Main {

    public static void main (String args[]){

      Scanner in = new Scanner(new InputStreamReader(System.in));

      int n = in.nextInt();
      for (int i = 0; i < n; i++){
        int lines = in.nextInt();
        int maxTotal = 0;
        int curTotal = 0;
        // start of current sequence
        int curStart = 1;

        HashMap<Integer,Integer> last = new HashMap<>();

        for (int j = 0; j < lines; j++){
          int cur = in.nextInt();
          if (last.containsKey(cur)){
            if (last.get(cur) < curStart-1){
              last.put(cur,j);
              curTotal++;
              if (curTotal > maxTotal){
                maxTotal = curTotal;
              }

            }
            else{
              curTotal++;
              curTotal = j - last.get(cur);
              curStart = last.get(cur)+1;
              last.put(cur,j);
            }
            //System.out.println("j: " + j + ", curStart: " + curStart +  ", reading " + cur + ", curTotal: " + curTotal);
          }
          else{
            last.put(cur,j);
            curTotal++;
            if (curTotal > maxTotal){
              maxTotal = curTotal;
            }
            //System.out.println("j: " + j + ", curStart: " + curStart +  ", reading " + cur + ", curTotal: " + curTotal);
          }
        }

        System.out.println(maxTotal);
      }
    }
}
