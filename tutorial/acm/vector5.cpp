#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

bool isOdd(int i){
	return ((i%2) == 1);
}

int main(){
  vector<int> v1 {1,1,1,2,2,2,3,3,3,4,4,4,5,5,5};
  vector<int> v2 {1,1,1,2,2,2,3,3,3,4,4,4,5,5,5};
	for (int& i : v1){ cout << i << " ";} cout << endl;
		
	v1.erase(remove_if(v1.begin(),v1.end(),isOdd),v1.end());
	for (int& i : v1){ cout << i << " ";} cout << endl;

	// or if you want a lambda with that
	v2.erase(remove_if(v2.begin(),v2.end(),
							[](int i){
								return((i%2)==0);
							}
					),v2.end());
	for (int& i : v2){ cout << i << " ";} cout << endl;
}
