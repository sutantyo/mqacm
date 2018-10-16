#include<iostream>
using namespace std;

void switchcase(char x){
	switch(x){
		case 'a': cout << "you entered a" << endl;
		break;
		case 'b': 
			cout << "you entered b" << endl;
			cout << "this is a second line" << endl;
		break;
		default: 
		{
			cout << "I have no " << endl;
			cout << "I have no idea''" << endl;
		}
		
	}

}
int main(){
	char test = 'a';
	switchcase('a');
	switchcase('b');
	switchcase('c');

}


