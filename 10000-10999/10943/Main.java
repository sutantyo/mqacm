import java.io.*;
import java.util.*;
import java.math.*;

class Main{
  public static void main (String args[]){
    Scanner in = new Scanner(new InputStreamReader(System.in));
    while (in.hasNext()){
			BigInteger l = in.nextBigInteger();
      BigInteger m = in.nextBigInteger();
			if (l.equals(BigInteger.ZERO) && m.equals(BigInteger.ZERO)){
				return;
			}
			BigInteger top = (l.add(m)).subtract(BigInteger.ONE);
			if (l.compareTo(m) == 1){
				BigInteger ans = BigInteger.ONE;
				BigInteger i = top.add(BigInteger.ZERO);
				while (i.compareTo(l) == 1){
					ans = ans.multiply(i);
					i = i.subtract(BigInteger.ONE);
				}
				i = m.subtract(BigInteger.ONE);
				while (i.compareTo(BigInteger.ZERO) == 1){
					ans = ans.divide(i);
					i = i.subtract(BigInteger.ONE);
				}
				System.out.println(ans.mod(new BigInteger("1000000")));
			}
			else{
				BigInteger ans = BigInteger.ONE;
				BigInteger i = top.add(BigInteger.ZERO);
				while (i.compareTo(m.subtract(BigInteger.ONE)) == 1){
					ans = ans.multiply(i);
					i = i.subtract(BigInteger.ONE);
				}
				i = l.add(BigInteger.ZERO);
				while (i.compareTo(BigInteger.ZERO) == 1){
					ans = ans.divide(i);
					i = i.subtract(BigInteger.ONE);
				}
				System.out.println(ans.mod(new BigInteger("1000000")));
			}
    }
  }
}
