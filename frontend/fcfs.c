#include <Stdio.h>

struct processes
{
    int id,at,bt,wt,tat
};

void calculateTimes(struct processes p[],int n){
    p[0].wt=0;
    for (int i=0;i<n;i++){
        p[i].wt=p[i-1].wt+p[i-1].bt;
    }
    for(int i=0;i<n;i++){
        p[i].tat=p[i].wt+p[i].bt;
    }
}

void printResult(struct processes p[],int n){
    int totalWait=0;
    int totalTAT=0;
    printf("id\tat\tbt\twt\ttat\n");
    for(int i=0;i<n;i++){
        printf("%d\t%d\t%d\t%d",p[i].id,p[i].at,p[i].bt,p[i].wt,p[i].tat);
        totalWait +=p[i].wt;
        totalTAT +=p[i].tat;
    }

    printf("average Wt: %f \n Average TAt:%f",totalWait/n,totalTAT/n);
}

int main(){
    int n;
    printf("enter the number of Preoces");
    scanf("%d",&n);
    struct processes p[n];
    for(int i=0;i<n;i++){
        p[i].id=i+1;
        printf("enter process time and wait time of process %d",i);
        scanf("%d%d",&p[i].at,&p[i].bt);
    }

    for (int i=0;i<n;i++){
        for (int j=i+1;j<n-1;j++){
            if (p[i].at>p[j].at){
                struct processes temp=p[i];
                p[i]=p[j];
                p[j]=temp;
            }
        }
    }

    calculateTimes(p,n);
    printResult(p,n);
    return 0;
}
