import java.io.*;
import java.util.*;

public class Main {

    public static char[][] board;

    public static void main(String[] args){

        Scanner in = new Scanner(new InputStreamReader(System.in));

        while (in.hasNextLine()) {
          board = new char[8][8];
          String line = in.nextLine();

          int r = 0;
          int c = 0;
          for (int i = 0; i < line.length(); i++){
            char cur = line.charAt(i);
            if (cur > '0' && cur <= '8'){
              for (int k = 0; k < Character.getNumericValue(cur); k++){
                board[r][c] = '0';
                c++;
              }
            }
            else if (cur == '/'){
              r++;
              c = 0;
            }
            else{
              board[r][c] = cur;
              c++;
            }
          }

          for (int i = 0; i < 8; i++){
            for (int j = 0; j < 8; j++){
              if (board[i][j] == 0)
                continue;
              else if (board[i][j] == 'p'){
                  attack_p(i,j);
              }
              else if (board[i][j] == 'P'){
                  attack_P(i,j);
              }
              else if (board[i][j] == 'b' || board[i][j] == 'B'){
                  attack_b(i,j);
              }
              else if (board[i][j] == 'q' || board[i][j] == 'Q'){
                  attack_q(i,j);
              }
              else if (board[i][j] == 'k' || board[i][j] == 'K'){
                  attack_k(i,j);
              }
              else if (board[i][j] == 'r' || board[i][j] == 'R'){
                  attack_r(i,j);
              }
              else if (board[i][j] == 'n' || board[i][j] == 'N'){
                  attack_n(i,j);
              }
            }
          }

          int answer = 0;
          for (int i = 0; i < 8; i++){
            for (int j = 0; j < 8; j++){
              //System.out.print(board[i][j] + " ");
              if (board[i][j] == '0')
                answer++;
            }
            //System.out.println();
          }
          System.out.println(answer);

        }
    }

    static void attack_p(int i, int j){
      if (i+1 > 7)
        return;
      else if (j+1 > 7){
        if (board[i+1][j-1] == '0'){
            board[i+1][j-1] = '1';
        }
      }
      else if (j-1 < 0){
        if (board[i+1][j+1] == '0'){
            board[i+1][j+1] = '1';
        }
      }
      else{
        if (board[i+1][j-1] == '0'){
            board[i+1][j-1] = '1';
        }
        if (board[i+1][j+1] == '0'){
            board[i+1][j+1] = '1';
        }
      }
    }

    static void attack_P(int i, int j){
      if (i-1 < 0)
        return;
      else if (j+1 > 7){
        if (board[i-1][j-1] == '0'){
            board[i-1][j-1] = '1';
        }
      }
      else if (j-1 < 0){
        if (board[i-1][j+1] == '0'){
            board[i-1][j+1] = '1';
        }
      }
      else{
        if (board[i-1][j-1] == '0'){
            board[i-1][j-1] = '1';
        }
        if (board[i-1][j+1] == '0'){
            board[i-1][j+1] = '1';
        }
      }
    }

    static void attack_b(int i, int j){
      int r = i;
      int c = j;
      r++; c++;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r++; c++;
      }
      r = i; c = j;
      r++; c--;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r++; c--;
      }
      r = i; c = j;
      r--; c++;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r--; c++;
      }
      r = i; c = j;
      r--; c--;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r--; c--;
      }
    }

    static void attack_q(int i, int j){
      int r = i;
      int c = j;
      r++; c++;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r++; c++;
      }
      r = i; c = j;
      r++; c--;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r++; c--;
      }
      r = i; c = j;
      r--; c++;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r--; c++;
      }
      r = i; c = j;
      r--; c--;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r--; c--;
      }

      r = i; c = j;
      r++;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r++;
      }
      r = i; c = j;
      r--;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r--;
      }
      r = i; c = j;
      c++;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        c++;
      }
      r = i; c = j;
      c--;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        c--;
      }
    }

    static void attack_r(int i, int j){
      int r = i;
      int c = j;
      r++;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r++;
      }
      r = i; c = j;
      r--;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        r--;
      }
      r = i; c = j;
      c++;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        c++;
      }
      r = i; c = j;
      c--;
      while (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
        c--;
      }
    }

    static void attack_k(int i, int j){
      int r = i;
      int c = j;
      r++; c++;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
      }
      r = i; c = j;
      r++; c--;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
      }
      r = i; c = j;
      r--; c++;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
      }
      r = i; c = j;
      r--; c--;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
      }

      r = i; c = j;
      r++;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
      }
      r = i; c = j;
      r--;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
      }
      r = i; c = j;
      c++;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
      }
      r = i; c = j;
      c--;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1')){
        board[r][c] = '1';
      }
    }

    static void attack_n(int i, int j){
      int r = i;
      int c = j;
      r = i+2;
      c = j+1;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1'))
        board[r][c] = '1';
      r = i+2;
      c = j-1;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1'))
        board[r][c] = '1';
      r = i-2;
      c = j+1;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1'))
        board[r][c] = '1';
      r = i-2;
      c = j-1;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1'))
        board[r][c] = '1';
      r = i+1;
      c = j+2;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1'))
        board[r][c] = '1';
      r = i+1;
      c = j-2;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1'))
        board[r][c] = '1';
      r = i-1;
      c = j+2;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1'))
        board[r][c] = '1';
      r = i-1;
      c = j-2;
      if (r >= 0 && r < 8 && c >= 0 && c < 8 && (board[r][c] == '0' || board[r][c] == '1'))
        board[r][c] = '1';
    }



}
