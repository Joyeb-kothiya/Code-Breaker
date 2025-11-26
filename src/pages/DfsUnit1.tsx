import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import CollapsibleSection from "@/components/CollapsibleSection";
import ProgramCard from "@/components/ProgramCard";
import BackButton from "@/components/BackButton";

const DfsUnit1 = () => {
  const programs = [
    {
      title: "Binary Search",
      code: `#include<stdio.h>
#include<stdlib.h>

int main()
{
    int a[100],i,l,h,m,n,k;
    printf("Enter the Size of Array:");
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        printf("Enter element %d of first array:",i);
        scanf("%d",&a[i]);
    }
    printf("Enter the element to be searched:");
    scanf("%d",&k);
    l=0;
    h=n-1;
    m=(l+h)/2;
    while(l<=h)
    {
        if(a[m]<k)
        {
            l=m+1;
        }
        else if(a[m]==k)
        {
            printf("Element found at position %d",m+1);
            break;
        }
        else
        {
            h=m-1;
        }
        m=(l+h)/2;
    }
    if(l>h)
    {
        printf("Element not found");
    }
}`
    },
    {
      title: "Bubble Sort (Descending)",
      code: `#include<stdio.h>
#include<stdlib.h>

int main()
{
    int a[100],n,i,j,t;
    printf("Enter the Size of Array:");
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        printf("Enter element %d of first array:",i);
        scanf("%d",&a[i]);   
    }
    for(i=0;i<n;i++)
    {
        for(j=0;j<n-i-1;j++)
        {
            if(a[j]<a[j+1])
            {
                t=a[j];
                a[j]=a[j+1];
                a[j+1]=t;
            }
        }
    }
    for(i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }
}`
    },
    {
      title: "Insertion Sort (Descending)",
      code: `#include<stdio.h>
#include<stdlib.h>

int main()
{
    int a[100],i,p,n,t;
    printf("Enter The Number Of Elements : ");
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        printf("Enter Element %d : ",i);
        scanf("%d",&a[i]);
    }
    for(i=1;i<=n;i++)
    {
        t=a[i];
        p=i-1;
        while(p>=0 && a[p]<t)
        {
            a[p+1]=a[p];
            p=p-1;
        }
        a[p+1]=t;
    }
    for(i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }
    return 0;
}`
    },
    {
      title: "Linear Search",
      code: `#include<stdio.h>
#include<stdlib.h>

int main()
{
    int a[100],s,i,n;
    printf("Enter the Size of Array:");
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        printf("Enter element %d of first array:",i);
        scanf("%d",&a[i]);   
    }
    printf("Enter the element to be searched:");
    scanf("%d",&s);
    for(i=0;i<n;i++)
    {
        if(a[i]==s)
        {
            printf("Element found at position %d",i+1);
            break;
        }
    }
    if(i==n)
    {
        printf("Element not found");
    }
}`
    },
    {
      title: "Merge Two Sorted Arrays",
      code: `#include<stdio.h>
#include<stdlib.h>

int main()
{
    int a[100],b[100],c[100],i,j,k,p=0,n,m,t,s;
    printf("Enter the size of first array:");
    scanf("%d",&n);
 
    for(i=0;i<n;i++)
    {
        printf("Enter element %d of first array:",i);
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        t=a[i];
        p=i-1;
        while(p>=0 && t>a[p])
        {
            a[p+1]=a[p];
            p=p-1;
        }
        a[p+1]=t;
    }
    printf("Enter the size of second array:");
    scanf("%d",&m);
    for(j=0;j<m;j++)
    {
        printf("Enter element %d of second array:",j);
        scanf("%d",&b[j]);
    }
    for(j=0;j<m;j++)
    {
        t=b[j];
        p=j-1;
        while(p>=0 && t>b[p])
        {
            b[p+1]=b[p];
            p=p-1;
        }
        b[p+1]=t;
    }
    i=j=k=0;
    while(i<n && j<m)
    {
        if(a[i]>b[j])
        {
            c[k]=a[i];
            i++;
            k++;
        }
        else
        {
            c[k]=b[j];
            j++;
            k++;
        }
    }
    while(i<n)
    {
        c[k]=a[i];
        i++;
        k++;
    }
    s=n+m;
    for(k=0;k<s;k++)
    {
        printf("%d ",c[k]);
    }
}`
    },
    {
      title: "Selection Sort (Descending)",
      code: `#include<stdio.h>
#include<stdlib.h>

int main()
{
    int a[100],c,p,n,d,t;
    printf("Enter the Size of Array:");
    scanf("%d",&n);
    for(c=0;c<n;c++)
    {
        printf("Enter element %d of first array:",c);
        scanf("%d",&a[c]);   
    }
    for(c=0;c<n-1;c++)
    {
        p=c;
        for(d=c+1;d<n;d++)
        {
            if(a[d]>a[p])
            {
                t=a[d];
                a[d]=a[p];
                a[p]=t;
            }
        }
        if(p!=c)
        {
            p=d;
        }
    }
    for(c=0;c<n;c++)
    {
        printf("%d ",a[c]);
    }
}`
    },
    {
      title: "Traverse a 2D Array (Matrix)",
      code: `#include<stdio.h>
#include<stdlib.h>

int main()
{
    int a[100][100],i,j,col,row;
    printf("Enter the number of rows:");
    scanf("%d",&row);
    printf("Enter the number of columns:");
    scanf("%d",&col);
    for(i=0;i<row;i++)
    {
        for(j=0;j<col;j++)
        {
            printf("Enter element %d,%d of the matrix:",i,j);
            scanf("%d",&a[i][j]);
        }
    }
    for(i=0;i<row;i++)
    {
        for(j=0;j<col;j++)
        {
            printf("Value: %d Row: %d Column: %d",a[i][j],i,j);
            printf("\\n"); 
        }
    }
}`
    }
  ];

  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">DFS Unit 1</h1>
          <p className="text-center text-muted-foreground mb-12">7 programs</p>

          <div className="space-y-4">
            {programs.map((program, i) => (
              <CollapsibleSection key={i} title={`Program ${i + 1}: ${program.title}`} count={1}>
                <ProgramCard number={i + 1} title={program.title} code={program.code} />
              </CollapsibleSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DfsUnit1;
