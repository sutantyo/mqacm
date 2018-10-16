#include <iostream>
using namespace std;

int main(){

  char first;
  char cur;
  char prev;
  int count = 0;

  cin >> first;
  prev = first;
  while (cin >> cur){
    if (cur != prev){
      prev = cur;
    }
    else{
      count = count + cur - 48;
      while (cin >> cur && cur == prev){
        count = count + cur - 48;
      }
      prev = cur;
    }
  }
  if (prev == first)
    count = count + prev - 48;
  cout << prev << endl;
  cout << count << endl;
}
