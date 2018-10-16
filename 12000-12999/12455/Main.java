import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner in = new Scanner(System.in);
		int cases = in.nextInt();

		for (int i = 0; i < cases; i++) {
			int length = in.nextInt();
			int no = in.nextInt();
			int[] p = new int[no];
			for (int j = 0; j < no; j++) {
				p[j] = in.nextInt();
			}

			boolean success = recurse(p,0,length);
			if (success)
				System.out.println("YES");
			else
				System.out.println("NO");
		}
	}

	public static boolean recurse(int[] p, int index, int sum) {
		if (sum == 0){
			return true;
		}
		if (index >= p.length) {
			return false;
		}
		return recurse(p,index+1,sum-p[index]) || recurse(p,index+1,sum);
	}

}
