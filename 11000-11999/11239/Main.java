import java.io.*;
import java.util.*;

public class Main {

    public static void main (String args[]){

      Scanner in = new Scanner(new InputStreamReader(System.in));

      String s;
      HashMap<String,Set<String>> projects = new HashMap<>();
      HashSet<String> students = new HashSet<>();

      s = in.nextLine();
      while (s.charAt(0) != '0'){
        if (s.charAt(0) == '1'){
            TreeMap<Integer,TreeSet<String>> answer = new TreeMap<>();
            for (String pr : projects.keySet()){
              int nu = -projects.get(pr).size();
              if (answer.get(nu) != null){
                answer.get(nu).add(pr);
              }
              else{
                answer.put(nu,new TreeSet<>());
                answer.get(nu).add(pr);
              }
            }
            projects.clear();
            for (Integer i : answer.keySet()){
              for (String project : answer.get(i)){
                System.out.println(project + " " + -i);
              }
            }
            students.clear();
            s = in.nextLine();
        }
        else if (s.charAt(0) >= 'A' && s.charAt(0) <= 'Z'){
          String project_name = s;
          s = in.nextLine();
          HashSet<String> curStudent = new HashSet<>();
          while (s.charAt(0) >= 'a' && s.charAt(0) <= 'z'){
            if (!students.contains(s)){
              curStudent.add(s);
            }
            else{
              for (String temp : projects.keySet()){
                projects.get(temp).remove(s);
              }
            }
            s = in.nextLine();
          }
          projects.put(project_name,curStudent);
          for (String stu : curStudent){
            students.add(stu);
          }
          //curStudent.clear();
        }
      }

    }
}
