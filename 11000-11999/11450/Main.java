import java.io.*;
import java.util.*;

public class Main {

	// array to store the prices
	public static int prices[][];

	// array for top down dynamic programming
	public static int gp[][];

	public static int garments;	// number of garments
	public static int money;		// available money at start

	public static int count;	// I use this to count the number of recursion

	public static void main (String args[]){

		long start_time = System.currentTimeMillis();
		count = 0;

		// Boilerplate code to read in the input data
		Scanner in = new Scanner(new InputStreamReader(System.in));
		int cases = in.nextInt();
		while(cases-- > 0){
				money = in.nextInt();
				garments = in.nextInt();

				// gonna put number of items on column 0, hence 21 columns
				// (remember that each row starts with number of items,
				// followed by the prices)
				prices = new int[garments][21];
				for (int j = 0; j < garments; j++){
					prices[j][0] = in.nextInt();
					for (int k = 1; k <= prices[j][0]; k++){
						prices[j][k] = in.nextInt();
					}
				}
				// end of boilerplate

				// set up the top down DP table
				// the overlapping state is this:
				//	    we have chosen x garments and have y money left
				// e.g. after choosing 7 garments, I have $28 left. I store this
				// 			result in table[6][28]
				gp = new int[garments][money+1];

				// this fills the 2D table with -1s
				for (int j = 0; j < garments; j++)
					Arrays.fill(gp[j],-1);

				// go start the recursion (top down DP)
				//int best = recurse(money,0);

				// alternatively, you can use the bottom up DP, which I wrote
				// in another function
				int best = dp();

				if (best < 0)
					System.out.println("no solution");
				else
					System.out.println(best);

		}// end while

		System.err.println("Time taken: " +  (System.currentTimeMillis() - start_time) );
		System.err.println("Recursion : " +  count);
	}

	public static int recurse(int moneyLeft, int g){
		count++;

		// if you have no money left, no point in going on (prune the tree),
		// and return a negative value to denote this
		if (moneyLeft < 0)
			return Integer.MIN_VALUE;

		// if you have selected all the garments, return the money that you have
		// used
		if (g >= garments)
			return money-moneyLeft;

		// this is the memoisation part for the DP: have we done this case before?
		// i.e have we chosen x garments and have y money left? If yes, just return
		// the value from that table
		if (gp[g][moneyLeft] != -1)
			return gp[g][moneyLeft];

		// otherwise, we haven't come across this answer before, so recurse through
		// all possibilities until and find the best answer
		int answer = -1;
		for (int i = 1; i <= prices[g][0]; i++){
				answer = Math.max(answer, recurse(moneyLeft-prices[g][i],g+1));
		}
		// and remember to store this best answer once you got it
		gp[g][moneyLeft] = answer;
		return answer;
	}


	// Here is my bottom-up DP implementation. Please refer to the book
	// Competitive Programming, Chapter 3, starting at page 40 for an explanation
	// of this code
	public static int dp(){
		// the table for the bottom up DP:
		// table[i][j] is going to be 1 if after choosing i garments,
		// we have j money left
		// e.g. if you have chosen 7 garments and have $18 left, then
		//      table[6][18] is 1 (it means that you can get to that state)
		// 			notice how this is different to the top-down approach
		int[][] table = new int[garments][money];
		for (int i = 0; i < garments; i++)
			Arrays.fill(table[i],0);

		// base case
		// all possible 'money left' after the first purchase
		// this is the first row on the table, so if we three options, e.g.
		// $4, $6 and $8, and our starting money is $20, then we can have
		// $16, $14, or $12 left, so set table[0][12], table[0][14] and table[0][16] to 1
		int m = money;
		for (int i = 1; i <= prices[0][0]; i++){
			if (money - prices[0][i] >= 0){
				table[0][m-prices[0][i]] = 1;
			}
		}

		// do the same for the rest of the rows
		// for each possible state on row i-1, compute the possible states in row i

		// for each row
		for (int i = 1; i < garments; i++){
			// for each column
			for (int k = 0; k < money; k++){
				if (table[i-1][k] > 0){
					for (int j = 1; j <= prices[i][0]; j++){
						if (k - prices[i][j] >= 0)
							table[i][k-prices[i][j]] = 1;
					}
				}
			}
		}

		// now look at the last row, and see what's the least money you can have (i.e.
		// the first 1 in the row) because that would signify the most you can spend
		int answer = -1;
		for (int i = 0; i < money; i++){
			if (table[garments-1][i] > 0){
					return money-i;
			}
		}
		return answer;
	}

	// in case you want to print the tables
	public static void print(int[][] a){
			for (int i = 0; i < a.length; i++){
				for (int j = 0; j < a[i].length; j++){
					System.out.print(a[i][j] + " ");
				}
				System.out.println();
			}
	}
}
