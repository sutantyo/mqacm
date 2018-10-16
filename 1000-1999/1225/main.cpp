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

	int n;
	cin >> n;
	for (int i = 0; i < n; i++){
		int a[10] = {0,0,0,0,0,0,0,0,0,0};	
		string s = "";
		int x;
		cin >> x;
		for (int j = 1; j <= x; j++){
			int temp = j;
			while (temp > 0){
				a[temp%10]++;
				temp = temp/10;
			}
		}
		for (int j = 0; j < 9; j++){
			cout << a[j] << " ";
		}
		cout << a[9] << endl;
	}

}
