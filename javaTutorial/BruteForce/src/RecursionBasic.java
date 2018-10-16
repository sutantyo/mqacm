
public class RecursionBasic {
	
	public static void main(String[] args){
		
		int k = 4;
		print(k);
	}
	
	public static void print(int n){
		if (n < 1)
			return;

		System.out.println(n);	
		print(n-1);
	}
}
