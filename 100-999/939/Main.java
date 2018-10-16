import java.io.*;
import java.util.*;
import java.lang.*;

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

    int n = in.nextInt();

    TreeMap<String,String> status = new TreeMap<>();
    HashMap<String,String> parent = new HashMap<>();
    for (int i = 0; i < n; i++){

      String first = in.next();
      String second = in.next();
      in.nextLine();

      if (second.equals("dominant")){
        status.put(first,second);
      }
      else if (second.equals("recessive")){
        status.put(first,second);
      }
      else if (second.equals("non-existent")){
        status.put(first,second);
      }

      else{
        if (parent.contains(second)){
          parents.get(second).add(first);
        }
        else{
          HashSet<String> parents = new HashSet<>();
          parents.add(first);
          parent.put(second,parents);
        }
      }
    }
    for (String s : parents.keySet()){
      if (!status.contains(s)){
        String[] cur_status = new String[2];
        int index = 0;
        for (String p : parents.get(s)){
          cur_status[index] = status.get(p);
        }
      }
    }



	}
}
