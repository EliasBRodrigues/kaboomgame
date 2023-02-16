#include <stdio.h>
#include <stdlib.h>

int main()
{

    // p1 vetor que armazena nota p1 de 5 alunos
    // p2 vetor que armazena nota p1 de 5 alunos
    // media que armazena media de 5 alunos

    double p1[5], p2[5], mediaFinal[5];

    for(int i = 0; i < 2; i++){
        printf("\nDigite P1: ");
        scanf("%lf", &p1[i]);

        printf("\nDigite P2: ");
        scanf("%lf", &p2[i]); //long float

        mediaFinal[i] = (p1[i] + p2[i])/2;

        printf("a media final eh: %lf", mediaFinal[i]);
    }

    double a, b;
    a = 0;
    b = 10;

    for(int k = 0; k < 2; k++){
        if(mediaFinal[k] > a){
            a = mediaFinal[k];
        } else {
            b = mediaFinal[k];
        }
    }
    printf("\nmaior media: %lf\n", a);
    printf("\nmenor media: %lf\n", b);
    
    return 0;
}