import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args){

        Scanner in = new Scanner(new InputStreamReader(System.in));
        // the dictionary
        HashMap<String,String> dict = new HashMap<>();

        while (in.hasNextLine()) {
          // if next line is non empty, split it into two words (based on space)
          // and put it in the dictionary
          String line = in.nextLine();
          if (line.length() > 0){
            String[] words = line.split("\\s+");
            dict.put(words[1],words[0]);
          }
          // otherwise, break
          else{
            break;
          }
        }

        while (in.hasNext()) {
            String w = in.next();
            if (dict.containsKey(w))
              System.out.println(dict.get(w));
            else
              System.out.println("eh");
        }

    }
}
