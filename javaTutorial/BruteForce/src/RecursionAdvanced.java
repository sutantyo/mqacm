import java.util.Arrays;

public class RecursionAdvanced {

	public static char[][] maze;
	public static int steps;
	
	// Simple maze traversal:
	// to make it simple, let's say you can only
	// go right or go down
	// note that this code is very fragile, be careful!
	public static void main(String[] args){
		setup();
		
		steps = 0;
		int i = 1;
		int j = 1;
		System.out.println("moved to (" + i + "," + j + ")");
		while (maze[i][j] != 'E'){
			if (maze[i+1][j] == '1' || maze[i+1][j] == 'E'){
				i = i+1;
			}
			else if (maze[i][j+1] == '1' || maze[i][j+1] == 'E'){
				j = j+1;
			}
			System.out.println("moved to (" + i + "," + j + ")");
			steps++;
		}
		System.out.print("\nFound EXIT at (" + i + "," + j + ")");
		System.out.println(" after " + steps + " steps.");

		/*
		System.out.println();
		recurse(1,1);
		*/
	}
	
	public static void setup(){
	maze = new char[8][8];
	maze[0] = new char[]{'0','0','0','0','0','0','0','0'};
	maze[1] = new char[]{'0','S','0','0','0','0','0','0'};
	maze[2] = new char[]{'0','1','1','1','1','1','0','0'};
	maze[3] = new char[]{'0','0','1','0','0','1','0','0'};
	maze[4] = new char[]{'0','0','1','0','0','1','0','0'};
	maze[5] = new char[]{'0','0','1','0','0','1','E','0'};
	maze[6] = new char[]{'0','0','0','0','0','0','0','0'};
	maze[7] = new char[]{'0','0','0','0','0','0','0','0'};

		System.out.println("Maze:");
		print(maze);
		System.out.println();
	}
	
	public static void print(char[][] maze){
		for (int i = 0; i < maze.length; i++){
			for (int j = 0; j < maze[i].length; j++){
				System.out.print(maze[i][j] + " ");
			}
			System.out.println();
		}
	}
	
	public static void recurse(int i, int j){
		if (maze[i][j] == '0'){
			return;
		}

		System.out.println("moved to (" + i + "," + j + ")");
		if (maze[i][j] != 'E'){
			recurse(i+1,j);
			recurse(i,j+1);
		}
		else if (maze[i][j] == 'E'){
			System.out.print("\nFound EXIT at (" + i + "," + j + ")");
			System.out.println(" after " + steps + " steps.");
		}
		else{
			System.out.println("\nCannot find EXIT after " + steps + " steps");
		}
	}

}
