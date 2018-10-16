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
	int k;

	while (cin >> n){
		cin >> k;
		if (n == 0 && k == 0)
			return 0;

		int top = k + n - 1;
		int bottom1 = k-1;
		int bottom2 = n;

		int numerator = 1;	
		for (int i = top; i > bottom2; i--){
			numerator = (numerator * i)  % 1000000;
		}
		for (int i = bottom1; i > 1; i--){
			numerator = numerator / i;
		}
		cout << numerator << endl;
	}

	

}
