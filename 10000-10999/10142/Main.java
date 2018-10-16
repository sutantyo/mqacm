import java.io.*;
import java.util.*;

class Main{

	public  static void print(Object o){
		System.out.println(o);
	}

  public static void main (String args[]){

		// HashMap<Integer,int[]> hm = new HashMap<>();
		// ArrayList<Integer> name = new ArrayList<>();

    Scanner in = new Scanner(new InputStreamReader(System.in));

		int cases = in.nextInt();

		for (int i = 0; i < cases; i++){
			int candidates = in.nextInt();
			in.nextLine();
			String[] names = new String[candidates];
			int[] count = new int[candidates];

			for (int j = 0; j < candidates; j++){
				names[j] = in.nextLine();	
				System.out.println(names[j]);
			}

			ArrayList< LinkedHashSet<Integer> > ll = new ArrayList<>();
			while(in.hasNext()){
				String[] votes = in.nextLine().split("\\s");
				LinkedHashSet<Integer> temp = new LinkedHashSet<>();
				for (int k = 0; k < votes.length; k++){
					temp.add(Integer.parseInt(votes[k]));
				}
				ll.add(temp);
			}

			for(int k = 0; k < ll.size(); k++){
				int first = ll.get(k).iterator().next();
				count[first-1] = count[first-1]+1;
			}

			int threshold = (ll.size()+1)/2;
			for (int j = 0; j < candidates; j++){
				if (count[j] > threshold){
					System.out.println(names[j] + ": " + count[j]);
				}
			}
			int toTest = count[0];
			boolean allsame = true;
			for (int j = 1; j < candidates && allsame; j++){
				if (count[i] != toTest)
					allsame = false;
			}
			if (allsame == true){
				print("GOT A TIE");
			}
			int smallest = count[0];
			int smallest_index = 0;
			for (int j = 0; j < candidates; j++){
				if (count[i] < smallest){
					smallest = count[i];
					smallest_index = i;
				}
			}
			if (allsame == true){
		}
  }

	public static String check(int threshold, int candidates, int[] count){
		String ans = "";
		for (int j = 0; j < candidates; j++){
			if (count[j] >= threshold){
				System.out.println(names[j] + ": " + count[j]);
			}
		}


	}
}
