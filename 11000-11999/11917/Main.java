import java.io.*;
import java.util.*;


public class Main {

    public static void main (String args[]){

      Scanner in = new Scanner(new InputStreamReader(System.in));

      int no_of_cases = in.nextInt();
      for (int c = 0; c < no_of_cases; c++){
        int no_of_homeworks = in.nextInt();
        HashMap<String,Integer> sparrow = new HashMap<>();
        for (int hw = 0; hw < no_of_homeworks; hw++){
          String name = in.next();
          Integer time = in.nextInt();
          sparrow.put(name,time);
        }
        int time_limit = in.nextInt();
        String tested = in.next();
        if (!sparrow.containsKey(tested)){
          System.out.println("Case " + (c+1) + ": " + "Do your own homework!");
        }
        else{
          int sparrow_time = sparrow.get(tested);

          String answer;
          if (sparrow_time <= time_limit){
            answer = "Yesss";
          }
          else if (sparrow_time <= time_limit+5){
            answer = "Late";
          }
          else
            answer = "Do your own homework!";
          System.out.println("Case " + (c+1) + ": " + answer);
        }
    }
}
}
