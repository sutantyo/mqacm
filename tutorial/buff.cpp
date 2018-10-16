#include<iostream>
#include<iomanip>
#include<algorithm>
#include<vector>
#include<map>
#include<set>
#include<cstring>
#include<cmath>
#include<string>
using namespace std;

int main(){

	int arr1[5] = {1,2,3,4,5};
	int arr2[5] = {100,200,300,400,500};

	arr1[5] = 1000;

	cout << arr2[0] << endl;
	cout << arr2[1] << endl;
	cout << arr2[2] << endl;
	cout << arr2[3] << endl;
	cout << arr2[4] << endl;
}
