#include <stdio.h>

int main()
{
    int L, K;
    scanf("%d %d", &L, &K);

    int answer;
    if (K == 0)
    {
        answer = L;
    }
    else if (K == L)
    {
        answer = 0;
    }
    else
    {
        answer = (K > 0);
    }

    printf("%d\n", answer);
    return 0;
}
