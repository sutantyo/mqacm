#include<bits/stdc++.h>
using namespace std;

int main(){

	vector<int> v;
	v.push_back(6);
	v.push_back(10);
	v.push_back(3);
	v.push_back(8);
	v.push_back(1);
	v.push_back(5);

  // normal iterator
	vector<int>::iterator normal_it;
	
	cout << "Normal iterator:" << endl;
	// using auto
	for(auto it = v.begin(); it != v.end(); it++){
		cout << *it << " ";
	}
	cout << endl;
	cout << endl;

	// reverse iterator
	// vector<int>::reverse_iterator rit;
	cout << "Reverse iterator:" << endl;
	for(auto rit = v.rbegin(); rit != v.rend(); rit++){
		cout << *rit << " ";
	}
	cout << endl;
	cout << endl;

	cout << "Distance, prev, next: " << endl;
	cout << "distance(v.begin(),v.end()): " << distance(v.begin(),v.end()) << endl;
	cout << "distance(v.end(),v.begin()): " << distance(v.end(),v.begin()) << endl;

	cout << "*prev(v.end(),2): " << *prev(v.end(),2) << endl;
	cout << "*next(v.begin(),2): " << *next(v.begin(),2) << endl;
	cout << endl;

	// modify element
	cout << "Modify element: " << endl;
	for(auto it = v.begin(); it != v.end(); it++){
		*it = 5;
	}
	for(auto it = v.begin(); it != v.end(); it++){
		cout << *it << " ";
	}
	cout << endl;
	
}

