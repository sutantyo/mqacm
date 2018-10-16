#include<iostream>
using namespace std;

int main(){
	int* a = NULL;
	int n;
	cin >> n;

	a = new int[n];
	for(int i = 0; i < n; i++){
			a[i] = 0;
	}

	delete [] a;
	a = NULL;
}
