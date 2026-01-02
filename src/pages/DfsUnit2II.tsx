import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import CollapsibleSection from "@/components/CollapsibleSection";
import ProgramCard from "@/components/ProgramCard";
import BackButton from "@/components/BackButton";

const DfsUnit2II = () => {
  const programs = [
    {
      title: "Doubly Circular Linked List",
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

void create(dnode *);
void display(dnode *);
void insertf(dnode *);
void insertl(dnode *);
void inserta(dnode *);
void deletef(dnode *);
void deletel(dnode *);
void deletea(dnode *);
void searchn(dnode *);
void updaten(dnode *);
void destroyn(dnode *);
void mergen(dnode *,dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Create Node");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Insert First Node");
\tprintf("\\n5.Insert Last Node");
\tprintf("\\n6.Insert At Any Node");
\tprintf("\\n7.Delete First Node");
\tprintf("\\n8.Delete Last Node");
\tprintf("\\n9.Delete At Any Node");
\tprintf("\\n10.Search Nord");
\tprintf("\\n11.Update Nord");
\tprintf("\\n12.Destroy Nord");
\tprintf("\\n13.Count Nords");
\tprintf("\\n14.Merge Nords");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tlp=(dnode *)malloc(sizeof(dnode));
\t\t\tcreate(lp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tinsertf(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tinsertl(rp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 6:
\t\t\tinserta(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 7:
\t\t\tdeletef(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 8:
\t\t\tdeletel(rp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 9:
\t\t\tdeletea(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 10:
\t\t\tsearchn(lp);
\t\t\tbreak;
\t\tcase 11:
\t\t\tupdaten(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 12:
\t\t\tdestroyn(lp);
\t\t\tbreak;
\t\tcase 13:
\t\t\tprintf("Total Node Is:%d\\n",count);
\t\t\tbreak;
\t\tcase 14:
\t\t\tmergen(lp,rp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

// ... keep existing code (create, display, insertf, insertl, inserta, deletef, deletel, deletea, searchn, updaten, destroyn, mergen functions)`
    },
    {
      title: "Singly Circular Linked List",
      code: `#include<stdlib.h>
#include<stdio.h>

struct dlink
{
\tint rno;
\tstruct dlink *next;
};

typedef struct dlink dnode;
dnode *lp=NULL;
int count=0;

void create(dnode *);
void display(dnode *);
void insertf(dnode *);
void insertl(dnode *);
void inserta(dnode *);
void deletef(dnode *);
void deletel(dnode *);
void deletea(dnode *);
void searchn(dnode *);
void updaten(dnode *);
void destroyn(dnode *);
void mergen(dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Create Node");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Insert First Node");
\tprintf("\\n5.Insert Last Node");
\tprintf("\\n6.Insert At Any Node");
\tprintf("\\n7.Delete First Node");
\tprintf("\\n8.Delete Last Node");
\tprintf("\\n9.Delete At Any Node");
\tprintf("\\n10.Search Nord");
\tprintf("\\n11.Update Nord");
\tprintf("\\n12.Destroy Nord");
\tprintf("\\n13.Count Nords");
\tprintf("\\n14.Merge Nords");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tlp=(dnode *)malloc(sizeof(dnode));
\t\t\tcreate(lp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tinsertf(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tinsertl(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 6:
\t\t\tinserta(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 7:
\t\t\tdeletef(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 8:
\t\t\tdeletel(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 9:
\t\t\tdeletea(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 10:
\t\t\tsearchn(lp);
\t\t\tbreak;
\t\tcase 11:
\t\t\tupdaten(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 12:
\t\t\tdestroyn(lp);
\t\t\tbreak;
\t\tcase 13:
\t\t\tprintf("Total Node Is:%d\\n",count);
\t\t\tbreak;
\t\tcase 14:
\t\t\tmergen(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

// ... keep existing code (create, display, insertf, insertl, inserta, deletef, deletel, deletea, searchn, updaten, destroyn, mergen functions)`
    },
    {
      title: "Doubly Linked List",
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

void create(dnode *);
void display(dnode *);
void insertf(dnode *);
void insertl(dnode *);
void inserta(dnode *);
void deletef(dnode *);
void deletel(dnode *);
void deletea(dnode *);
void searchn(dnode *);
void updaten(dnode *);
void destroyn(dnode *);
void mergen(dnode *,dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Create Node");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Insert First Node");
\tprintf("\\n5.Insert Last Node");
\tprintf("\\n6.Insert At Any Node");
\tprintf("\\n7.Delete First Node");
\tprintf("\\n8.Delete Last Node");
\tprintf("\\n9.Delete At Any Node");
\tprintf("\\n10.Search Nord");
\tprintf("\\n11.Update Nord");
\tprintf("\\n12.Destroy Nord");
\tprintf("\\n13.Count Nords");
\tprintf("\\n14.Merge Nords");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tlp=(dnode *)malloc(sizeof(dnode));
\t\t\tcreate(lp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tinsertf(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tinsertl(rp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 6:
\t\t\tinserta(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 7:
\t\t\tdeletef(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 8:
\t\t\tdeletel(rp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 9:
\t\t\tdeletea(lp);
\t\t\t
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 10:
\t\t\tsearchn(lp);
\t\t\tbreak;
\t\tcase 11:
\t\t\tupdaten(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 12:
\t\t\tdestroyn(lp);
\t\t\tbreak;
\t\tcase 13:
\t\t\tprintf("Total Node Is:%d\\n",count);
\t\t\tbreak;
\t\tcase 14:
\t\t\tmergen(lp,rp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

// ... keep existing code (create, display, insertf, insertl, inserta, deletef, deletel, deletea, searchn, updaten, destroyn, mergen functions)`
    },
    {
      title: "Singly Linked List",
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

void create(dnode *);
void display(dnode *);
void insertf(dnode *);
void insertl(dnode *);
void inserta(dnode *);
void deletef(dnode *);
void deletel(dnode *);
void deletea(dnode *);
void searchn(dnode *);
void updaten(dnode *);
void destroyn(dnode *);
void mergen(dnode *);
void exit();

void main()
{
\tint j;
\tprintf("1.Create Node");
\tprintf("\\n2.Display");
\tprintf("\\n3.Exit");
\tprintf("\\n4.Insert First Node");
\tprintf("\\n5.Insert Last Node");
\tprintf("\\n6.Insert At Any Node");
\tprintf("\\n7.Delete First Node");
\tprintf("\\n8.Delete Last Node");
\tprintf("\\n9.Delete At Any Node");
\tprintf("\\n10.Search Nord");
\tprintf("\\n11.Update Nord");
\tprintf("\\n12.Destroy Nord");
\tprintf("\\n13.Count Nords");
\tprintf("\\n14.Merge Nords");
\tprintf("\\nChosse what you wanted to do:");
\tscanf("%d",&j);
\t
\tswitch(j)
\t{
\t\tcase 1:
\t\t\tlp=(dnode *)malloc(sizeof(dnode));
\t\t\tcreate(lp);
\t\t\tbreak;
\t\tcase 2:
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 3:
\t\t\texit(0);
\t\tcase 4:
\t\t\tinsertf(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 5:
\t\t\tinsertl(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 6:
\t\t\tinserta(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 7:
\t\t\tdeletef(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 8:
\t\t\tdeletel(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 9:
\t\t\tdeletea(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 10:
\t\t\tsearchn(lp);
\t\t\tbreak;
\t\tcase 11:
\t\t\tupdaten(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tcase 12:
\t\t\tdestroyn(lp);
\t\t\tbreak;
\t\tcase 13:
\t\t\tprintf("Total Node Is:%d\\n",count);
\t\t\tbreak;
\t\tcase 14:
\t\t\tmergen(lp);
\t\t\tdisplay(lp);
\t\t\tbreak;
\t\tdefault:
\t\t\tprintf("Invalid Choice\\n");
\t\t\tbreak;
\t}
\tmain();
}

// ... keep existing code (create, display, insertf, insertl, inserta, deletef, deletel, deletea, searchn, updaten, destroyn, mergen functions)`
    }
  ];

  return (
    <div className="min-h-screen">
      <CodingBackground />
      <Navigation />

      <section className="py-20 px-4 container mx-auto pt-24">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">DFS II Unit 2</h1>
          <p className="text-center text-muted-foreground mb-12">4 programs</p>

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

export default DfsUnit2II;