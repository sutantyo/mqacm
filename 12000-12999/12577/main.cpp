#include <iostream>
using namespace std;

int main(){

	string s;
	int i = 1;
	cin >> s;
	while (s != "*"){
		cout << "Case " << i++ << ": ";
		if (s == "Hajj")
			cout << "Hajj-e-Akbar" << endl;
		else if (s == "Umrah")
			cout << "Hajj-e-Asghar" << endl;
		cin >> s;
	}
}
