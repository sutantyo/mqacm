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
	
	vector<string> v;
	int N;
	while(cin >> N){
		v.clear();
		cin.get();
		
		int max_length = 0;
		string s;	
		for(int i = 0; i < N; i++){
			getline(cin,s);
			v.push_back(s);

			if (s.length() > max_length){
				max_length = s.length();
			}
		}
		sort(v.begin(),v.end());
		int no_of_columns = 60/(max_length+2);
		int no_of_lines = N/no_of_columns;

		cout << "no of lines " << no_of_lines << endl;
		cout << "no of col " << no_of_columns << endl;
	
		for (int j = 0; j < no_of_lines; j++){
			int skip = no_of_lines;
			int i;
			for (i = j; i < no_of_columns-1; i++){
				cout << left << setw(max_length+2)<< j+i*skip;
			}
			cout << setw(max_length)<< v[i] << endl;
		}
	}

}
