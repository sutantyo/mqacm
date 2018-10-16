#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <utility>
using namespace std;

int main(){

    map<string, map<string,string> > move;
    move["+x"]["+y"] = "+y";
    move["+x"]["+z"] = "+z";
    move["+x"]["-y"] = "-y";
    move["+x"]["-z"] = "-z";

    move["-x"]["+y"] = "-y";
    move["-x"]["+z"] = "-z";
    move["-x"]["-y"] = "+y";
    move["-x"]["-z"] = "+z";

    move["+y"]["+y"] = "-x";
    move["+y"]["+z"] = "+y";
    move["+y"]["-y"] = "+x";
    move["+y"]["-z"] = "+y";

    move["-y"]["+y"] = "+x";
    move["-y"]["+z"] = "-y";
    move["-y"]["-y"] = "-x";
    move["-y"]["-z"] = "-y";

    move["+z"]["+y"] = "+z";
    move["+z"]["+z"] = "-x";
    move["+z"]["-y"] = "+z";
    move["+z"]["-z"] = "+x";

    move["-z"]["+y"] = "-z";
    move["-z"]["+z"] = "+x";
    move["-z"]["-y"] = "-z";
    move["-z"]["-z"] = "-x";

  int n;
  cin >> n;
  while (n > 0){

    string dir = "+x";
    for (int i = 0; i < n-1; i++){
      string new_dir;
      cin >> new_dir;
      if (new_dir != "No")
        dir = move[dir][new_dir];
    }
    cout << dir << endl;

    cin >> n;
  }
}
