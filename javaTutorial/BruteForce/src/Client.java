public class Client {

		public static void main(String[] args) {
			System.out.println(sumRecursiveFast(21));
		}

		//O(logn) I feel so clever (???)
		public static int sumRecursiveFast(int n) {
			if(n == 0)
				return 0;
			int halfSum = sumRecursiveFast(n/2);
			if(n%2 == 0) {
				return halfSum*2 + n*n/4;
			}
			else {
				return n + halfSum*2 + (n-1)*(n-1)/4;
			}
		}
	
}