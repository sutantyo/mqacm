
public class Recursion125 {

	public static int[][] maze;
	
	
	public static void main (String[] args){
	
		
		int i;
		/*
		// Example 1
		i = 1;
		while (i < 8){
			System.out.println(i);
		}
		*/
		example1(1);
		
		
		// Example 2
		i = 0; 
	}
	
	public static void example1(int i){
		if (i < 8){
			System.out.println(i);
			example1(i+1);
		}
	}
	
	
	
}
