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
	
	int sum = 0;
	int n;
	cin >> n;
	cin.get();
	for (int i = 0; i < n; i++){
		string s;
		getline(cin,s);
		if (s != "report"){
			int i = atoi(s.substr(7).c_str());	
			sum = sum + i;
		}
		else{
			cout << sum << endl;
		}
	}
}
