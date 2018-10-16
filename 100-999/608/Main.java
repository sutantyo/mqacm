import java.util.*;

public class Main {

  public static void main(String[] args){

    Scanner in = new Scanner(System.in);

    int n = in.nextInt();

    for (int i = 0; i < n; i++){

      HashMap<Character,String> m = new HashMap<>();
      for (char j = 'A'; j <= 'L'; j++){
        m.put(j,"dunno");
      }

      boolean found = false;
      for(int j = 0; j < 3; j++){

        if (found) break;
        String left = in.next();
        String right = in.next();
        String status = in.next();

        if (status.equals("even")){
          for (Character c : left.toCharArray())
            m.put(c,"good");
          for (Character c : right.toCharArray())
            m.put(c,"good");
        }
        else if(status.equals("up")){
          for (Character c : left.toCharArray()){
            if (m.get(c).equals("heavy")){
              System.out.println(c.toString() + " is the counterfeit coin and it is heavy.");
              found = true;
              break;
            }
            else if (m.get(c).equals("light"))
              m.put(c,"good");
            else if (m.get(c).equals("dunno"))
              m.put(c,"heavy");
            }
          for (Character c : right.toCharArray()){
            if (m.get(c).equals("light")){
              System.out.println(c.toString() + " is the counterfeit coin and it is light.");
              found = true;
              break;
            }
            else if (m.get(c).equals("heavy"))
              m.put(c,"good");
            else if (m.get(c).equals("dunno"))
              m.put(c,"light");
            }
        }
        else if(status.equals("down")){
          for (Character c : left.toCharArray()){
            if (m.get(c).equals("light")){
              System.out.println(c.toString() + " is the counterfeit coin and it is light.");
              found = true;
              break;
            }
            else if (m.get(c).equals("heavy"))
              m.put(c,"good");
            else if (m.get(c).equals("dunno"))
              m.put(c,"light");
            }
          for (Character c : right.toCharArray()){
            if (m.get(c).equals("heavy")){
              System.out.println(c.toString() + " is the counterfeit coin and it is heavy.");
              found = true;
              break;
            }
            else if (m.get(c).equals("light"))
              m.put(c,"good");
            else if (m.get(c).equals("dunno"))
              m.put(c,"heavy");
          }
        }
      }
      if (!found){
      for (Character c : m.keySet()){
        if (!m.get(c).equals("good") && !m.get(c).equals("dunno"))
          System.out.println(c.toString() + " is the counterfeit coin and it is " + m.get(c) + ".");
      }
    }
    }
  }

}
