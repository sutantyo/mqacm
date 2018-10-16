import java.util.*;

public class Main{
    public static void main(String[] args){

      Scanner in = new Scanner(System.in);
      int n = in.nextInt();

      while (n != 0){
        String s = in.next();
        String ans = "";
        int len = s.length();
        for (int i = 0; i < n; i++){
            StringBuilder cur = new StringBuilder(s.substring(0,len/n));
            ans = ans + cur.reverse();
            s = s.substring(len/n);
        }
        System.out.println(ans);
        n = in.nextInt();
      }
    }

}
