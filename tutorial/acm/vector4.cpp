#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
  vector<int> v1 {1,1,1,2,2,2,3,3,3,4,4,4,5,5,5};
	cout << "size of vector: " << v1.size() << endl;
		
	// remove element at index 1
	v1.erase(v1.begin()+1);
	// remove from 0 to 1 , i.e. [0,1)
	v1.erase(v1.begin()+0,v1.begin()+2);
	for (int i : v1){
		cout << i << " ";
	}
	cout << endl;

	// introducing the auto keyword
	// iterate and remove element if equals to 2
	auto it = v1.begin();
	while(it != v1.end()){
		if(*it == 2)
			it = v1.erase(it);
		else
			it++;
	}
	// and introducing a faster foreach
	for (int& i : v1){
		cout << i << " ";
	}
	cout << endl << "size of vector: " << v1.size() << endl;
}
