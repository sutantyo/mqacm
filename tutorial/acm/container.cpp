#include<vector>
#include<iostream>
#include<string>
using namespace std;

int main(){
  vector<int> v;

  // insertion
  v.push_back(5);
  v.push_back(1);
  v.push_back(2);

  // access
  cout << v.at(0) + v[1] + v.back() << endl;
  for (int i = 0; i < v.size(); i++){
     cout << v.at(i) << endl;
  }
  v.clear();
}
