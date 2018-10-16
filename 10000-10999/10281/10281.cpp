#include<iostream>
#include<iomanip>
#include<string>
#include<sstream>
#include<cmath>
using namespace std;

int main(){

  double current_speed;
  string input;
  int start_h, start_m, start_s;
  int h, m, s;

  double startTime;
  double currentTime;
  double distanceSoFar = 0.0;
  double distance = 0.0;

  stringstream ss;

  while(getline(cin,input)){
    input.replace(2,1," ");
    input.replace(5,1," ");
    if (input.size() > 8){
      currentTime = start_h*3600 + start_m*60 + start_s;
      ss.clear();
      ss << input;
      ss >> start_h;
      ss >> start_m;
      ss >> start_s;
      startTime = start_h*3600 + start_m*60 + start_s;
      distance = (startTime-currentTime)/3600.0*floor(current_speed);
      distanceSoFar = distanceSoFar + distance;
      ss >> current_speed;
    }
    else{
      ss.clear();
      ss << input;
      ss >> h;
      ss >> m;
      ss >> s;
      currentTime = h*3600+m*60+s;
      distance = (currentTime-startTime)/3600.0*floor(current_speed);
      input.replace(2,1,":");
      input.replace(5,1,":");
      cout << input << " ";
      cout << fixed << setprecision(2) << distanceSoFar+distance;
      cout << " km" << endl;
    }
  }


}
