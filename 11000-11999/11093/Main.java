import java.util.*;

public class Main{

	public static void main(String[] args){

		Scanner in = new Scanner(System.in);

		int c = in.nextInt();
		for(int k = 0; k < c; k++){
			int n = in.nextInt();
			int[] a = new int[n];

			int sumfuel = 0;
			for(int i = 0; i < n; i++){
				a[i] = in.nextInt();
				sumfuel += a[i];
			}
			int sumdist = 0;
			int[] b = new int[n];
			for(int i = 0; i < n; i++){
				b[i] = in.nextInt();
				sumdist += b[i];
			}
			if(sumfuel < sumdist){
				System.out.println("Case " + (k+1) + ": Not possible");
				continue;
			}

			int cur = 0;
			int last = 0;
			for (int i = n-1; i >= 0; i--){
				cur = cur + a[i] - b[i];
				//System.out.println(cur);
				if (cur >= 0){
					cur = 0;
					last = i;
				}
			}
			System.out.println("Case " + (k+1) + ": Possible from station " + (last+1));
		}
	}

}
