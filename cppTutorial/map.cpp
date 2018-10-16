#include<bits/stdc++.h>
using namespace std;

int main(){

	map<string,int> m;

	m["hello"] = string("hello").length();
	m["world"] = string("world").length();;
	m["I"] = string("I").length();
	m[to_string(5)] = string("5").length();


	cout << "Iterator: " << endl;
	for(auto it = m.begin(); it != m.end(); it++){
		cout << (*it).first << " -> " << (*it).second << endl;
	}

	cout << endl;
	cout << "Size: " << endl;
	cout << "  size is " << distance(m.begin(),m.end()) << endl;
	cout << "  size is " << m.size() << endl;




	
}

