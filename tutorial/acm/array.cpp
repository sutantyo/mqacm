#include<iostream>
using namespace std;

int main(){

	int a[] = {1,2,3,4,5};
	int b[10]; 

	for(int i = 0; i < 15; i++){
		b[i] = i;
	}

	for(int i = 0; i < 5; i++){
		cout << a[i] << endl;
	}

}

