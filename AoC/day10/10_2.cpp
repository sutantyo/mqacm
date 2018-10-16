#include <iostream>
#include <map>
#include <set>
#include <string>
#include <vector>
#include <iomanip>
using namespace std;

int main(){

  int mod = 256;
  vector<int> v;
  vector<int> inst;
  for (int i = 0; i < mod; i++){
    v.push_back(i);
  }

  int n;


  char ch;
  while(cin >> ch){
      inst.push_back(ch);
  }
  inst.push_back(17);
  inst.push_back(31);
  inst.push_back(73);
  inst.push_back(47);
  inst.push_back(23);

  for (int i = 0; i < inst.size(); i++){
    cout << inst.at(i) << " ";
  }
  cout << endl;

  int start = 0;
  int skip = 0;
  for (int j = 0; j < 64; j++){
  for (int k = 0; k < inst.size(); k++){
    n = inst.at(k);
    cin.get();
    cout << n << " " << start <<  endl;

    int length = n;
    for (int i = 0; i < n/2; i++){
      cout << ((start+i)%mod) << " with "<< ((start-i+n-1)%mod) << endl;
      int temp = v.at((start-i+n-1)%mod);
      v.at((start-i+n-1)%mod) = v.at((start+i)%mod);
      v.at((start+i)%mod) = temp;
    }

    for (int i = 0; i < v.size(); i++){
      cout << v.at(i) << " ";
    }
    cout << endl;
    start = (start+skip+n)%mod;
    skip++;
  }
}

int s = 0;
int hex0 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=16;
int hex1 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=32;
int hex2 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=48;
int hex3 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=64;
int hex4 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=80;
int hex5 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=96;
int hex6 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=112;
int hex7 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=128;
int hex8 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=144;
int hex9 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=160;
int hex10 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=176;
int hex11 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=192;
int hex12 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=208;
int hex13 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=224;
int hex14 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);
s=240;
int hex15 = v.at(s+0) ^ v.at(s+1) ^ v.at(s+2) ^ v.at(s+3) ^ v.at(s+4) ^ v.at(s+5) ^ v.at(s+6) ^ v.at(s+7) ^ v.at(s+8) ^ v.at(s+9) ^ v.at(s+10) ^ v.at(s+11) ^ v.at(s+12) ^ v.at(s+13) ^ v.at(s+14) ^ v.at(s+15);

cout << hex << hex0 << endl;
cout << hex << hex1 << endl;
cout << hex << hex2 << endl;
cout << hex << hex3 << endl;
cout << hex << hex4 << endl;
cout << hex << hex5 << endl;
cout << hex << hex6 << endl;
cout << hex << hex7 << endl;
cout << hex << hex8 << endl;
cout << hex << hex9 << endl;
cout << hex << hex10 << endl;
cout << hex << hex11 << endl;
cout << hex << hex12 << endl;
cout << hex << hex13 << endl;
cout << hex << hex14 << endl;
cout << hex << hex15 << endl;


cout << hex << setfill('0') << setw(2) << hex0;
cout << hex << setfill('0') << setw(2) << hex1;
cout << hex << setfill('0') << setw(2) << hex2;
cout << hex << setfill('0') << setw(2) << hex3;
cout << hex << setfill('0') << setw(2) << hex4;
cout << hex << setfill('0') << setw(2) << hex5;
cout << hex << setfill('0') << setw(2) << hex6;
cout << hex << setfill('0') << setw(2) << hex7;
cout << hex << setfill('0') << setw(2) << hex8;
cout << hex << setfill('0') << setw(2) << hex9;
cout << hex << setfill('0') << setw(2) << hex10;
cout << hex << setfill('0') << setw(2) << hex11;
cout << hex << setfill('0') << setw(2) << hex12;
cout << hex << setfill('0') << setw(2) << hex13;
cout << hex << setfill('0') << setw(2) << hex14;
cout << hex << setfill('0') << setw(2) << hex15;
cout << endl;

}
