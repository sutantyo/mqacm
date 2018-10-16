#include<vector>
#include<iostream>
#include<string>
using namespace std;

int main(){
	// making a vector from an array
  int a[] = {2,3,5,7,11,13};
  vector<int> v1(a,a+sizeof(a)/sizeof(int));

  vector<int> v2(5,100);    // 5 int, value 100
  vector<int> v3(v2);   // copy of first

  for(int i = 0; i < v1.size(); i++){
    cout << v1.at(i) << endl;
  }
  for(int i = 0; i < v2.size(); i++){
    v2.at(i) = 50;
  }
  for(int i = 0; i < v3.size(); i++){
    cout << v3.at(i) << endl;
  }
}
