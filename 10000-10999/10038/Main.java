import java.util.*;

public class Main{

  public static void main(String[] args){

    Scanner in = new Scanner(System.in);

    while (in.hasNext()){
        int n = in.nextInt();
        int[] freq = new int[n];

        int a = in.nextInt();
        for (int i = 0; i < n-1; i++){
          int b = in.nextInt();
          int index = Math.abs(a-b);
          //System.out.println(a + " "  + b + " diff: " + index);
          if (index < n){
            freq[index]++;
          }
          a = b;
        }
        boolean flag = true;

        for (int i = 1; i < n; i++){
          //System.out.println(i + " " + freq[i]);
          if (freq[i] == 0){
            System.out.println("Not jolly");
            flag = false;
            break;
          }
        }
        if (flag){
            System.out.println("Jolly");
        }
    }
  }
}
