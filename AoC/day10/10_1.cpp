#include <iostream>
#include <map>
#include <set>
#include <string>
#include <vector>
using namespace std;

int main(){

  int mod = 256;
  vector<int> v;
  for (int i = 0; i < mod; i++){
    v.push_back(i);
  }

  int n;
  int start = 0;
  int skip = 0;

    for (int i = 0; i < v.size(); i++){
      cout << v.at(i) << " ";
    }
    cout << endl;
  while (cin >> n){
    cin.get();
    cout << n << " " << start <<  endl;

    int length = n;
    for (int i = 0; i < n/2; i++){
      cout << ((start+i)%mod) << " with "<< ((start-i+n-1)%mod) << endl;
      int temp = v.at((start-i+n-1)%mod);
      v.at((start-i+n-1)%mod) = v.at((start+i)%mod);
      v.at((start+i)%mod) = temp;
    }

    for (int i = 0; i < v.size(); i++){
      cout << v.at(i) << " ";
    }
    cout << endl;
    start = (start+skip+n)%mod;
    skip++;
  }



}
