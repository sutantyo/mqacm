import java.util.*;

public class Main {

	public static void main(String args[]){
		HashMap<String,Integer> m = new HashMap<>();

		ArrayList<Integer> arr = new ArrayList<>();
		arr.add(5);
		arr.add(15);
		arr.add(100);
		arr.add(20);
		arr.add(20);
		arr.add(20);
		arr.add(20);
		arr.add(18);
		arr.add(13);
		arr.add(81);
		arr.add(72);

		print(arr);

		Collections.sort(arr);
		print(arr);
		int i = Collections.binarySearch(arr,100);
		print(i);
		int f = Collections.frequency(arr,20);
		print(f);


	}

	public static void print(Object o){
		System.out.println(o);
	}
}
