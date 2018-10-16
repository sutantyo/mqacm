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
	
	int cases;
	cin >> cases;

	int a, b, c;

	for(int i = 0; i < cases; i++){
		
		cin >> a >> b >> c;
		if (a <= 20 && b <= 20 && c <= 20)
			cout << "Case " << i+1 << ": good" << endl;
		else
			cout << "Case " << i+1 << ": bad" << endl;
	}
	
}
