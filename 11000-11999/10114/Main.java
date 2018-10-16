import java.util.*;

public class Main {

  public static void main(String[] args){


    Scanner in = new Scanner(System.in);
    while (in.hasNext()){
      int duration = in.nextInt();
      double payment = in.nextDouble();
      double value = in.nextDouble();
      int total = in.nextInt();
      double[] dep = new double[100];

      int cur = in.nextInt();
      double d = in.nextDouble();
      int i = 0;
      for(int k = 0; k < total; k++){


        while (i <= cur){
          dep[i] = d;
          i++;
          System.out.println("set " + i + " to " + d);
        }
        cur = in.nextInt();
        d = in.nextDouble();
      }
      for (int k = 0; k < duration; k++){
        System.out.println(k + " " + dep[k]);
      }
    }

  }
}
