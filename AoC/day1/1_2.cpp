#include <iostream>
using namespace std;

int main(){

  string input;
  getline(cin,input);

  int count = 0;
  int length = input.length();
  int jump = length/2;
  for(int i = 0; i < input.length(); i++){
    if (input.at(i) == input.at((i+jump)%(length)))
      count = count + (input.at(i) - 48);
  }
  cout << count << endl;
}
