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

	int cases = 0;
	cin >> cases;
	cin.get();

	for(int i = 0; i < cases; i++){

		cout << "hellO" << endl;
		int cand;
		cin >> cand;

		string names[20];
		int votes[20];
		for (int j = 0; j < cand; j++){
			cin >> names[j];
			cout << names[j];
		}
		string voteline;
		getline(cin,voteline);
		while (voteline != ""){
			cout << voteline << endl;
		}
	}
}
