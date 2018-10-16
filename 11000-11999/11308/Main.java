import java.io.*;
import java.util.*;


public class Main {

    public static void main (String args[]){

      Scanner in = new Scanner(new InputStreamReader(System.in));

      int no_of_binders = in.nextInt();
      for(int binders = 0; binders < no_of_binders; binders++){
        in.nextLine();
        String title = in.nextLine();
        System.out.println(title.toUpperCase());
        int m = in.nextInt();
        int n = in.nextInt();
        int b = in.nextInt();
        HashMap<String,Integer> ingredientCosts = new HashMap<>();
        TreeMap<Integer,TreeSet<String>> recipeCosts = new TreeMap<>();
        for (int ingredients = 0; ingredients < m; ingredients++){
            ingredientCosts.put(in.next(),in.nextInt());
        }

        /*
        for (String name : ingredientCosts.keySet()){
          System.out.println(name + " -> " + ingredientCosts.get(name));
        }
        */

        for (int recipes = 0; recipes < n; recipes++){
          in.nextLine();
          String recipe_name = in.nextLine();
          int cost = 0;
          int no_of_ingredients = in.nextInt();
          for (int ingredients = 0; ingredients < no_of_ingredients; ingredients++){
            String ingredient_name = in.next();
            cost = cost + ingredientCosts.get(ingredient_name)*in.nextInt();
          }
          if (recipeCosts.containsKey(cost)){
              recipeCosts.get(cost).add(recipe_name);
          }
          else{
            TreeSet<String> r = new TreeSet<>();
            r.add(recipe_name);
            recipeCosts.put(cost,r);
          }
        }

        int count = 0;
        for (Integer i : recipeCosts.keySet()){
          if (i < b){
            count++;
            for (String r : recipeCosts.get(i)){
              System.out.println(r);
            }
          }
        }
        if (count == 0)
          System.out.println("Too expensive!");
        System.out.println();
      }

    }
}
