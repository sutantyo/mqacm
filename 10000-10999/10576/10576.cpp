#include <bits/stdc++.h>
using namespace std;

int deficit;
int surplus;
int maxsurplus;

int recurse(int limit, int sum, string combo, int runningTotal);

int main(){

  int i = 1_000_000_000_000;

    maxsurplus = 0;
    while(cin >> surplus){
        cin >> deficit;

        string combo("");
        maxsurplus = 0;
        recurse(0, 0, combo,0);
        if (maxsurplus > 0)
          cout << maxsurplus << endl;
        else
          cout << "Deficit" << endl;
    }

}

int recurse(int limit, int sum, string combo, int runningTotal){

  if (limit > 11){
    //cout << combo << " " << runningTotal << " " << sum << endl;
    if (runningTotal < 0)
      if (sum > maxsurplus)
        maxsurplus = sum;
      // stop recursing
  }
  else if (limit > 4) {
      //cout << combo << " "<< runningTotal << endl;
      if (runningTotal < 0){
        if (combo.at(limit-5) == 'd')
          runningTotal = runningTotal + deficit;
        else
          runningTotal = runningTotal - surplus;
        recurse(limit+1, sum-deficit, combo+"d", runningTotal-deficit);
        recurse(limit+1, sum+surplus, combo+"s", runningTotal+surplus);
      }
  }
  else{
      recurse(limit+1, sum-deficit,combo+"d",sum-deficit);
      recurse(limit+1, sum+surplus,combo+"s",sum+surplus);
  }
}
