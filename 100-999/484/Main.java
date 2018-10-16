import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args){
        Scanner in = new Scanner(new InputStreamReader(System.in));
        LinkedHashMap<Integer,Integer> m = new LinkedHashMap<>();

        while (in.hasNext()) {
            int n = in.nextInt();
            if (!m.containsKey(n)) {
                m.put(n,1);
            }
            else {
                m.replace(n,m.get(n)+1);
            }
        }
        for (Integer i : m.keySet()){
            System.out.println(i + " " + m.get(i));
        }

    }
}
