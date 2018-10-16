#include <iostream>
#include <iomanip>
#include<vector>
using namespace std;

int main(){


  vector<int> v;
    v.resize(100,0);

  int T;
  cin >> T;
  cin.ignore();
  for (int i = 1; i <= T; i++){
    fill(v.begin(),v.end(),0);
    cout << "Case " << dec <<  i << ": ";

    int index = 0;
    string instr;
    getline(cin,instr);

    for (int i = 0; i < instr.size(); i++){
      char ch = instr.at(i);
      //cout << "processing: " << ch << endl;
      if (ch == '.'){
      }
      if (ch == '>'){
        index = (index + 1) % 100;
      }
      else if (ch == '<'){
        if (index == 0)
          index = 99;
        else
          index = index - 1;
      }
      else if (ch == '+'){
        v.at(index) = (v.at(index) + 1) % 256;
      }
      else if (ch == '-'){
        v.at(index) = (256 + v.at(index) - 1) % 256;
      }
    }

    for (int j = 0; j < 99; j++){
      cout << setw(2);
      cout << setfill('0');
      cout << uppercase << hex << v.at(j) << " ";
    }
      cout << setw(2);
      cout << setfill('0');
      cout << uppercase << hex << v.at(99) << endl;

  }
}
