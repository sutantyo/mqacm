import java.io.*;
import java.util.*;


public class Main {

    public static void main (String args[]){

        TreeSet<String> ts = new TreeSet<String>(new Comparator<String>(){
					public int compare(String s1, String s2){
						if (s1.length() < s2.length())
								return -1;
						else if (s1.length() > s2.length())
								return 1;
						else
								return (s1.compareTo(s2));
					}
				});
        Scanner in = new Scanner(new InputStreamReader(System.in));

        ArrayList<String> arr = new ArrayList<String>();
        arr.add("");
        for (Character ch = 'a'; ch <= 'z'; ch++){
            arr.add(ch.toString());
        }

        for (int i1 = 0; i1 < 27; i1++){
          for (int i2 = (i1 == 0) ? 0 : i1+1; i2 < 27; i2++){
            for (int i3 = (i2 == 0) ? 0 : i2 + 1; i3 < 27; i3++){
	            for (int i4 = (i3 == 0) ? 0 : i3 + 1; i4 < 27; i4++){
		            for (int i5 = (i4 == 0) ? 0 : i4 + 1; i5 < 27; i5++){
              		String ins = arr.get(i1) + arr.get(i2) + arr.get(i3) + arr.get(i4) + arr.get(i5);
              		ts.add(ins);
              	}
            	}
          	}
        	}
        }

				/*
				int t = 1;
				for (String s : ts){
					System.out.println((t++) + " " + s);
				}
        System.out.println("ab" + (ts.headSet("ab").size()+1));
        System.out.println("bc" + (ts.headSet("bc").size()+1));
        System.out.println("vwxyz" + (ts.headSet("vwxyz").size()+1));
				*/


        while (in.hasNext()){
            String s = in.next();
            boolean valid = true;
            for (int i = 1; i < s.length(); i++){
                if (s.charAt(i-1) >= s.charAt(i)){
                    System.out.println(0);
                    valid = false;
										break;
                }
            }
						if (valid){
							System.out.println(ts.headSet(s).size());
						}

        }
    }
}
/*
class StringComparator implements Comparator {
    @Override
    public int compare(Object o1, Object o2){
        String s1 = (String) o1;
        String s2 = (String) o2;
        if (s1.length() < s2.length())
            return -1;
        else if (s1.length() > s2.length())
            return 1;
        else
            return (s1.compareTo(s2));
    }
}
*/
