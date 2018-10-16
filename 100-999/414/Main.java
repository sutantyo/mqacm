import java.io.*;
import java.util.*;

/*
 A very straightforward question, simply record the number of blank spaces
 on each line in an array, then find the smallest one.
 Go through the array, reduce it by the min blanks, and finally sum it up
 */

public class Main {

	public static void main (String args[]){
		Scanner in = new Scanner(new InputStreamReader(System.in));

		while (in.hasNext()){
			int n = in.nextInt();
			if (n == 0)
				return;
			in.nextLine();

			// record how many blanks on each line
			int[] line = new int[n];
			// record also the min number of blanks
			int min_blank = 25;
			// loop to find blank spaces on each line
			for (int i = 0; i < n; i++){
					String input = in.nextLine();
					int blanks = 0;
					for (int j = 0; j < 25; j++){
						if (input.charAt(j) == ' '){
							blanks++;
						}
					}
					line[i] = blanks;
					if (blanks < min_blank){
						min_blank = blanks;
					}
			}
			// reduce each line by the min
			for (int i = 0; i < n; i++){
				line[i] = line[i] - min_blank;
			}
			int max = 0;
			// sum it up
			for (int i = 0; i < n; i++){
					max = max + line[i];
			}
			System.out.println(max);
		}
	}
}
