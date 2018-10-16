import java.io.*;
import java.util.*;

public class Main {

    public static void main (String args[]){

      Scanner in;
      InputStreamReader fr = null;
      try{
          fr = new InputStreamReader(System.in,"ISO-8859-1");
      }
      catch(Exception E){
      }
      //in = new Scanner(new InputStreamReader(System.in,"ISO-8859-16"));
      in = new Scanner(fr);
      String s;

      s = in.nextLine();
      while (!s.equals("****END_OF_INPUT****")){

        int count = 0;
        HashMap<String,Integer> hm = new HashMap<>();
        String text = "";
        while(!s.equals("****END_OF_TEXT****")){
          if (s.equals("")){
            s = in.nextLine();
            continue;
          }
          text = text + " " + s;
          s = in.nextLine();
        }
        //text = text.toLowerCase().replaceAll("[\\[\\]\\.,:;!?\"()]","");
        text = text.toLowerCase().replaceAll("[\\.,:;!?\"()]"," ");
        //System.out.println(text);

        //String[] words = text.replaceAll("\\W"," ").toLowerCase().split("\\s+");
        String[] words = text.split("\\s+");
        for (int i = 1; i < words.length; i++){
          if (hm.containsKey(words[i])){
            hm.put(words[i],hm.get(words[i])+1);
            count++;
          }
          else{
            hm.put(words[i],1);
            count++;
          }
        }
        //System.out.println(hm);

        double E_t = 0.0;
        double E_max = 0.0;
        for (String w : hm.keySet()){
            E_t = E_t + hm.get(w)*(Math.log10(count) - Math.log10(hm.get(w)));
        }
        E_max = Math.log10(count);
        if (count > 0 && E_max > 0){
          E_t = E_t / count;
          double E_rel = E_t/E_max*100;
          System.out.printf("%d %.1f %.0f\n", count, E_t, E_rel);
        }
        else{
          System.out.printf("0 0.0 0\n");
        }
        s = in.nextLine();
      }

    }
}
