import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import CollapsibleSection from "@/components/CollapsibleSection";
import ProgramCard from "@/components/ProgramCard";
import BackButton from "@/components/BackButton";

const DfsSectionII = () => {
  const { section } = useParams();

  const stackPrograms = [
    {
      title: "Stack using Doubly Circular Linked List",
      code: `#include<stdio.h>
#include<stdlib.h>

struct dlink
{
\tint rno;
\tstruct dlink *pre;
\tstruct dlink *next;
};

typedef struct dlink dnode;
dnode *lp=NULL,*rp=NULL;
int count=0;

void push(dnode *);
void display(dnode *);
void pop(dnode *);
void peep(dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Push ");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Pop");
\tprintf("\\n5.Peep");
   \tprintf("\\n6.Stack Size");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tpush(rp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tpop(rp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tpeep(rp);
\t\t\tbreak;
        case 6:
            printf("Stack Size Is: %d\\n",count);
            break;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

void push(dnode *ptr)
{
\tdnode *new1;
\tnew1=(dnode *)malloc(sizeof(dnode));
\tnew1->next=new1->pre=new1;
\t
\tprintf("Enter Value: ");
\tscanf("%d",&new1->rno);
\t
\tif(ptr==NULL)
\t{
\t\tlp=rp=new1;
\t\tcount++;
\t}
\telse
\t{
\t\tptr->next=new1;
\t\tnew1->next=lp;
\t\tlp->pre=new1;
\t\tnew1->pre=ptr;
\t\trp=new1;
\t\tcount++;
\t}
}

void display(dnode *ptr)
{
\tif(ptr==NULL)
\t{
        printf("Stack Is Empty\\n");
    }
    else
    {
\t\twhile(ptr->next!=lp)
\t\t{
\t\t\tprintf("Value->%d",ptr->rno);
\t\t\tprintf("\\n");
\t\t\tptr=ptr->next;
\t\t}\t
\t\tprintf("Value->%d",ptr->rno);
\t\tprintf("\\n");\t
\t}
}


void pop(dnode *ptr)
{
\tif(ptr==NULL)
\t{
\t\tprintf("Stack Is Empty\\n");
\t}
\telse
\t{
        printf("Deleted Top Is:%d\\n",ptr->rno);
\t\tif(lp==rp)
\t\t{
\t\t\tlp=rp=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t\telse
\t\t{
\t\t\trp=rp->pre;
\t\t\trp->next=lp;
\t\t\tlp->pre=rp;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t}
}

void peep(dnode *ptr)
{
    if(ptr==NULL)
    {
        printf("Stack Is Empty\\n");
    }
    else
    {
     
        printf("\\nTop Is At:%d\\n",rp->rno);
    }
}`
    },
    {
      title: "Stack using Array",
      code: `#include<stdio.h>
#include<stdlib.h>

int top=-1;
int a[5];
int n=5;
int count=0;

void push();
void display();
void pop();
void peep();
void exit();

void main()
{
\tint j;
\tprintf("1.Push");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.POp");\t
\tprintf("\\n5.Peep");\t
\tprintf("\\n6.Stack Size");\t
\tprintf("\\nChose What You Want To Do: ");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tpush();
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay();
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tpop();
\t\t\tbreak;
\t\tcase 5:
\t\t\tpeep();
\t\t\tbreak;
\t\tcase 6:
\t\t\tprintf("\\nStack Size Is: %d\\n",count);
\t\t\tbreak;\t
\t\tdefault:
\t\t\tprintf("\\nInvalid Choice\\n");
\t}
\tmain();
}

void push()
{
\tif(top>=n-1)
\t{
\t\tprintf("\\nStack Is Full\\n");
\t}
\telse
\t{
\t\ttop++;
\t\tprintf("Enter Value: ");
\t\tscanf("%d",&a[top]);
\t\tcount++;
\t}
}

void display()
{
\tint i;
\t
\tif(top<0)
\t{
\t\tprintf("\\n Stack Is Empty \\n");
\t}
\telse
\t{
\t\tfor(i=0;i<=top;i++)
\t\t{
\t\t\tprintf("value->%d",a[i]);
\t\t\tprintf("\\n");
\t\t}
\t}
}

void pop()
{
\tif(top<0)
\t{
\t\tprintf("\\nStack Is Empty\\n");
\t}
\telse
\t{
\t\tprintf("Deleted Value Is:%d\\n",a[top]);
\t\ttop--;
\t}
}

void peep()
{
\tif(top<0)
\t{
\t\tprintf("\\nStack Is Empty\\n");
\t}
\telse
\t{
\t\tprintf("\\nTop Is At:%d\\n",a[top]);
\t}
}`
    },
    {
      title: "Stack using Singly Circular Linked List",
      code: `#include<stdio.h>
#include<stdlib.h>

struct dlink
{
\tint rno;
\tstruct dlink *next;
};

typedef struct dlink dnode;
dnode *lp=NULL;
int count=0;

void push(dnode *);
void display(dnode *);
void pop(dnode *);
void peep(dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Push");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Pop");
\tprintf("\\n5.Peep");
\tprintf("\\n6.Stack Size");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tpush(lp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tpop(lp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tpeep(lp);
\t\t\tbreak;
\t\tcase 6:
\t\t\tprintf("Stack Size is:%d\\n",count);
            break;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

void push(dnode *ptr)
{
\tdnode *new1;
\tnew1=(dnode *)malloc(sizeof(dnode));
\tnew1->next=new1;
\t
\tprintf("Enter Value: ");
\tscanf("%d",&new1->rno);
\t
\tif(ptr==NULL)
\t{
\t\tlp=new1;
\t\tcount++;
\t}
\telse
\t{
\t\twhile(ptr->next!=lp)
\t\t{
\t\t\tptr=ptr->next;
\t\t}
\t\tptr->next=new1;
\t\tnew1->next=lp;
\t\tcount++;
\t}
}

void display(dnode *ptr)
{
\tif(ptr==NULL)
    {
        printf("Stack Is Empty\\n");
    }
    else
\t{
\t\twhile(ptr->next!=lp)
\t\t{
\t\t\tprintf("Value->%d",ptr->rno);
\t\t\tprintf("\\n");
\t\t\tptr=ptr->next;
\t\t}
\t\tprintf("Value->%d",ptr->rno);
\t\tprintf("\\n");\t
\t}
}


void pop(dnode *ptr)
{
\tdnode *ptr1;
\tptr1=(dnode *)malloc(sizeof(dnode));
\tif(ptr==NULL)
\t{
\t\tprintf("Stack Is Empty\\n");
\t}
\telse
\t{
\t\tif(lp->next==lp)
\t\t{
            printf("Deleted Top Is:%d\\n",lp->rno);
\t\t\tlp=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t\telse
\t\t{
\t\t\twhile(ptr->next!=lp)
\t\t\t{
\t\t\t\tptr1=ptr;
\t\t\t\tptr=ptr->next;
\t\t\t}
\t\t\tptr1->next=lp;
            printf("Deleted Top Is:%d\\n",ptr->rno);
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t}
}

void peep(dnode *ptr)
{
    if(ptr==NULL)
    {
        printf("Stack Is Empty\\n");
    }
    else
    {
        while(ptr->next!=lp)
        {
            ptr=ptr->next;
        }
        printf("Top Is:%d\\n",ptr->rno);
    }
}`
    },
    {
      title: "Stack using Doubly Linked List",
      code: `#include<stdio.h>
#include<stdlib.h>

struct dlink
{
\tint rno;
\tstruct dlink *pre;
\tstruct dlink *next;
};

typedef struct dlink dnode;
dnode *lp=NULL,*rp=NULL;
int count=0;

void push(dnode *);
void display(dnode *);
void pop(dnode *);
void peep(dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Push");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Pop");
\tprintf("\\n5.Peep");
\tprintf("\\n6.Stack Size");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tpush(rp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tpop(rp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tpeep(rp);
\t\t\tbreak;
\t\tcase 6:
\t\t\tprintf("Stack Size is:%d\\n",count);
\t\t\tbreak;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

void push(dnode *ptr)
{
\tdnode *new1;
\tnew1=(dnode *)malloc(sizeof(dnode));
\tnew1->next=new1->pre=NULL;
\t
\tprintf("Enter New Rno: ");
\tscanf("%d",&new1->rno);
\t
\tif(ptr==NULL)
\t{
\t\tlp=rp=new1;
\t\tcount++;
\t}
\telse
\t{
\t\tprintf("Top Is Deleted:%d\\n",rp->rno);
\t\tnew1->pre=ptr;
\t\tptr->next=new1;
\t\trp=new1;
\t\tcount++;
\t}
}

void display(dnode *ptr)
{
\tif(ptr==NULL)
\t{
\t\tprintf("Stack Is Empty\\n");
\t}
\telse
\t{
\t\twhile(ptr!=NULL)
\t\t{
\t\t\tprintf("Value->%d",ptr->rno);
\t\t\tprintf("\\n");
\t\t\tptr=ptr->next;
\t\t}
\t}
}

void pop(dnode *ptr)
{
\tif(ptr==NULL)
\t{
\t\tprintf("Stack Is Empty\\n");
\t}
\telse
\t{
\t\tif(lp==rp)
\t\t{
\t\t\tlp=rp=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t\telse
\t\t{
\t\t\trp=rp->pre;
\t\t\trp->next=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t}
}

void peep(dnode *ptr)
{
\tif(ptr==NULL)
\t{
\t\tprintf("Stack Is Empty\\n");
\t}
\telse
\t{
\t\tprintf("Top Is:%d\\n",ptr->rno);
\t}
}`
    },
    {
      title: "Stack using Singly Linked List",
      code: `#include<stdio.h>
#include<stdlib.h>

struct dlink
{
\tint rno;
\tstruct dlink *next;
};

typedef struct dlink dnode;
dnode *lp=NULL;
int count=0;

void push(dnode *);
void display(dnode *);
void pop(dnode *);
void peep(dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Push");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Pop");
\tprintf("\\n5.Peep");
\tprintf("\\n6.Stack Size");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tpush(lp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tpop(lp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tpeep(lp);
\t\t\tbreak;
\t\tcase 6:
\t\t\tprintf("Stack Size is:%d\\n",count);
\t\t\tbreak;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

void push(dnode *ptr)
{
\tdnode *new1;
\tnew1=(dnode *)malloc(sizeof(dnode));
\tnew1->next=NULL;
\t
\tprintf("Enter Value: ");
\tscanf("%d",&new1->rno);
\t
\tif(ptr==NULL)
\t{
\t\tlp=new1;
\t\tcount++;
\t}
\telse
\t{
\t\twhile(ptr->next!=NULL)
\t\t{
\t\t\tptr=ptr->next;
\t\t}
\t\tptr->next=new1;
\t\tnew1->next=NULL;
\t\tcount++;
\t}
}

void display(dnode *ptr)
{
\tif(ptr==NULL)
\t{
\t\tprintf("Stack Is Empty\\n");
\t}
\telse
\t{
\t\twhile(ptr!=NULL)
\t\t{
\t\t\tprintf("Value->%d",ptr->rno);
\t\t\tprintf("\\n");
\t\t\tptr=ptr->next;
\t\t}
\t}
}

void pop(dnode *ptr)
{
\tdnode *ptr1;
\tptr1=(dnode *)malloc(sizeof(dnode));
\tif(ptr==NULL)
\t{
\t\tprintf("Stack Is Empty\\n");
\t}
\telse
\t{
\t\tif(lp->next==NULL)
\t\t{
\t\t\tprintf("Deleted Top Is:%d\\n",lp->rno);
\t\t\tlp=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t\telse
\t\t{
\t\t\twhile(ptr->next!=NULL)
\t\t\t{
\t\t\t\tptr1=ptr;
\t\t\t\tptr=ptr->next;
\t\t\t}
\t\t\tprintf("Deleted Top Is:%d\\n",ptr->rno);
\t\t\tptr1->next=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t}
}

void peep(dnode *ptr)
{
\tif(ptr==NULL)
\t{
\t\tprintf("Stack Is Empty\\n");
\t}
\telse
\t{
\t\twhile(ptr->next!=NULL)
\t\t{
\t\t\tptr=ptr->next;
\t\t}
\t\tprintf("\\nTop Is At:%d\\n",ptr->rno);
\t}
}`
    }
  ];

  const queuePrograms = [
    {
      title: "Queue using Doubly Linked List",
      code: `#include<stdio.h>
#include<stdlib.h>

struct dlink
{
\tint rno;
\tstruct dlink *pre;
\tstruct dlink *next;
};

typedef struct dlink dnode;
dnode *lp=NULL,*rp=NULL;
int count=0;

void enQueue(dnode *);
void display(dnode *);
void deQueue(dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Enqueue");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Dequeue");
\tprintf("\\n5.Count Queue");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tenQueue(rp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tdeQueue(lp);
\t\t\tbreak;
        case 5:
            printf("Total Queue Is:%d\\n",count);
            break;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

void enQueue(dnode *ptr)
{
\tdnode *new1;
\tnew1=(dnode *)malloc(sizeof(dnode));
\tnew1->next=new1->pre=NULL;
\t
\tprintf("Enter Value: ");
\tscanf("%d",&new1->rno);
\t
\tif(ptr==NULL)
\t{
\t\tlp=rp=new1;
\t\tcount++;
\t}
\telse
\t{
\t\tnew1->pre=ptr;
\t\tptr->next=new1;
\t\trp=new1;
\t\tcount++;
\t}
}

void display(dnode *ptr)
{
\twhile(ptr!=NULL)
\t{
\t\tprintf("Value->%d",ptr->rno);
\t\tprintf("\\n");
\t\tptr=ptr->next;
\t}
}

void deQueue(dnode *ptr)
{
\tif(ptr==NULL)
\t{
\t\tprintf("Queue Is Empty\\n");
\t}
\telse
\t{
\t\tif(lp==rp)
\t\t{
            printf("Value Dequeued->%d\\n",ptr->rno);
\t\t\tlp=rp=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t\telse
\t\t{
            printf("Value Dequeued->%d\\n",ptr->rno);
\t\t\tlp=lp->next;
\t\t\tlp->pre=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t}
}`
    },
    {
      title: "Simple Queue using Array",
      code: `#include<stdio.h>
#include<stdlib.h>

int a[5];
int n=5;
int f=-1;
int r=-1;
int count=0;

void enQueue();
void display();
void deQueue();
void exit();

int main()
{
    int j;
    printf("\\n1.Enqueue");
    printf("\\n2.Display");
    printf("\\n3.Exit");
    printf("\\n4.deQueue");
    printf("\\n5.Count Queue");
    printf("\\nChoose What you want to do: ");
    scanf("%d",&j);

    switch(j)
    {
        case 1:
            enQueue();
            break;
        case 2:
            display();
            break;
        case 3:
            exit(0);
        case 4:
            deQueue();
            break;
        case 5:
            printf("\\nCount Of Queue Is:%d",count);
            break;
        default:
            printf("\\nInvalid Choice");
    }
    main();
    return 0;
}

void enQueue()
{
    if(r==n-1)
    {
        printf("\\nQueue Is Full\\n");
    }
    else 
    {
        r++;
        printf("Enter Value:");
        scanf("%d",&a[r]);
        count++;
        if(f<0)
        {
            f=0;
        }
    }  
}

void display()
{
    int i;
    if(r==f==-1)
    {
        printf("\\nQueue Is Empty\\n");
    }
    else
    {
        for(i=f;i<=r;i++)
        {
            printf("Value->%d",a[i]);
            printf("\\n");
        }
    }
    
}

void deQueue()
{
    if(f==-1)
    {
        printf("\\nQueue Is Empty\\n");
    }
    else
    {
        printf("\\nDeleted VAlue is:%d",a[f]);
        f++;
        count--;
        if(f>r)
        {
            f=r=-1;
        }
    }
}`
    },
    {
      title: "Circular Queue using Array",
      code: `#include<stdio.h>
#include<stdlib.h>

int a[5];
int n=5;
int f=-1;
int r=-1;
int count=0;

void enQueue();
void display();
void deQueue();
void exit();

void main()
{
    int j;
    printf("\\n1.Enqueue");
    printf("\\n2.Display");
    printf("\\n3.Exit");
    printf("\\n4.deQueue");
    printf("\\n5.Count Queue");
    printf("\\nChoose What you want to do: ");
    scanf("%d",&j);

    switch(j)
    {
        case 1:
            enQueue();
            break;
        case 2:
            display();
            break;
        case 3:
            exit(0);
        case 4:
            deQueue();
            break;
        case 5:
            printf("\\nCount Of Queue Is:%d",count);
            break;
        default:
            printf("\\nInvalid Choice");
    }
    main();
}

void enQueue()
{
    if(r==n-1 && f==0 || r+1==f)
    {
        printf("\\nQueue Is Full\\n");
    }
    else 
    {
        r++;
        if(r==n)
        {
            r=0;
        }
        printf("Enter Value:");
        scanf("%d",&a[r]);
        count++;
        if(f<0)
        {
            f=0;
        }
    }  
}

void display()
{
    int i;
    if(f==-1 && r==-1)
    {
        printf("\\nQueue Is Empty\\n");
    }
    else if(f==0 && r==n-1)
    {
        for(i=f;i<=r;i++)
        {
            printf("Value->%d",a[i]);
            printf("\\n");
        }
    }
    else if(f<=r)
    {
        for(i=f;i<=r;i++)
        {
            printf("Value->%d",a[i]);
            printf("\\n");
        }
    }
    else if(f>r)
    {
        for(i=f;i<n;i++)
        {
            printf("Value->%d",a[i]);
            printf("\\n");
        }
        for(i=0;i<=r;i++)
        {
            printf("Value->%d",a[i]);
            printf("\\n");
        }
    }
}

void deQueue()
{
    if(f==-1 && r==-1)
    {
        printf("\\nQueue Is Empty\\n");
    }
    else
    {
        printf("\\nDeleted VAlue is:%d",a[f]);
        f++;
        count--;
        if(f>r && r==n-1 || f==r+1)
        {
            f=r=-1;
        }
        else if(f==n)
        {
            f=0;
        }
    }
}`
    },
    {
      title: "Queue using Singly Linked List",
      code: `#include<stdio.h>
#include<stdlib.h>

struct dlink
{
\tint rno;
\tstruct dlink *next;
};

typedef struct dlink dnode;
dnode *lp=NULL;
int count=0;

void enQueue(dnode *);
void display(dnode *);
void deQueue(dnode *);
void exit();

void main()
{
\tint j;
\tprintf("\\n1.Enqueue");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Dequeue");
\tprintf("\\n5.Count Queue");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tenQueue(lp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tdeQueue(lp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tprintf("Total Queue Is:%d\\n",count);
\t\t\tbreak;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}


void enQueue(dnode *ptr)
{
\tdnode *new1;
\tnew1=(dnode *)malloc(sizeof(dnode));
\tnew1->next=NULL;
\t
\tprintf("Enter Value: ");
\tscanf("%d",&new1->rno);
\t
\tif(ptr==NULL)
\t{
\t\tlp=new1;
\t\tcount++;
\t}
\telse
\t{
\t\twhile(ptr->next!=NULL)
\t\t{
\t\t\tptr=ptr->next;
\t\t}
\t\tptr->next=new1;
\t\tnew1->next=NULL;
\t\tcount++;
\t}
}

void display(dnode *ptr)
{
\twhile(ptr!=NULL)
\t{
\t\tprintf("Value->%d",ptr->rno);
\t\tprintf("\\n");
\t\tptr=ptr->next;
\t}
}

void deQueue(dnode *ptr)
{
\tif(ptr==NULL)
\t{
\t\tprintf("Queue Is Empty\\n");
\t}
\telse
\t{
\t\tif(lp->next==NULL)
\t\t{
            printf("Deleted Value is:%d\\n",lp->rno);
\t\t\tlp=NULL;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t\telse
\t\t{
            printf("Deleted Value is:%d\\n",lp->rno);
\t\t\tlp=lp->next;
\t\t\tfree(ptr);
\t\t\tcount--;
\t\t}
\t}
}`
    }
  ];

  const sectionData: Record<string, { name: string; programs: { title: string; code: string }[] }> = {
    "stack": { name: "Stack", programs: stackPrograms },
    "queue": { name: "Queue", programs: queuePrograms },
  };

  const data = sectionData[section || ""];

  if (!data) {
    return <div>Section not found</div>;
  }

  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">{data.name}</h1>
          <p className="text-center text-muted-foreground mb-12">DFS Unit 3 - {data.programs.length} programs</p>

          <div className="space-y-4">
            {data.programs.map((program, i) => (
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

export default DfsSectionII;
