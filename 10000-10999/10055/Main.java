import java.io.*;
import java.util.*;
import java.math.*;

class Main{
  public static void main (String args[]){
    Scanner in = new Scanner(new InputStreamReader(System.in));
    while (in.hasNext()){
			BigInteger l = in.nextBigInteger();
      BigInteger m = in.nextBigInteger();
			if (l.compareTo(m) == 1)
				System.out.println(l.subtract(m));
			else
				System.out.println(m.subtract(l));
    }
  }
}
