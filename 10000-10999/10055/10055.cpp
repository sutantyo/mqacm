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

	unsigned m;
	unsigned n;

	while (cin >> m){
		cin >> n;
		if (n > m)
			cout << fixed << abs(n - m) << endl;
		else
			cout << fixed << abs(m - n) << endl;
	}
}
