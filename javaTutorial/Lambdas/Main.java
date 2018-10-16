import java.util.*;

public class Main {

	public static void main(String[] args){

		Integer[] arrL = {1,2,3,4,5,6};
		ArrayList<Integer> arr = new ArrayList<Integer>(Arrays.asList(arrL));

		print(arr);
		//arr.replaceAll(x -> (x % 2 == 0) ? x+1 : x);
		//arr.replaceAll(x -> modify(x));
		//arr.removeIf(x -> x % 2 == 0);
		print(Collections.max(arr));
		print(Collections.min(arr));

		Object a = arr.stream().reduce((x,y) -> Math.max(x,y));
		a = arr.stream().reduce((x,y) -> x+y);

		print(a);

		System.out.println(arr.contains(6));
		System.out.println(arr.indexOf(6));
		
	}

	public static int modify(int x){
		if (x % 2 == 0)
			return x+1;
		return x;
	}	

	public static void change(ArrayList<Integer> arr){
		for (int i = 0; i < arr.size(); i++){
			if (arr.get(i) % 2 == 0)
				arr.set(i,arr.get(i)+1);
		}
	}

	public static void print(Object o){
		System.out.println(o);
	}
}
