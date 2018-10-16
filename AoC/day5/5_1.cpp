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

	vector<int> list;
	int n;
	while (cin >> n){
		list.push_back(n);
	}

	int count = 0;
	int index = 0;
	cout << list.size() << endl;
	while (index < list.size() && index >= 0){
		count++;
		int cur = list.at(index);
		if (cur >= 3)
			list.at(index)--;
		else
			list.at(index)++;
		index = index + cur;
	}

	cout << "count: " << count << endl;

}
