#include <iostream>
#include <vector>
#include <set>
#include <map>
using namespace std;
int maxval(vector<int>);

int main(){

  int count = 0;
  map< vector<int>, int > m;
  vector<int> v;
  int n;
  while (cin >> n){
    v.push_back(n);
  }

  set<vector<int> > s;
  while (s.find(v) == s.end()){
    count++;
    for (int k = 0; k < v.size(); k++)
      cout << v.at(k) << " ";
    cout << endl;
    s.insert(v);
    m[v] = count;
    int index = maxval(v);
    int turn = v.at(index);
    v.at(index) = 0;
    for (int k = (index+1)%v.size(); turn > 0; k = (k + 1) % v.size()){
        v.at(k)++;
        turn--;
    }
  }
  cout << count - (m.find(v)->second) << endl;
}

int maxval(vector<int> v){
  int max = 0;
  int max_i = 0;
  for (int i = 0; i < v.size(); i++){
    if (v.at(i) > max){
      max = v.at(i);
      max_i = i;
    }
  }
  return max_i;
}
