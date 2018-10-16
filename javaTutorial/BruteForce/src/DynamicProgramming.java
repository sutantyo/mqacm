
public class DynamicProgramming {

	public static int[] fib;
	public static int count;
	
	public static void main(String[] args){
		
		fib = new int[46];
		fib[0] = 0;
		fib[1] = 1;
		fib[2] = 1;

		count = 0;
		long start_time = System.currentTimeMillis();
		System.out.println(fibonacci(43));
		System.out.println(fibonacci(44));
		System.out.println(fibonacci(45));
		System.out.println("time: " + (System.currentTimeMillis()-start_time));
		System.out.println("count: " + count);

		count = 0;
		start_time = System.currentTimeMillis();
		System.out.println(fibonacci2(43));
		System.out.println(fibonacci2(44));
		System.out.println(fibonacci2(45));
		System.out.println("time: " + (System.currentTimeMillis()-start_time));
		System.out.println("count: " + count);
	}
	public static int fibonacci2(int n){
		count++;
		if (n == 1 || n == 2)
			return 1;
		return fibonacci2(n-1) + fibonacci2(n-2);
	}
	
	public static int fibonacci(int n){
		count++;
		if (fib[n] != 0)
			return fib[n];
		else{
			fib[n] = fibonacci(n-1) + fibonacci(n-2);
			return fib[n];
		}
	}
}
