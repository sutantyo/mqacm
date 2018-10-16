#include<iostream>
#include<map>
#include<string>

using namespace std;

int main(){

  int no_of_cases;
  cin >> no_of_cases;
  string s;
  getline(cin,s);
  getline(cin,s);

  for (int i = 0; i < no_of_cases; i++){
    int count = 0;
    map<string,int> m;
    getline(cin,s);
    while (s != ""){
      count++;
      if (m.find(s) != m.end()){
        m[s] = m[s] + 1;
      }
      else{
        m[s] = 1;
      }
      getline(cin,s);
    }

    for(auto it = m.begin(); it != m.end(); it++){
      cout << it->first << " ";
      printf("%.4lf\n", it->second * 100.0/count);
    }
    if (i < no_of_cases-1)
      cout << endl;

  }

}
