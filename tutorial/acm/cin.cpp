#include<iostream>
#include<string>
#include<algorithm>   // required for max
using namespace std;

int main(){
	string l;
	string m;
	string r;
	while (cin >> l){
		cin >> m;
		cin >> r;
		cout << l << m << r << endl;
		//cout <<  max(l,max(m,r)) << endl;
	}
}
