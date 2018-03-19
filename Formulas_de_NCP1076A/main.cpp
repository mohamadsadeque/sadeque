#include <iostream>
#include <cmath>
using namespace std;

float V_BO_ON, V_BULK_ON, R_Lower, R_Upper, P;
int n;
int main()
{
    while(1){

    cout << " Entre com o número da formula: " << endl << "1. Resistive divider" << endl << "2. power losses on resistive divider for worst case: "<< endl;
    cin >> n;

    switch (n){
        case 1:
            cout << " Digite V_BULK(V): " << endl;
            cin >> V_BULK_ON;
            cout << " Digite R_Lower(k): " << endl;
            cin >> R_Lower;
            cout << " R_Upper : " << ((R_Lower * 1000) / ( (0.8) /( (V_BULK_ON) - (0.8)) )) << endl << "" << endl;
        break;
        case 2:
            cout << " Digite V_BULK(V): " << endl;
            cin >> V_BULK_ON;
            cout << " Digite R_Lower(k): " << endl;
            cin >> R_Lower;
            cout << " Digite R_Upper(k): " << endl;
            cin >> R_Upper;
            cout << "" << endl<< (pow( (V_BULK_ON) , 2))/( (R_Upper*1000) + ((R_Lower*1000) )) << " W " << endl << ""<< endl;
        break;



        }
    }
}
