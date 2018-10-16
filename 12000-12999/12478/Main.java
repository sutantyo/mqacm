import java.util.*;

public class Main{

    public static void main(String[] args){
      HashSet<String> s = new HashSet<>();

      String d = "rakibul";
      char[] e = d.toCharArray();
      Arrays.sort(e);
      System.out.println(new String(e));
      s.add(d);

      char[][] c = { {'o','b','i','d','a','i','b','k','r'},
                   {'r','k','a','u','l','h','i','s','p'},
                   {'s','a','d','i','y','a','n','n','o'},
                   {'h','e','i','s','a','w','h','i','a'},
                   {'i','r','a','k','i','b','u','l','s'} };


      for(int i = 0; i < c.length; i++){
        for (int j = i; j < c.length; j++){
          String ans = "";
          for (int k = 0; k < c[0].length; k++){
            for (int l = k; l < c[0].length; l++){
              ans = ans + c[j][l]
            }
          }
        }
      }

    }

}
