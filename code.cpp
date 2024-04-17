#include <bits/stdc++.h>

using namespace std;
string solve(string str, int n)
{
    for (int i = 0; i < str.length(); i++)

    {
        int ascii = (int)str[i];
        if ((ascii < 65 || ascii > 90) && (ascii < 97 || ascii > 122))
        {
            str = str.substr(0, i) + str.substr(i + 1);
            i--;
        }
    }
    return str;
}
int main()
{

    // Input string
    string str = "take12% *&u ^$#forward";
    int n = str.length();

    cout << "Resultant string:"
         << "\n";
    cout << solve(str, n) << "\n";
    return 0;
}
