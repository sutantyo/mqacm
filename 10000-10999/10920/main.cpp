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

	long a, b;
	cin >> a;
	cin >> b;
	while (a != 0 && b != 0){

		int x = (a+1)/2;
		int y = (a+1)/2;
		// find location
	 	long q = 1;
		while (b > q*q){
			q=q+2;
			x=x+1;
			y=y+1;
		}
		int sq = q*q;

		if (b == sq){
			cout << "Line = " << y << ", column = " << x << "." << endl;
			cin >> a >> b;
			continue;
		}
		sq = sq - (q-1);
		y = y - (q-1);
		if (b >= sq){
			y = y+b-sq;
			cout << "Line = " << y << ", column = " << x << "." << endl;
			cin >> a >> b;
			continue;
		}
		sq = sq - (q-1);
		x = x - (q-1);
		if (b >= sq){
			x = x+b-sq;
			cout << "Line = " << y << ", column = " << x << "." << endl;
			cin >> a >> b;
			continue;
		}
		sq = sq - (q-1);
		y = y + (q-1);
		if (b >= sq){
			y = y-(b-sq);
			cout << "Line = " << y << ", column = " << x << "." << endl;
			cin >> a >> b;
			continue;
		}
		sq = sq - (q-2);
		x = x + (q-2);
		x = x-(b-sq);
		cout << "Line = " << y << ", column = " << x << "." << endl;
		cin >> a >> b;
	}
}
