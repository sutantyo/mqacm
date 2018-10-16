#include<string>
#include<iostream>
#include<set>
#include<vector>
#include<map>
using namespace std;

int main(){
	set<int> s;
	s.insert(5);
	s.insert(2);
	s.insert(3);
	s.insert(5);

	for(const int& i : s) cout << i << " "; cout << endl;		

	vector<string> v = {"hello","world","i","am","daniel"};
	map<string,int> m;
	for (string str : v){
		m[str] = str.length();
	}
	
	for(auto it = m.begin(); it != m.end(); it++){
		// what on earth???
		cout << (*it).first << " -> " << it->second << endl;
	}
}
