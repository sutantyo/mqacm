#include<iostream>
#include<vector>
using namespace std;

int main(){
	vector<int> v1 = {2,3,5,7,11,13};
	vector<int> v2(v1.begin()+1,v1.end()-1);

	vector<int>::iterator it;
	for(it = v2.begin(); it!=v2.end(); it++){
		*it = *it * 2;	
	}

	for(int i : v2){
		cout << i << endl;
	}

}
