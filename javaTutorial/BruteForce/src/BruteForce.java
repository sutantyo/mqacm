import java.util.BitSet;

public class BruteForce {

	public static int count = 0;

	public static void main(String[] args){
		count = 0;
		int n = 25;
		String[] s = new String[n];
		for (int i = 0; i < n; i++){
			s[i] = (new Character((char)(97 + (i % 26)))).toString();
		}
		long start_time = System.currentTimeMillis();
		count = 0;
		recurse1(s,0,"");
		System.out.println("Time taken: " + (System.currentTimeMillis()-start_time));
		System.out.println("cases generated: " + count);

		start_time = System.currentTimeMillis();
		count = 0;
		recurse2(s,0,"");
		System.out.println("Time taken: " + (System.currentTimeMillis()-start_time));
		System.out.println("cases generated: " + count);

		start_time = System.currentTimeMillis();
		count = 0;
		useBinary1(s);
		System.out.println("Time taken: " + (System.currentTimeMillis()-start_time));
		System.out.println("cases generated: " + count);

		start_time = System.currentTimeMillis();
		count = 0;
		useBinary2(s);
		System.out.println("Time taken: " + (System.currentTimeMillis()-start_time));
		System.out.println("cases generated: " + count);
		
		start_time = System.currentTimeMillis();
		count = 0;
		useBitSet(s);
		System.out.println("Time taken: " + (System.currentTimeMillis()-start_time));
		System.out.println("cases generated: " + count);
	}
	
	public static void recurse1(String[] a, int index, String result){
		count++;
		if (index < a.length){
			recurse1(a,index+1,result+a[index]);
			recurse1(a,index+1,result);
		}
		//else System.out.println(result);
	}
	
	public static void recurse2(String[] a, int index, String result){
		//System.out.println(result);
		count++;
		for (int i = index; i < a.length; i++){
			recurse2(a,i+1,result+a[i]);
		}
	}
	
	public static void useBinary1(String[] a){
		int n = 1;
		for (int i = 0; i < a.length; i++){
			n = n * 2;
		}
		
		for (int i = 0; i < n; i++){
			String bitString = Integer.toBinaryString(i);
			String result = "";
			for (int j = bitString.length()-1; j >= 0; j--){
				if (bitString.charAt(j) == '1')
					result = result + a[bitString.length()-1-j];
			}
			//System.out.println(result);
			count++;
		}
	}
	
	public static void useBinary2(String[] a){
		int n = 1;
		for (int i = 0; i < a.length; i++){
			n = n * 2;
		}
		
		for (int i = 0; i < n; i++){
			String result = "";
			int j = i;
			int index = 0;
			while (j > 0){
				if (j%2 == 1)
					result = result + a[index++];
				else
					index++;
				j = j/2;
			}
			//System.out.println(result);
			count++;
		}
	}
	
	// https://docs.oracle.com/javase/7/docs/api/java/util/BitSet.html
	public static void useBitSet(String[] a){
		int n = 1;
		for (int i = 0; i < a.length; i++){
			n = n * 2;
		}
		//BitSet bs = BitSet.valueOf(new long[]{a.length});
		
		for (int i = 0; i < n; i++){
			BitSet bs = BitSet.valueOf(new long[]{i});
			String result = "";
			for (int j = bs.nextSetBit(0); j != -1; j = bs.nextSetBit(j+1)) {
				result = result + a[j];
			}
			//System.out.println(result);
			count++;
		}
		
	}
	

}

