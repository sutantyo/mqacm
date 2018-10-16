import java.util.*;

public class Main{

  public static void main(String[] args){

    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    in.nextLine();

    for(int i = 0; i < n; i++){
        String s = in.nextLine();
        int[] a = new int[100];

        int counter = 0;

        for(int j = 0; j < s.length(); j++){
          char c = s.charAt(j);
          if (c == '.'){}
          if (c == '>'){
            if (counter == 99){ counter = 0; }
            else counter++;
          }
          if (c == '<'){
            if (counter == 0){ counter = 99; }
            else counter--;
          }
          if (c == '+'){
            if (a[counter] == 255) a[counter] = 0;
            else a[counter]++;
          }
          if (c == '-'){
            if (a[counter] == 0) a[counter] = 255;
            else a[counter]--;
          }
        }

        System.out.print("Case " + (i+1) + ": ");
        for (int k = 0; k < a.length-1; k++){
          System.out.printf("%02X ",a[k]);
        }
        System.out.printf("%02X\n",a[a.length-1]);

    }


  }
}
