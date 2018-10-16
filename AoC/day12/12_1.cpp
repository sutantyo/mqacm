#include<iostream>
#include<map>
#include<set>
#include<vector>
#include<sstream>
using namespace std;

int matrix[2000][2000];
vector<int> marked;
set<int> progs;

void traverse(int);
void traverse2(int);

int main(){

  marked.resize(2000);
  fill(marked.begin(),marked.end(),0);
  int n;
  string s;
  while(cin >> n){
    getline(cin,s);
    stringstream ss;
    ss << s;
    int x;
    while (ss >> x)
      matrix[n][x] = 1;
  }

  //traverse
  progs.insert(0);
  traverse(0);
  traverse2(0);
  cout << progs.size() << endl;
  int count = 1;

  for (int i = 0; i < 2000; i++){
    if (marked.at(i) != 1){
      traverse(i);
      traverse2(i);
      count++;
    }
  }
  cout << count << endl;
}

void traverse(int node){
  marked.at(node) = 1;
  for (int i = 0; i < 2000; i++){
    if (matrix[node][i] == 1){
      if (marked.at(i) != 1){
          progs.insert(i);
          traverse(i);
      }
    }
  }
}

void traverse2(int node){
  marked.at(node) = 1;
  for (int i = 0; i < 2000; i++){
    if (matrix[i][node] == 1){
      if (marked.at(i) != 1){
          progs.insert(i);
          traverse2(i);
      }
    }
  }
}
