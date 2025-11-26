import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import CollapsibleSection from "@/components/CollapsibleSection";
import ProgramCard from "@/components/ProgramCard";
import BackButton from "@/components/BackButton";

const CppSection = () => {
  const { unit, section } = useParams();

  const sectionData: Record<string, { name: string; count: number }> = {
    "constructor": { name: "Constructor", count: 10 },
    "destructor": { name: "Destructor", count: 1 },
    "constructor-overloading": { name: "Constructor Overloading", count: 5 },
    "copy-constructor": { name: "Copy Constructor", count: 10 },
    "friend-function": { name: "Friend Function", count: 10 },
    "inline-function": { name: "Inline Function", count: 10 },
    "member-function": { name: "Member Function", count: 4 },
    "parameterised-constructor": { name: "Parameterised Constructor", count: 10 },
    "static": { name: "Static", count: 10 },
    "basic-to-class": { name: "Basic to Class Type Conversion", count: 5 },
    "class-to-class": { name: "Class to Class Type Conversion", count: 5 },
    "class-to-basic": { name: "Class to Basic Type Conversion", count: 5 },
    "explicit-implicit": { name: "Explicit & Implicit Type Conversion", count: 6 },
    "operator-overloading": { name: "Operator Overloading", count: 15 },
    "unary-operator": { name: "Unary Operator Overloading", count: 5 },
    "binary-operator": { name: "Binary Operator Overloading", count: 5 },
  };

  const programsData: Record<string, Array<{ title: string; code: string }>> = {
    "constructor": [
      {
        title: "Phone Model (Default Constructor)",
        code: `#include <iostream>
#include <string>
using namespace std;

class Phone 
{
\tprivate:
\t    string model;
\t
\tpublic:
\t    // Default constructor
\t    Phone() 
\t\t{
\t        model="Unknown";
\t    }
\t
\t    // Function to display model
\t    void displayModel() 
\t\t{
\t        cout << "Phone Model: " << model << endl;
\t    }
};

int main() 
{
    Phone myPhone;           // Calls default constructor
    myPhone.displayModel();  // Output: Phone Model: Unknown
    return 0;
}`
      },
      {
        title: "Book Pages (Default Constructor)",
        code: `#include <iostream>
using namespace std;

class Book 
{
\tprivate:
\t    int pages;
\t
\tpublic:
\t    // Default constructor
\t    Book() 
\t\t{
\t        pages=0;
\t    }
\t
\t    // Function to display number of pages
\t    void displayPages() 
\t\t{
\t        cout << "Number of pages: " << pages << endl;
\t    }
};

int main() 
{
    Book myBook;           // Calls default constructor
    myBook.displayPages(); // Output: Number of pages: 0
    return 0;
}`
      },
      {
        title: "Laptop Ready (Default Constructor)",
        code: `#include <iostream>
using namespace std;

class Laptop 
{
\tpublic:
\t    // Default constructor
\t    Laptop() 
\t\t{
\t        cout << "Laptop ready" << endl;
\t    }
};

int main() 
{
    Laptop myLaptop; // Default constructor is called automatically
    return 0;
}`
      },
      {
        title: "Flower Color (Default Constructor)",
        code: `#include <iostream>
#include <string>
using namespace std;

class Flower 
{
\tprivate:
\t    string color;
\t
\tpublic:
\t    // Default constructor
\t    Flower() 
\t\t{
\t        color="Red";
\t    }
\t
\t    // Function to display color
\t    void displayColor() 
\t\t{
\t        cout << "Flower color: " << color << endl;
\t    }
};

int main() 
{
    Flower myFlower;          // Calls default constructor
    myFlower.displayColor();  // Output: Flower color: Red
    return 0;
}`
      },
      {
        title: "Pen Ink Level (Default Constructor)",
        code: `#include <iostream>
using namespace std;

class Pen 
{
\tprivate:
\t    int inkLevel;
\t
\tpublic:
\t    // Default constructor
\t    Pen() 
\t\t{
\t        inkLevel=100;
\t    }
\t
\t    // Function to display ink level
\t    void displayInkLevel() 
\t\t{
\t        cout << "Ink level: " << inkLevel << endl;
\t    }
};

int main() 
{
    Pen myPen;              // Calls default constructor
    myPen.displayInkLevel(); // Output: Ink level: 100
    return 0;
}`
      },
      {
        title: "Car Brand (Default Constructor)",
        code: `#include <iostream>
#include <string>
using namespace std;

class Car 
{
\tprivate:
\t    string brand;
\t
\tpublic:
\t    // Default constructor
\t    Car() 
\t\t{
\t        brand="Generic";
\t    }
\t
\t    // Function to display the brand
\t    void displayBrand() 
\t\t{
\t        cout << "Car brand: " << brand << endl;
\t    }
};

int main() 
{
    Car myCar;              // Calls default constructor
    myCar.displayBrand();   // Output: Car brand: Generic
    return 0;
}`
      },
      {
        title: "Chair Legs (Default Constructor)",
        code: `#include <iostream>
using namespace std;

class Chair 
{
\tprivate:
\t    int legs;
\t
\tpublic:
\t    // Default constructor
\t    Chair() 
\t\t{
\t        legs=4;
\t    }
\t
\t    // Function to display the number of legs
\t    void displayLegs() 
\t\t{
\t        cout << "Number of legs: " << legs << endl;
\t    }
};

int main() 
{
    Chair myChair;           // Calls default constructor
    myChair.displayLegs();   // Output: Number of legs: 4
    return 0;
}`
      },
      {
        title: "TV Standby (Default Constructor)",
        code: `#include <iostream>
using namespace std;

class Tv
{
\tpublic:
\t    // Default constructor
\t    Tv() 
\t\t{
\t        cout << "TV is on standby" << endl;
\t    }
};

int main() 
{
    Tv myTV; // Default constructor is called automatically
    return 0;
}`
      },
      {
        title: "Shoe Size (Default Constructor)",
        code: `#include <iostream>
using namespace std;

class Shoe 
{
\tprivate:
\t    int size;
\t
\tpublic:
\t    // Default constructor
\t    Shoe() 
\t\t{
\t        size=0;
\t    }
\t
\t    // Function to display the shoe size
\t    void displaySize() 
\t\t{
\t        cout << "Shoe size: " << size << endl;
\t    }
};

int main() 
{
    Shoe myShoe;            // Calls default constructor
    myShoe.displaySize();   // Output: Shoe size: 0
    return 0;
}`
      },
      {
        title: "Bottle Volume (Default Constructor)",
        code: `#include <iostream>
using namespace std;

class Bottle 
{
\tprivate:
\t    int volume; // in milliliters
\t
\tpublic:
\t    // Default constructor
\t    Bottle() 
\t\t{
\t        volume=500;
\t    }
\t
\t    // Function to display the volume
\t    void displayVolume() 
\t\t{
\t        cout << "Bottle volume: " << volume << "ml" << endl;
\t    }
};

int main() 
{
    Bottle myBottle;           // Calls default constructor
    myBottle.displayVolume();  // Output: Bottle volume: 500 ml
    return 0;
}`
      }
    ],
    "destructor": [
      {
        title: "Demo Destructor",
        code: `#include <iostream>
using namespace std;
 
class Demo 
{
\tpublic:
\t    // Constructor
\t    Demo() 
\t\t{
\t        cout << "Constructor called" << endl;
\t    }
\t
    // Destructor
\t    ~Demo() 
\t\t{
\t        cout << "Destructor called" << endl;
    }
};
 
int main() 
{
    cout << "Creating object d1" << endl;
    Demo d1;  // Constructor will be called here

    cout << "End of main function" << endl;
    // Destructor will be called automatically when d1 goes out of scope

    return 0;
}`
      }
    ],
    "constructor-overloading": [
      {
        title: "Rectangle Constructor Overloading",
        code: `#include <iostream>
using namespace std;

class Rectangle 
{
\tprivate:
\t    double length;
\t    double width;
\t
\tpublic:
\t    // Default constructor (0x0)
\t    Rectangle() 
\t\t{
\t        length=0;
\t        width=0;
\t    }
\t
\t    // Constructor with one parameter (square)
\t    Rectangle(double side) 
\t\t{
\t        length=side;
\t        width=side;
\t    }
\t
\t    // Constructor with two parameters (length and width)
\t    Rectangle(double l,double w) 
\t\t{
\t        length=l;
\t        width=w;
\t    }
\t
\t    // Method to calculate area
\t    double area() 
\t\t{
\t        return length*width;
\t    }
};

int main() 
{
    Rectangle r1;          // default constructor
    Rectangle r2(5);       // square constructor
    Rectangle r3(4,6);    // length and width constructor

    cout << "Area of r1: " << r1.area() << endl;
    cout << "Area of r2: " << r2.area() << endl;
    cout << "Area of r3: " << r3.area() << endl;

    return 0;
}`
      },
      {
        title: "Time Constructor Overloading",
        code: `#include <iostream>
#include <iomanip>  // for std::setw and std::setfill
using namespace std;

class Time 
{
\tprivate:
\t    int hour;
\t    int minute;
\t    int second;
\t
\tpublic:
\t    // Default constructor (00:00:00)
\t    Time() {
\t        hour=0;
\t        minute=0;
\t        second=0;
\t    }
\t
\t    // Constructor with hour only
\t    Time(int h) 
\t\t{
\t        hour=h;
\t        minute=0;
\t        second=0;
\t    }
\t
\t    // Constructor with hour and minutes
\t    Time(int h, int m) 
\t\t{
\t        hour=h;
\t        minute=m;
\t        second=0;
\t    }
\t
\t    // Constructor with hour, minutes, and seconds
\t    Time(int h,int m,int s) 
\t\t{
\t        hour=h;
\t        minute=m;
\t        second=s;
\t    }
\t
\t    // Method to display time in HH:MM:SS format
\t    void displayTime() 
\t\t{
\t        cout << setw(2) << setfill('0') << hour << ":"
\t             << setw(2) << setfill('0') << minute << ":"
\t             << setw(2) << setfill('0') << second << endl;
\t    }
};

int main() 
{
    Time t1;               // 00:00:00
    Time t2(9);        \t  // 09:00:00
    Time t3(14,30);      // 14:30:00
    Time t4(18,45,50);\t// 18:45:50

    cout << "t1: "; t1.displayTime();
    cout << "t2: "; t2.displayTime();
    cout << "t3: "; t3.displayTime();
    cout << "t4: "; t4.displayTime();

    return 0;
}`
      },
      {
        title: "Student Constructor Overloading",
        code: `#include <iostream>
#include <string>
using namespace std;

class Student 
{
\tprivate:
\t    int studentID;
\t    string name;
\t    char grade;
\t
\tpublic:
\t    // Default constructor
\t    Student() 
\t\t{
\t        studentID=0;
\t        name="N/A";
\t        grade='N';
\t    }
\t
\t    // Constructor with student ID
\t    Student(int id) 
\t\t{
\t        studentID=id;
\t        name="N/A";
\t        grade='N';
\t    }
\t
\t    // Constructor with student ID and name
\t    Student(int id,string n)
\t\t {
\t        studentID=id;
\t        name=n;
\t        grade='N';
\t    }
\t
\t    // Constructor with student ID, name, and grade
\t    Student(int id,string n,char g) 
\t\t{
\t        studentID=id;
\t        name=n;
\t        grade=g;
\t    }
\t
\t    // Method to display student information
\t    void showStudent() 
\t\t{
\t        cout << "Student ID: " << studentID << endl;
\t        cout << "Name: " << name << endl;
\t        cout << "Grade: " << grade << endl;
\t        cout << "---------------------" << endl;
\t    }
};

int main() 
{
    Student s1;                \t    // Default constructor
    Student s2(101);               // Constructor with ID
    Student s3(102,"Alice");      // Constructor with ID and name
    Student s4(103,"Bob",'A');   // Constructor with ID, name, and grade

    s1.showStudent();
    s2.showStudent();
    s3.showStudent();
    s4.showStudent();

    return 0;
}`
      },
      {
        title: "Distance Constructor Overloading",
        code: `#include <iostream>
using namespace std;

class Distance 
{
\tprivate:
\t    int feet;
\t    int inches;
\t
\tpublic:
\t    // Default constructor (0 feet 0 inches)
\t    Distance() 
\t\t{
\t        feet=0;
\t        inches=0;
\t    }
\t
\t    // Constructor with total inches
\t    Distance(int totalInches) 
\t\t{
\t        feet=totalInches/12;
\t        inches=totalInches%12;
\t    }
\t
\t    // Constructor with feet and inches
\t    Distance(int f,int i) 
\t\t{
\t        feet=f;
\t        inches=i;
\t    }
\t
\t    // Method to display distance
\t    void displayDistance() 
\t\t{
\t        cout << feet << " feet " << inches << " inches" << endl;
\t    }
};

int main() 
{
    Distance d1;            // Default constructor
    Distance d2(25);        // Total inches constructor
    Distance d3(5,8);      // Feet and inches constructor

    cout << "d1: "; d1.displayDistance();
    cout << "d2: "; d2.displayDistance();
    cout << "d3: "; d3.displayDistance();

    return 0;
}`
      },
      {
        title: "Box Constructor Overloading",
        code: `#include <iostream>
using namespace std;

class Box 
{
\tprivate:
\t    double length;
\t    double width;
\t    double height;
\t
\tpublic:
\t    // Default constructor (1x1x1)
\t    Box() 
\t\t{
\t        length=1;
\t        width=1;
\t        height=1;
\t    }
\t
\t    // Constructor with one parameter (cube)
\t    Box(double side) 
\t\t{
\t        length=width=height=side;
\t    }
\t
\t    // Constructor with 3 parameters (length, width, height)
\t    Box(double l,double w,double h) 
\t\t{
\t        length=l;
\t        width=w;
\t        height=h;
\t    }
\t
\t    // Method to calculate volume
\t    double volume() 
\t\t{
\t        return length*width*height;
\t    }
};

int main() 
{
    Box b1;              // Default constructor
    Box b2(3);          // Cube constructor
    Box b3(2,4,5);     // Length, width, height constructor

    cout << "Volume of b1: " << b1.volume() << endl;
    cout << "Volume of b2: " << b2.volume() << endl;
    cout << "Volume of b3: " << b3.volume() << endl;

    return 0;
}`
      }
    ],
    "copy-constructor": [
      {
        title: "Phone Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Phone 
{
\tprivate:
\t    string model;
\t    float price;
\t
\tpublic:
\t    // Parameterized constructor
\t    Phone(string m,float p) 
\t\t{
\t        model=m;
\t        price=p;
\t    }
\t
\t    // Copy constructor
\t    Phone(const Phone &p) 
\t\t{
\t        model=p.model;
\t        price=p.price;
\t    }
\t
\t    // Function to display phone details
\t    void display() 
\t\t{
\t        cout << "Model: " << model << endl;
\t        cout << "Price: $" << price << endl;
\t    }
};

int main() 
{
    // Creating a Phone object
    Phone phone1("iPhone 14",999.99);
    cout << "Original Phone:" << endl;
    phone1.display();

    // Creating a copy using the copy constructor
    Phone phone2=phone1;
    cout << "\\nCopied Phone:" << endl;
    phone2.display();

    return 0;
}`
      },
      {
        title: "Book Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Book 
{
\tprivate:
\t    string title;
\t    int pages;
\t
\tpublic:
\t    // Parameterized constructor
\t    Book(string t,int p) 
\t\t{
\t        title=t;
\t        pages=p;
\t    }
\t
\t    // Copy constructor
\t    Book(const Book &b) 
\t\t{
\t        title=b.title;
\t        pages=b.pages;
\t    }
\t
\t    // Function to display book details
\t    void display() 
\t\t{
\t        cout << "Title: " << title << endl;
\t        cout << "Number of Pages: " << pages << endl;
\t    }
};

int main() 
{
    // Creating a Book object
    Book book1("The Alchemist",197);
    cout << "Original Book:" << endl;
    book1.display();

    // Creating a copy using the copy constructor
    Book book2=book1;
    cout << "\\nCopied Book:" << endl;
    book2.display();

    return 0;
}`
      },
      {
        title: "Laptop Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Laptop 
{
\tprivate:
\t    string brand;
\t    int ram; // RAM size in GB
\t
\tpublic:
\t    // Parameterized constructor
\t    Laptop(string b,int r) 
\t\t{
\t        brand=b;
\t        ram=r;
\t    }
\t
\t    // Copy constructor
\t    Laptop(const Laptop &l) 
\t\t{
\t        brand=l.brand;
\t        ram=l.ram;
\t    }
\t
\t    // Function to display laptop details
\t    void display() 
\t\t{
\t        cout << "Brand: " << brand << endl;
\t        cout << "RAM: " << ram << " GB" << endl;
\t    }
};

int main() 
{
    // Creating a Laptop object
    Laptop laptop1("Dell",16);
    cout << "Original Laptop:" << endl;
    laptop1.display();

    // Creating a copy using the copy constructor
    Laptop laptop2=laptop1;
    cout << "\\nCopied Laptop:" << endl;
    laptop2.display();

    return 0;
}`
      },
      {
        title: "Flower Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Flower 
{
\tprivate:
\t    string color;
\t    float height; // Height in centimeters
\t
\tpublic:
\t    // Parameterized constructor
\t    Flower(string c,float h) 
\t\t{
\t        color=c;
\t        height=h;
\t    }
\t
\t    // Copy constructor
\t    Flower(const Flower &f) 
\t\t{
\t        color=f.color;
\t        height=f.height;
\t    }
\t
\t    // Function to display flower details
\t    void display() 
\t\t{
\t        cout << "Color: " << color << endl;
\t        cout << "Height: " << height << " cm" << endl;
\t    }
};

int main() 
{
    // Creating a Flower object
    Flower flower1("Red",25.5);
    cout << "Original Flower:" << endl;
    flower1.display();

    // Creating a copy using the copy constructor
    Flower flower2=flower1;
    cout << "\\nCopied Flower:" << endl;
    flower2.display();

    return 0;
}`
      },
      {
        title: "Pen Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Pen 
\t{
\tprivate:
\t    string color;
\t    float inkLevel; // Ink level in ml
\t
\tpublic:
\t    // Parameterized constructor
\t    Pen(string c,float ink) 
\t\t{
\t        color=c;
\t        inkLevel=ink;
\t    }
\t
\t    // Copy constructor
\t    Pen(const Pen &p) 
\t\t{
\t        color=p.color;
\t        inkLevel=p.inkLevel;
\t    }
\t
\t    // Function to display pen details
\t    void display() 
\t\t{
\t        cout << "Color: " << color << endl;
\t        cout << "Ink Level: " << inkLevel << " ml" << endl;
\t    }
};

int main() 
{
    // Creating a Pen object
    Pen pen1("Blue",10.5);
    cout << "Original Pen:" << endl;
    pen1.display();

    // Creating a copy using the copy constructor
    Pen pen2=pen1;
    cout << "\\nCopied Pen:" << endl;
    pen2.display();

    return 0;
}`
      },
      {
        title: "Car Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Car 
{
\tprivate:
\t    string brand;
\t    int year;
\t
\tpublic:
\t    // Parameterized constructor
\t    Car(string b,int y) 
\t\t{
\t        brand=b;
\t        year=y;
\t    }
\t
\t    // Copy constructor
\t    Car(const Car &c) 
\t\t{
\t        brand=c.brand;
\t        year=c.year;
\t    }
\t
\t    // Function to display car details
\t    void display() 
\t\t{
\t        cout << "Brand: " << brand << endl;
\t        cout << "Year: " << year << endl;
\t    }
};

int main() 
{
    // Creating a Car object
    Car car1("Toyota",2022);
    cout << "Original Car:" << endl;
    car1.display();

    // Creating a copy using the copy constructor
    Car car2=car1;
    cout << "\\nCopied Car:" << endl;
    car2.display();

    return 0;
}`
      },
      {
        title: "Chair Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Chair 
{
\tprivate:
\t    string material;
\t    float weight; // in kilograms
\t
\tpublic:
\t    // Parameterized constructor
\t    Chair(string m,float w) 
\t\t{
\t        material=m;
\t        weight=w;
\t    }
\t
\t    // Copy constructor
\t    Chair(const Chair &c) 
\t\t{
\t        material=c.material;
\t        weight=c.weight;
\t    }
\t
\t    // Function to display chair details
\t    void display() 
\t\t{
\t        cout << "Material: " << material << endl;
\t        cout << "Weight: " << weight << " kg" << endl;
\t    }
};

int main() 
{
    // Creating a Chair object
    Chair chair1("Wood", 12.5);
    cout << "Original Chair:" << endl;
    chair1.display();

    // Creating a copy using the copy constructor
    Chair chair2=chair1;
    cout << "\\nCopied Chair:" << endl;
    chair2.display();

    return 0;
}`
      },
      {
        title: "TV Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class TV 
{
\tprivate:
\t    string brand;
\t    int screenSize; // in inches
\t
\tpublic:
\t    // Parameterized constructor
\t    TV(string b,int s) 
\t\t{
\t        brand=b;
\t        screenSize=s;
\t    }
\t
\t    // Copy constructor
\t    TV(const TV &t) 
\t\t{
\t        brand=t.brand;
\t        screenSize=t.screenSize;
\t    }
\t
\t    // Function to display TV details
\t    void display() 
\t\t{
\t        cout << "Brand: " << brand << endl;
\t        cout << "Screen Size: " << screenSize << " inches" << endl;
\t    }
};

int main() 
{
    // Creating a TV object
    TV tv1("Samsung",55);
    cout << "Original TV:" << endl;
    tv1.display();

    // Creating a copy using the copy constructor
    TV tv2=tv1;
    cout << "\\nCopied TV:" << endl;
    tv2.display();

    return 0;
}`
      },
      {
        title: "Shoe Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Shoe 
{
\tprivate:
\t    int size;
\t    string color;
\t
\tpublic:
\t    // Parameterized constructor
\t    Shoe(int s,string c) 
\t\t{
\t        size=s;
\t        color=c;
\t    }
\t
\t    // Copy constructor
\t    Shoe(const Shoe &sh) 
\t\t{
\t        size=sh.size;
\t        color=sh.color;
\t    }
\t
\t    // Function to display shoe details
\t    void display() 
\t\t{
\t        cout << "Size: " << size << endl;
\t        cout << "Color: " << color << endl;
\t    }
};

int main() 
{
    // Creating a Shoe object
    Shoe shoe1(42,"Black");
    cout << "Original Shoe:" << endl;
    shoe1.display();

    // Creating a copy using the copy constructor
    Shoe shoe2=shoe1;
    cout << "\\nCopied Shoe:" << endl;
    shoe2.display();

    return 0;
}`
      },
      {
        title: "Bottle Copy Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Bottle 
{
\tprivate:
\t    int volume;       // in milliliters
\t    string type;      // e.g., "Plastic", "Glass"
\t
\tpublic:
\t    // Parameterized constructor
\t    Bottle(int v,string t) 
\t\t{
\t        volume=v;
\t        type=t;
\t    }
\t
\t    // Copy constructor
\t    Bottle(const Bottle &b) 
\t\t{
\t        volume=b.volume;
\t        type=b.type;
\t    }
\t
\t    // Function to display bottle details
\t    void display() 
\t\t{
\t        cout << "Volume: " << volume << " ml" << endl;
\t        cout << "Type: " << type << endl;
\t    }
};

int main() 
{
    // Creating a Bottle object
    Bottle bottle1(500,"Glass");
    cout << "Original Bottle:" << endl;
    bottle1.display();

    // Creating a copy using the copy constructor
    Bottle bottle2=bottle1;
    cout << "\\nCopied Bottle:" << endl;
    bottle2.display();

    return 0;
}`
      }
    ],
    "friend-function": [
      {
        title: "Add Two Numbers Using Friend Function",
        code: `#include <iostream>
using namespace std;

class Number 
{
\tprivate:
\t    int num; // private data member

\tpublic:
\t    // Constructor to initialize number
\t    Number(int n=0) 
\t\t{
\t        num=n;
\t\t}

    // Friend function declaration
    friend int addNumbers(Number n1,Number n2);
};

// Friend function definition
int addNumbers(Number n1,Number n2) 
{
    // Access private members of both objects
    return n1.num+n2.num;
}

int main() 
{
    Number obj1(10); // first object
    Number obj2(20); // second object

    int sum=addNumbers(obj1, obj2); // call friend function
    cout << "Sum: " << sum << endl;

    return 0;
}`
      },
      {
        title: "Find Minimum Value Between Two Classes",
        code: `#include <iostream>
using namespace std;

class B; // Forward declaration of class B

class A 
{
\tprivate:
\t    int valueA;
\t
\tpublic:
\t    A(int v) 
\t\t{
\t        valueA=v;
\t    }
\t
\t    // Declare friend function
\t    friend void findMinimum(A objA,B objB);
};

class B 
{
\tprivate:
\t    int valueB;
\t
\tpublic:
\t    B(int v) 
\t\t{
\t        valueB=v;
\t    }
\t
\t    // Declare friend function
\t    friend void findMinimum(A objA,B objB);
};

// Friend function definition
void findMinimum(A objA,B objB) 
{
    if (objA.valueA<objB.valueB)
    {
    \tcout << "Minimum value is from Class A: " << objA.valueA << endl;
\t}
    else if (objA.valueA>objB.valueB)
    {
    \tcout << "Minimum value is from Class B: " << objB.valueB << endl;
\t}
    else
    {
    \tcout << "Both values are equal: " << objA.valueA << endl;
\t}
       
}

int main() 
{
    int aVal, bVal;
    cout << "Enter value for Class A: ";
    cin >> aVal;
    cout << "Enter value for Class B: ";
    cin >> bVal;

    A objA(aVal);
    B objB(bVal);

    findMinimum(objA,objB); // call friend function

    return 0;
}`
      },
      {
        title: "Calculate Square and Cube Using Friend Functions",
        code: `#include <iostream>
using namespace std;

class Number 
{
\tprivate:
\t    int num;  // private number
\t
\tpublic:
\t    // Constructor
\t    Number(int n) 
\t\t{
\t        num=n;
\t    }
\t
\t    // Friend functions declaration
\t    friend int square(Number n);
\t    friend int cube(Number n);
};

// Friend function to return square of private number
int square(Number n) 
{
    return n.num*n.num;
}

// Friend function to return cube of private number
int cube(Number n) 
{
    return n.num*n.num*n.num;
}

int main() 
{
    int value;
    cout << "Enter a number: ";
    cin >> value;

    Number obj(value);

    cout << "Square of " << value << ": " << square(obj) << endl;
    cout << "Cube of " << value << ": " << cube(obj) << endl;

    return 0;
}`
      },
      {
        title: "Swap Values Using Friend Function",
        code: `#include <iostream>
using namespace std;

class Sample 
{
\tprivate:
\t    int data;  // private data member
\t
\tpublic:
\t    // Constructor
\t    Sample(int d=0) 
\t\t{
\t        data=d;
\t    }
\t
\t    // Function to display the data
\t    void display() 
\t\t{
\t        cout << data << endl;
\t    }
\t
\t    // Declare friend function
\t    friend void swapValues(Sample &s1,Sample &s2);
};

// Friend function to swap private data members
void swapValues(Sample &s1, Sample &s2) 
{
    int temp=s1.data;
    s1.data=s2.data;
    s2.data=temp;
}

int main() 
{
    Sample obj1(10),obj2(20);

    cout << "Before swapping:" << endl;
    cout << "Object 1: ";
    obj1.display();
    cout << "Object 2: ";
    obj2.display();

    swapValues(obj1,obj2);  // call friend function

    cout << "\\nAfter swapping: " << endl;
    cout << "Object 1: ";
    obj1.display();
    cout << "Object 2: ";
    obj2.display();

    return 0;
}`
      },
      {
        title: "Multiply Two Numbers Using Friend Function",
        code: `#include <iostream>
using namespace std;

class Number 
{
\tprivate:
\t    int num;  // private member
\t
\tpublic:
\t    // Constructor
\t    Number(int n=0) 
\t\t{
\t        num=n;
\t    }
\t
\t    // Declare friend function
\t    friend int multiply(Number n1,Number n2);
};

// Friend function to multiply private members
int multiply(Number n1,Number n2) 
{
    return n1.num*n2.num;
}

int main() 
{
    int val1,val2;

    cout << "Enter value for first object: ";
    cin >> val1;
    cout << "Enter value for second object: ";
    cin >> val2;

    Number obj1(val1);
    Number obj2(val2);

    int result=multiply(obj1,obj2);  // call friend function

    cout << "Multiplication of private members: " << result << endl;

    return 0;
}`
      },
      {
        title: "Find Greater Number Using Friend Function",
        code: `#include <iostream>
using namespace std;

class Number 
{
\tprivate:
\t    int num;  // private integer
\t
\tpublic:
\t    // Constructor to initialize number
\t    Number(int n=0) 
\t\t{
\t        num=n;
\t    }
\t
\t    // Declare friend function
\t    friend void findGreater(Number n1,Number n2);
};

// Friend function to find and print greater private number
void findGreater(Number n1,Number n2) 
{
    if (n1.num>n2.num)
    {
    \tcout << "Greater number is from first object: " << n1.num << endl;
\t}
    else if (n2.num>n1.num)
    {
    \tcout << "Greater number is from second object: " << n2.num << endl;
\t}
    else
    {
    \t cout << "Both numbers are equal: " << n1.num << endl;
\t}
}

int main() 
{
    int val1,val2;

    cout << "Enter value for first object: ";
    cin >> val1;
    cout << "Enter value for second object: ";
    cin >> val2;

    Number obj1(val1);
    Number obj2(val2);

    findGreater(obj1,obj2); // call friend function

    return 0;
}`
      },
      {
        title: "Calculate Average Using Friend Function",
        code: `#include <iostream>
using namespace std;

class Number 
{
\tprivate:
\t    int num;   // private number
\t
\tpublic:
\t    // Constructor to initialize number
\t    Number(int n=0) 
\t\t{
\t        num=n;
\t    }
\t
\t    // Declare friend function
\t    friend float average(Number n1,Number n2,Number n3);
};

// Friend function to calculate average of three private numbers
float average(Number n1,Number n2,Number n3) 
{
    return (n1.num+n2.num+n3.num)/3.0f;  // average
}

int main() 
{
    int val1,val2,val3;

    cout << "Enter value for first object: ";
    cin >> val1;
    cout << "Enter value for second object: ";
    cin >> val2;
    cout << "Enter value for third object: ";
    cin >> val3;

    Number obj1(val1),obj2(val2),obj3(val3);

    float avg=average(obj1,obj2,obj3); // call friend function

    cout << "Average of the three numbers: " << avg << endl;

    return 0;
}`
      },
      {
        title: "Check Positive, Negative, or Zero Using Friend Function",
        code: `#include <iostream>
#include <string>
using namespace std;

class Number 
{
\tprivate:
\t    int num;  // private integer
\t
\tpublic:
\t    // Constructor
\t    Number(int n=0) 
\t\t{
\t        num=n;
\t    }
\t
\t    // Declare friend function
\t    friend void checkNumber(Number n);
};

// Friend function to check the number using ternary operator
void checkNumber(Number n) 
{
    // Nested ternary operator to classify number
    string result = (n.num > 0) ? "Positive" : (n.num < 0) ? "Negative" : "Zero";

    cout << "The number " << n.num<< " is " << result << "." << endl;
}

int main() 
{
    int val;

    cout << "Enter a number: ";
    cin >> val;

    Number obj(val);

    checkNumber(obj); // call friend function

    return 0;
}`
      },
      {
        title: "Calculate Factorial",
        code: `#include <iostream>
using namespace std;

class FactorialCalculator 
{
\tpublic:
\t    long long factorial(int n) 
\t\t{
\t        long long fact = 1;
\t        for (int i = 1; i <= n; i++) 
\t\t\t{
\t            fact *= i;
\t        }
\t        return fact;
\t    }
};

int main() 
{
    int num;
    FactorialCalculator calculator;

    cout << "Enter a number: ";
    cin >> num;
\t
\tcout << "Factorial of " << num << ": " << calculator.factorial(num) << endl;
    

    return 0;
}`
      },
      {
        title: "Check Prime Number",
        code: `#include <iostream>
using namespace std;

class PrimeChecker 
{
\tpublic:
\t    // Function to check if a number is prime
\t    bool isPrime(int n) 
\t\t{
\t        if (n <= 1) // 0, 1 and negatives are not prime
\t            return false;
\t
\t        // check divisibility from 2 to sqrt(n)
\t        for (int i = 2; i * i <= n; i++) 
\t\t\t{
\t            if (n % i == 0)
\t                return false;
\t        }
\t        return true;
\t    }
};

int main() 
{
    int num;
    PrimeChecker checker;

    cout << "Enter a number: ";
    cin >> num;

    if (checker.isPrime(num)) 
\t{
        cout << num << " is a prime number." << endl;
    } 
\telse 
\t{
        cout << num << " is not a prime number." << endl;
    }

    return 0;
}`
      }
    ],
    "inline-function": [
      {
        title: "Add and Multiply Using Inline Functions",
        code: `#include <iostream>
using namespace std;

// Inline function to add two integers
inline int add(int a, int b) 
{
    return a+b;
}

// Inline function to multiply two integers
inline int multiply(int a, int b) 
{
    return a*b;
}

int main()
{
    int num1=5, num2=10;

    cout << "Sum: " << add(num1, num2) <<endl;
\tcout << "Product: " << multiply(num1, num2) << endl;

    return 0;
}`
      },
      {
        title: "Find Maximum of Two Numbers",
        code: `#include <iostream>
using namespace std;

// Inline function to find the maximum of two numbers
inline int maxOfTwo(int a, int b) 
{
    return (a>b) ? a:b;
}

int main() 
{
    int num1, num2;
    cout << "Enter  Number 1: ";
    cin >> num1;
    cout << "Enter  Number 2: ";
    cin >> num2;

    int maximum=maxOfTwo(num1, num2);
    cout << "The greater number is: " << maximum <<endl;

    return 0;
}`
      },
      {
        title: "Calculate Square and Cube",
        code: `#include <iostream>
using namespace std;

// Inline function to calculate square
inline int square(int n) 
{
    return n*n;
}

// Inline function to calculate cube
inline int cube(int n) 
{
    return n*n*n;
}

int main() 
{
    int num;

    cout << "Enter a number: ";
    cin >> num;

    cout << "Square of " << num << " is " << square(num) << endl;
    cout << "Cube of " << num << " is " << cube(num) << endl;

    return 0;
}`
      },
      {
        title: "Calculate Area of Rectangle",
        code: `#include <iostream>
using namespace std;

// Inline function to calculate area of rectangle
inline float area(float length, float width) 
{
    return length*width;
}

int main() 
{
    float length, width;

    cout << "Enter length of rectangle: ";
    cin >> length;

    cout << "Enter width of rectangle: ";
    cin >> width;

    cout << "Area of rectangle: " << area(length, width) << endl;

    return 0;
}`
      },
      {
        title: "Convert Celsius to Fahrenheit",
        code: `#include <iostream>
using namespace std;

// Inline function to convert Celsius to Fahrenheit
inline float celsiusToFahrenheit(float celsius) 
{
    return (celsius*9.0/5.0)+32.0;
}

int main() 
{
    float celsius;

    cout << "Enter temperature in Celsius: ";
    cin >> celsius;

    cout << "Temperature in Fahrenheit: " << celsiusToFahrenheit(celsius) << "F" << endl;

    return 0;
}`
      },
      {
        title: "Check Even or Odd Number",
        code: `#include <iostream>
using namespace std;

// Inline function to check if a number is even
inline bool isEven(int number) {
    return (number%2==0);
}

int main() 
{
    int num;

    cout << "Enter a number: ";
    cin >> num;

    if (isEven(num)) 
\t{
        cout << num << " is Even." << endl;
    } 
\telse 
\t{
        cout << num << " is Odd." << endl;
    }

    return 0;
}`
      },
      {
        title: "Calculate Simple Interest",
        code: `#include <iostream>
using namespace std;

// Inline function to calculate Simple Interest
inline float simpleInterest(float principal, float rate, float time) 
{
    return (principal*rate*time) /100.0;
}

int main() 
{
    float principal, rate, time;

    cout << "Enter Principal amount: ";
    cin >> principal;

    cout << "Enter Rate of interest (%): ";
    cin >> rate;

    cout << "Enter Time (years): ";
    cin >> time;

    cout << "Simple Interest: " << simpleInterest(principal,rate,time) << endl;

    return 0;
}`
      },
      {
        title: "Check Leap Year",
        code: `#include <iostream>
using namespace std;

// Inline function to check if a year is leap year
inline bool isLeapYear(int year) 
{
    // Leap year if divisible by 400 or (divisible by 4 and not by 100)
    return ( (year%400==0) || (year%4==0 && year%100!=0));
}

int main() 
{
    int year;

    cout << "Enter a year: ";
    cin >> year;

    if (isLeapYear(year)) 
\t{
        cout << year << " is a Leap Year." << endl;
    } 
\telse 
\t{
        cout << year << " is NOT a Leap Year." << endl;
    }

    return 0;
}`
      },
      {
        title: "Reverse an Integer",
        code: `#include <iostream>
using namespace std;

// Inline function to reverse an integer
inline int reverseNumber(int num) 
{
    int reversed=0;
    while (num!=0) 
\t{
        int digit = num % 10;           // extract last digit
        reversed = reversed * 10 + digit; // add digit to reversed number
        num /= 10;                      // remove last digit
    }
    return reversed;
}

int main() 
{
    int number;

    cout << "Enter an integer: ";
    cin >> number;

    cout << "Reversed number: " << reverseNumber(number) << endl;

    return 0;
}`
      },
      {
        title: "Check Positive, Negative, or Zero",
        code: `#include <iostream>
#include <string>
using namespace std;

// Inline function to check if a number is positive, negative or zero
inline string checkNumber(int num) 
{
    // Using nested ternary operator
    return (num>0) ? "Positive":(num<0) ? "Negative":"Zero";
}

int main() 
{
    int number;

    cout << "Enter an integer: ";
    cin >> number;

    cout << "The number is " << checkNumber(number) << "." << endl;

    return 0;
}`
      }
    ],
    "member-function": [
      {
        title: "Friend Class Example",
        code: `#include <iostream>
using namespace std;

class A 
{
\tprivate:
\t\t int secret = 42;
\t\t friend class B;
};
class B 
{
\tpublic:
\t\t void showSecret(A obj) 
\t\t {
\t\t \tcout << "Secret from class A is: " << obj.secret << endl;
\t\t }
};

int main() 
{
\t A a;
\t B b;
\t b.showSecret(a);
\t return 0;
}`
      },
      {
        title: "Friend Function to Add Two Numbers from Different Classes",
        code: `#include <iostream>
using namespace std;


class ClassB;
class ClassA 
{
\t private:
\t int numA;
\t
\t void input()
\t {
        cout << "Enter number for Class A: ";
\t \tcin >> numA;
\t }
\t
\t friend int add(ClassA, ClassB);
};

class ClassB 
{
\t private:
\t \tint numB;
\t\tvoid input()
\t\t{
            cout << "Enter number for Class B: ";
\t\t\t cin>>numB;
\t\t}

 friend int add(ClassA,ClassB);
};


int add(ClassA objectA, ClassB objectB)
{
     objectA.input();
\t objectB.input();
\t return (objectA.numA + objectB.numB);
}


int main() 
{
\tClassA objectA;
\tClassB objectB;
\tcout << "Sum: " << add(objectA,objectB);
\treturn 0;
}`
      },
      {
        title: "Friend Member Function Example",
        code: `#include <iostream>
using namespace std;

class addition; // Forward declaration
class abc 
{
\tpublic:
\t void display(addition a); // Declaration of member function
};

class addition 
{
\tprivate:
\t int n1,n2;
\t void input() 
\t {
\t\t cout << "Enter numbers: ";
\t\t cin >> n1 >> n2;
\t }
\t friend void abc::display(addition a);
};
void abc::display(addition a) 
{
\t a.input();
\t cout << "Addition of two numbers is: " << a.n1+a.n2 <<endl;
}
int main() 
{
\t addition obj;
\t abc obj2;
\t obj2.display(obj); // Calls display which accesses addition's private members
\t return 0;
}`
      },
      {
        title: "Addition Using Friend Function and Public Input",
        code: `#include <iostream>
using namespace std;

class addition 
{
\tint n1,n2;
\tpublic:
\tvoid input()
\t{
\t\tcout << "Enter number 1 : ";
\t\tcin>>n1;
\t\tcout << "Enter number 2 : ";
\t\tcin >> n2;
\t}
\tfriend void display(addition a);
};
void display(addition a)
{
\tcout<<"Addition of two numbers is :"<<a.n1+a.n2;
}

int main()
{
\taddition a1;
\ta1.input();
\tdisplay(a1);
\treturn 0;
}`
      }
    ],
    "parameterised-constructor": [
      {
        title: "Phone Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Phone 
{
\tprivate:
\t    string model;
\t    float price;
\t
\tpublic:
\t    // Parameterized constructor
\t    Phone(string m,float p) 
\t\t{
\t        model=m;
\t        price=p;
\t    }
\t
\t    // Function to display phone details
\t    void display() 
\t\t{
\t        cout << "Phone Model: " << model << endl;
\t        cout << "Phone Price: $" << price << endl;
\t    }
};

int main() 
{
    // Creating an object of Phone class
    Phone myPhone("iPhone 15",99999.99);

    // Displaying the phone details
    myPhone.display();

    return 0;
}`
      },
      {
        title: "Book Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Book 
{
\tprivate:
\t    string title;
\t    int pages;
\t
\tpublic:
\t    // Parameterized constructor
\t    Book(string t,int p) 
\t\t{
\t        title=t;
\t        pages=p;
\t    }
\t
\t    // Function to display book details
\t    void display() 
\t\t{
\t        cout << "Book Title: " << title << endl;
\t        cout << "Number of Pages: " << pages << endl;
\t    }
};

int main() 
{
    // Creating an object of Book class
    Book myBook("The Alchemist", 208);

    // Displaying the book details
    myBook.display();

    return 0;
}`
      },
      {
        title: "Laptop Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Laptop 
{
\tprivate:
\t    string brand;
\t    int ram;
\t
\tpublic:
\t    // Parameterized constructor
\t    Laptop(string b,int r) 
\t\t{
\t        brand=b;
\t        ram=r;
\t    }
\t
\t    // Function to display laptop details
\t    void display() 
\t\t{
\t        cout << "Laptop Brand: " << brand << endl;
\t        cout << "RAM Size: " << ram << " GB" << endl;
\t    }
};

int main() 
{
    // Creating an object of Laptop class
    Laptop myLaptop("Dell",16);

    // Displaying the laptop details
    myLaptop.display();

    return 0;
}`
      },
      {
        title: "Flower Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Flower 
{
\tprivate:
\t    string color;
\t    float height;
\t
\tpublic:
\t    // Parameterized constructor
\t    Flower(string c,float h) 
\t\t{
\t        color=c;
\t        height=h;
\t    }
\t
\t    // Function to display flower details
\t    void display() 
\t\t{
\t        cout << "Flower Color: " << color << endl;
\t        cout << "Flower Height: " << height << " cm" << endl;
\t    }
};

int main() 
{
    // Creating an object of Flower class
    Flower myFlower("Red",25.5);

    // Displaying the flower details
    myFlower.display();

    return 0;
}`
      },
      {
        title: "Pen Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Pen 
{
\tprivate:
\t    int inkLevel;
\t    string color;
\t
\tpublic:
\t    // Parameterized constructor
\t    Pen(int ink,string c) 
\t\t{
\t        inkLevel=ink;
\t        color=c;
\t    }
\t
\t    // Function to display pen details
\t    void display() 
\t\t{
\t        cout << "Pen Ink Level: " << inkLevel << "%" << endl;
\t        cout << "Pen Color: " << color << endl;
\t    }
};

int main() 
{
    // Creating an object of Pen class
    Pen myPen(75,"Blue");

    // Displaying the pen details
    myPen.display();

    return 0;
}`
      },
      {
        title: "Car Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Car 
{
\tprivate:
\t    string brand;
\t    int year;
\t
\tpublic:
\t    // Parameterized constructor
\t    Car(string b,int y) 
\t\t{
\t        brand=b;
\t        year=y;
\t    }
\t
\t    // Function to display car details
\t    void display() 
\t\t{
\t        cout << "Car Brand: " << brand << endl;
\t        cout << "Car Year: " << year << endl;
\t    }
};

int main() 
{
    // Creating an object of Car class
    Car myCar("Toyota",2022);

    // Displaying the car details
    myCar.display();

    return 0;
}`
      },
      {
        title: "Chair Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Chair 
{
\tprivate:
\t    string material;
\t    float weight;
\t
\tpublic:
\t    // Parameterized constructor
\t    Chair(string m,float w) 
\t\t{
\t        material=m;
\t        weight=w;
\t    }
\t
\t    // Function to display chair details
\t    void display() 
\t\t{
\t        cout << "Chair Material: " << material << endl;
\t        cout << "Chair Weight: " << weight << " kg" << endl;
\t    }
};

int main() 
{
    // Creating an object of Chair class
    Chair myChair("Wood",7.5);

    // Displaying the chair details
    myChair.display();

    return 0;
}`
      },
      {
        title: "TV Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class TV 
{
\tprivate:
\t    string brand;
\t    int screenSize;
\t
\tpublic:
\t    // Parameterized constructor
\t    TV(string b,int s) 
\t\t{
\t        brand=b;
\t        screenSize=s;
\t    }
\t
\t    // Function to display TV details
\t    void display() 
\t\t{
\t        cout << "TV Brand: " << brand << endl;
\t        cout << "Screen Size: " << screenSize << " inches" << endl;
\t    }
};

int main() 
{
    // Creating an object of TV class
    TV myTV("Samsung",55);

    // Displaying the TV details
    myTV.display();

    return 0;
}`
      },
      {
        title: "Shoe Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Shoe 
{
\tprivate:
\t    int size;
\t    string color;
\t
\tpublic:
\t    // Parameterized constructor
\t    Shoe(int s,string c) 
\t\t{
\t        size=s;
\t        color=c;
\t    }
\t
\t    // Function to display shoe details
\t    void display() 
\t\t{
\t        cout << "Shoe Size: " << size << endl;
\t        cout << "Shoe Color: " << color << endl;
\t    }
};

int main() 
{
    // Creating an object of Shoe class
    Shoe myShoe(42, "Black");

    // Displaying the shoe details
    myShoe.display();

    return 0;
}`
      },
      {
        title: "Bottle Parameterised Constructor",
        code: `#include <iostream>
#include <string>
using namespace std;

class Bottle 
{
\tprivate:
\t    int volume;
\t    string type;
\t
\tpublic:
\t    // Parameterized constructor
\t    Bottle(int v,string t) 
\t\t{
\t        volume=v;
\t        type=t;
\t    }
\t
\t    // Function to display bottle details
\t    void display() 
\t\t{
\t        cout << "Bottle Volume: " << volume << " ml" << endl;
\t        cout << "Bottle Type: " << type << endl;
\t    }
};

int main() 
{
    // Creating an object of Bottle class
    Bottle myBottle(500,"Plastic");

    // Displaying the bottle details
    myBottle.display();

    return 0;
}`
      }
    ],
    "static": [
      {
        title: "Counter Using Static Data Member",
        code: `#include <iostream>
using namespace std;

class Counter 
{
\tprivate:
\t    static int count;  // Static data member to keep track of objects
\t
\tpublic:
\t    // Constructor
\t    Counter() 
\t\t{
\t        count++;  // Increment count whenever an object is created
\t    }
\t
\t    // Static function to display the count
\t    static void displayCount() 
\t\t{
\t        cout << "Number of Counter objects created: " << count << endl;
\t    }
};

// Initialize static data member
int Counter::count=0;

int main() 
{
    Counter c1;
    Counter c2;
    Counter c3;

    // Display the number of objects created
    Counter::displayCount();

    return 0;
}`
      },
      {
        title: "Bank Interest Rate Using Static",
        code: `#include <iostream>
using namespace std;

class BankAccount 
{
\tprivate:
\t    static float interestRate;  // Static data member for interest rate
\t
\tpublic:
\t    // Static function to set the interest rate
\t    static void setInterestRate(float rate) 
\t\t{
\t        interestRate=rate;
\t    }
\t
\t    // Static function to display the interest rate
\t    static void displayInterestRate() 
\t\t{
\t        cout << "Current interest rate: " << interestRate << "%" << endl;
\t    }
};

// Initialize static data member
float BankAccount::interestRate=0.0;

int main() 
{
    // Set interest rate using static function
    BankAccount::setInterestRate(5.5);

    // Display interest rate
    BankAccount::displayInterestRate();

    return 0;
}`
      },
      {
        title: "Auto Roll Number Assignment Using Static",
        code: `#include <iostream>
using namespace std;

class Student 
{
\tprivate:
\t    int rollNumber;                // Unique roll number for each student
\t    static int nextRollNumber;     // Static data member to keep track of next roll number
\t
\tpublic:
\t    // Constructor
\t    Student() 
\t\t{
\t        rollNumber=nextRollNumber;  // Assign current roll number
\t        nextRollNumber++;             // Increment for next student
\t    }
\t
\t    // Function to display roll number
\t    void displayRollNumber() 
\t\t{
\t        cout << "Student Roll Number: " << rollNumber << endl;
\t    }
};

// Initialize static member
int Student::nextRollNumber=1;  // Start roll numbers from 1

int main() 
{
    Student s1;
    Student s2;
    Student s3;

    s1.displayRollNumber();  // Output: 1
    s2.displayRollNumber();  // Output: 2
    s3.displayRollNumber();  // Output: 3

    return 0;
}`
      },
      {
        title: "Function Call Tracker Using Static",
        code: `#include <iostream>
using namespace std;

class FunctionTracker 
{
\tprivate:
\t    static int callCount;  // Static data member to keep track of calls
\t
\tpublic:
\t    // Static function that counts and displays the number of calls
\t    static void trackFunction() 
\t\t{
\t        callCount++;  // Increment count every time the function is called
\t        cout << "Function has been called " << callCount << " times." << endl;
\t    }
};

// Initialize static member
int FunctionTracker::callCount=0;

int main() 
{
    // Call the static function multiple times
    FunctionTracker::trackFunction();
    FunctionTracker::trackFunction();
    FunctionTracker::trackFunction();

    return 0;
}`
      },
      {
        title: "App Theme Management Using Static",
        code: `#include <iostream>
#include <string>
using namespace std;

class AppSettings 
{
\tprivate:
\t    static string theme;  // Static data member for theme
\t
\tpublic:
\t    // Static function to set the theme
\t    static void setTheme(const string& newTheme) 
\t\t{
\t        theme=newTheme;
\t    }
\t
\t    // Static function to display the current theme
\t    static void displayTheme() 
\t\t{
\t        cout << "Current App Theme: " << theme << endl;
\t    }
};

// Initialize static member
string AppSettings::theme="Light";  // Default theme

int main() 
{
    // Display default theme
    AppSettings::displayTheme();

    // Update theme using static function
    AppSettings::setTheme("Dark");

    // Display updated theme
    AppSettings::displayTheme();

    return 0;
}`
      },
      {
        title: "Track Maximum Value Using Static",
        code: `#include <iostream>
#include <climits> // For INT_MIN
using namespace std;

class MaxTracker 
{
\tprivate:
\t    static int maxValue;  // Static variable to store maximum value
\t
\tpublic:
\t    // Constructor that accepts a value and updates maxValue if needed
\t    MaxTracker(int value)
\t\t {
\t        if (value>maxValue) 
\t\t\t{
\t            maxValue=value;
\t        }
\t    }
\t
\t    // Static function to display the maximum value
\t    static void displayMax() 
\t\t{
\t        cout << "Maximum value so far: " << maxValue << endl;
\t    }
};

// Initialize static member
int MaxTracker::maxValue=INT_MIN;  // Start with smallest possible integer

int main() 
{
    MaxTracker m1(10);
    MaxTracker m2(25);
    MaxTracker m3(7);
    MaxTracker m4(30);

    // Display the maximum value
    MaxTracker::displayMax();

    return 0;
}`
      },
      {
        title: "Employee ID Generator Using Static",
        code: `#include <iostream>
using namespace std;

class Employee 
{
\tprivate:
\t    int employeeID;             // Unique employee ID for each employee
\t    static int nextID;          // Static counter for next ID
\t
\tpublic:
\t    // Constructor
\t    Employee() 
\t\t{
\t        employeeID=nextID;    // Assign current ID
\t        nextID++;               // Increment for next employee
\t    }
\t
\t    // Function to display this employee's ID
\t    void displayID() 
\t\t{
\t        cout << "Employee ID: " << employeeID << endl;
\t    }
\t
\t    // Static function to display the last assigned ID
\t    static void displayLastID() 
\t\t{
\t        if (nextID==1) 
\t\t\t{
\t            cout << "No employee ID assigned yet." << endl;
\t        }
\t\t\telse 
\t\t\t{
\t            cout << "Last assigned Employee ID: " << nextID-1 << endl;
\t        }
\t    }
};

// Initialize static member
int Employee::nextID=1;  // Start employee IDs from 1

int main() 
{
    Employee e1;
    Employee e2;
    Employee e3;

    // Display each employee's ID
    e1.displayID();  // 1
    e2.displayID();  // 2
    e3.displayID();  // 3

    // Display last assigned ID
    Employee::displayLastID();  // 3

    return 0;
}`
      },
      {
        title: "Product Discount Management Using Static",
        code: `#include <iostream>
#include <string>
using namespace std;

class Product 
{
\tprivate:
\t    string name;
\t    double price;
\t    static double discountRate;  // Static discount rate shared by all products
\t
\tpublic:
\t    // Constructor
\t    Product(string n,double p) 
\t\t{
\t        name=n;
\t        price=p;
\t    }
\t
\t    // Function to display product info with discount applied
\t    void displayProduct() 
\t\t{
\t        double discountedPrice=price-(price*discountRate/100);
\t        cout << "Product: " << name; 
\t        cout << ", Original Price: $" << price ;
\t        cout << ", Price after " << discountRate << "% discount: $"; 
\t        cout << discountedPrice << endl;
\t    }
\t
\t    // Static function to change the discount rate
\t    static void setDiscountRate(double rate) 
\t\t{
\t        discountRate=rate;
\t    }
};

// Initialize static member
double Product::discountRate=0.0;  // Default discount 0%

int main() 
{
    Product p1("Laptop",1200);
    Product p2("Phone",800);

    // Display products with default discount
    p1.displayProduct();
    p2.displayProduct();

    // Change discount rate using static function
    Product::setDiscountRate(10.0);  // 10% discount

    cout << "\\nAfter applying discount:\\n";
    p1.displayProduct();
    p2.displayProduct();

    return 0;
}`
      },
      {
        title: "Logger Level Management Using Static",
        code: `#include <iostream>
#include <string>
using namespace std;

class Logger 
{
\tprivate:
\t    static string logLevel;  // Static data member for log level
\t
\tpublic:
\t    // Static function to set the log level
\t    static void setLogLevel(const string &level) 
\t\t{
\t        logLevel=level;
\t    }
\t
\t    // Static function to display the current log level
\t    static void displayLogLevel() 
\t\t{
\t        cout << "Current Log Level: " << logLevel << endl;
\t    }
};

// Initialize static member
string Logger::logLevel="INFO";  // Default log level

int main() 
{
    // Display default log level
    Logger::displayLogLevel();

    // Change log level
    Logger::setLogLevel("DEBUG");

    // Display updated log level
    Logger::displayLogLevel();

    // Change log level again
    Logger::setLogLevel("ERROR");

    Logger::displayLogLevel();

    return 0;
}`
      },
      {
        title: "Rectangle Area with Constructor Overloading",
        code: `#include<iostream>
using namespace std;

class Rectangle 
{
\tprivate:
\t    double length;
\t    double width;
\t
\tpublic:
\t    // Default constructor (0x0)
\t    Rectangle() 
\t\t{
\t        length=0;
\t        width=0;
\t    }
\t
\t    // Constructor with one parameter (square)
\t    Rectangle(double side) 
\t\t{
\t        length=side;
\t        width=side;
\t    }
\t
\t    // Constructor with two parameters (length and width)
\t    Rectangle(double l,double w) 
\t\t{
\t        length=l;
\t        width=w;
\t    }
\t
\t    // Method to calculate area
\t    double area() 
\t\t{
\t        return length*width;
\t    }
};

int main() 
{
    // Using default constructor
    Rectangle rect1;
    cout << "Area of rect1 (default): " << rect1.area() << endl;

    // Using single parameter constructor (square)
    Rectangle rect2(5);
    cout << "Area of rect2 (square): " << rect2.area() << endl;

    // Using two parameter constructor (length x width)
    Rectangle rect3(4,6);
    cout << "Area of rect3 (rectangle): " << rect3.area() << endl;

    return 0;
}`
      }
    ],
    "basic-to-class": [
      {
        title: "Score Class",
        code: `#include <iostream>
using namespace std;

class Score 
{
    private:
        int points;

public:
    Score(int p) : points(p) {}

    void display() 
    {
        cout << "Score: " << points << endl;
    }
};

int main() 
{
    Score myScore(100);
    myScore.display();
    return 0;
}`
      },
      {
        title: "Percentage Class",
        code: `#include <iostream>
using namespace std;

class Percentage 
{
    private:
        double value;

    public:
        Percentage(double val) : value(val) {}

        void display() 
        {
            cout << "Percentage: " << value << "%" << endl;
        }
};

int main() 
{
    Percentage p(85.5);
    p.display();
    return 0;
}`
      },
      {
        title: "Level Class",
        code: `#include <iostream>
using namespace std;

class Level 
{
    private:
        char level;

    public:
        Level(char l) : level(l) {}

        void display() 
        {
            cout << "Level: " << level << endl;
        }
};

int main() 
{
    Level myLevel('A');
    myLevel.display();
    return 0;
}`
      },
      {
        title: "Radius Class",
        code: `#include <iostream>
using namespace std;

class Radius 
{
    private:
        float radius;

    public:
        Radius(float r) : radius(r) {}

        void display() 
        {
            cout << "Radius: " << radius << endl;
        }
};

int main() 
{
    Radius r(5.5);
    r.display();
    return 0;
}`
      },
      {
        title: "Age Class",
        code: `#include <iostream>
using namespace std;

class Age 
{
    private:
        unsigned int age;

    public:
        Age(unsigned int a) : age(a) {}

        void displayAge() 
        {
            cout << "Age: " << age << " years" << endl;
        }
};

int main() 
{
    Age myAge(25);
    myAge.displayAge();
    return 0;
}`
      }
    ],
    "class-to-basic": [
      {
        title: "Score to int",
        code: `#include <iostream>
using namespace std;

class Score 
{
    private:
        int points;

public:
    Score(int p) : points(p) {}

    operator int() const 
    {
        return points;
    }
};

int main() {
    Score score(85);
    int points = score; // Implicit conversion to int
    cout << "Score in points: " << points << endl;
    return 0;
}`
      },
      {
        title: "Percentage to double",
        code: `#include <iostream>
using namespace std;

class Percentage 
{
    private:
        double value;

    public:
        Percentage(double val) : value(val) {}

        operator double()  
        {
            return value / 100.0;
        }
};

int main() 
{
    Percentage p(75);
    double d = p;
    cout << "The double value is: " << d << endl;
    return 0;
}`
      },
      {
        title: "Level to char",
        code: `#include <iostream>
using namespace std;

class Level 
{
    private:
        int level;

    public:
        Level(int lvl) : level(lvl) {}

        operator char() 
        {
            return static_cast<char>(level);
        }
};

int main() 
{
    Level myLevel(65); // Example level
    char levelChar = myLevel; // Implicit conversion
    cout << "The character representation of the level is: " << levelChar << endl;
    return 0;
}`
      },
      {
        title: "Radius to float",
        code: `#include <iostream>
using namespace std;

class Radius 
{
    private:
        float radius;

    public:
        Radius(float r) : radius(r) {}

        operator float()  
        {
            return radius;
        }
};

int main() 
{
    Radius r(5.5);
    float radiusValue = r;
    cout << "The radius as a float is: " << radiusValue << endl;
    return 0;
}`
      },
      {
        title: "Age to unsigned int",
        code: `#include <iostream>
using namespace std;

class Age 
{
    private:
        int age;

    public:
        Age(int a) : age(a) {}

        operator unsigned int()  
        {
            return static_cast<unsigned int>(age);
        }
};

int main() 
{
    Age myAge(25);
    unsigned int ageValue = myAge;
    cout << "The age as unsigned int is: " << ageValue << endl;
    return 0;
}`
      }
    ],
    "class-to-class": [
      {
        title: "Celsius and Fahrenheit",
        code: `#include <iostream>
using namespace std;

class Celsius 
{
    private:
        float temperature;

    public:
        Celsius(float temp) : temperature(temp) {}

        float toFahrenheit() 
        {
            return (temperature*9.0/5.0)+32;
        }
};

class Fahrenheit 
{
    private:
        float temperature;

    public:
        Fahrenheit(float temp) : temperature(temp) {}

        float toCelsius() 
        {
            return (temperature-32)*5.0/9.0;
        }
};

int main() 
{
    Celsius c(25);
    cout << "25 Celsius is " << c.toFahrenheit() << " Fahrenheit." << endl;

    Fahrenheit f(77);
    cout << "77 Fahrenheit is " << f.toCelsius() << " Celsius." << endl;

    return 0;
}`
      },
      {
        title: "Inch and Centimeter",
        code: `#include <iostream>
using namespace std;

class Inch 
{
    private:
        double length;

    public:
        Inch(double len) : length(len) {}

        double toCentimeter() 
        {
            return length*2.54;
        }
};

class Centimeter 
{
    private:
        double length;

    public:
        Centimeter(double len) : length(len) {}

        double toInch() 
        {
            return length/2.54;
        }
};

int main() 
{
    Inch inch(10);
    Centimeter cm(25.4);

    cout << "10 inches is equal to " << inch.toCentimeter() << " centimeters." << endl;
    cout << "25.4 centimeters is equal to " << cm.toInch() << " inches." << endl;

    return 0;
}`
      },
      {
        title: "Kilogram and Pound",
        code: `#include <iostream>
using namespace std;

class Kilogram 
{
    private:
        double weight;

    public:
        Kilogram(double w) : weight(w) {}

        double toPound() 
        {
            return weight * 2.20462;
        }
};

class Pound 
{
    private:
        double weight;

    public:
        Pound(double w) : weight(w) {}

        double toKilogram() 
        {
            return weight / 2.20462;
        }
};

int main() 
{
    Kilogram kg(10);
    cout << "10 Kilograms is equal to " << kg.toPound() << " Pounds." << endl;

    Pound lb(22.0462);
    cout << "22.0462 Pounds is equal to " << lb.toKilogram() << " Kilograms." << endl;

    return 0;
}`
      },
      {
        title: "Seconds and Minutes",
        code: `#include <iostream>
using namespace std;

class Seconds 
{
    private:
        int seconds;

    public:
        Seconds(int s) : seconds(s) {}

        int toMinutes() 
        {
            return seconds/60;
        }

        int getSeconds() 
        {
            return seconds;
        }
};

class Minutes 
{
    private:
        int minutes;

    public:
        Minutes(int m) : minutes(m) {}

        int toSeconds() 
        {
            return minutes*60;
        }

        int getMinutes() 
        {
            return minutes;
        }
};

int main() 
{
    Seconds sec(120);
    cout << sec.getSeconds() << " seconds is " << sec.toMinutes() << " minutes." << endl;

    Minutes min(2);
    cout << min.getMinutes() << " minutes is " << min.toSeconds() << " seconds." << endl;

    return 0;
}`
      },
      {
        title: "RGB and HSV Color",
        code: `#include <iostream>
#include <algorithm> // For std::max and std::min
using namespace std;

class RGB 
{
    public:
        int r,g,b;

        RGB(int red, int green, int blue) : r(red), g(green), b(blue) {}
};

class HSV 
{
    public:
        float h,s,v;

        HSV(float hue, float saturation, float value) : h(hue), s(saturation), v(value) {}
};

class ColorConverter 
{
    public:
        static HSV rgbToHsv(const RGB& rgb) 
        {
            float r=rgb.r/255.0;
            float g=rgb.g/255.0;
            float b=rgb.b/255.0;
            float max=std::max(r,std::max(g,b));
            float min=std::min(r,std::min(g,b));
            float h,s,v=max;

            float d=max-min;
            s=(max==0) ? 0 : d/max;

            if(max==min) 
            {
                h=0; // achromatic
            } 
            else 
            {
                if(max==r) 
                {
                    h=(g-b)/d+(g<b ? 6:0);
                } 
                else if(max==g) 
                {
                    h=(b-r)/d+2;
                } 
                else 
                {
                    h=(r-g)/d+4;
                }
                h/=6;
            }

            return HSV(h*360,s*100,v*100);
        }

        static RGB hsvToRgb(const HSV& hsv) {
            float h=hsv.h/360;
            float s=hsv.s/100;
            float v=hsv.v/100;

            int r,g,b;
            int i=static_cast<int>(h*6);
            float f=h*6-i;
            float p=v*(1-s);
            float q=v*(1-f*s);
            float t=v*(1-(1-f)*s);
            i=i%6;

            if(i==0) 
            {
                r=v*255; 
                g=t*255; 
                b=p*255;
            } 
            else if(i==1) 
            {
                r=q*255; 
                g=v*255; 
                b=p*255;
            } 
            else if(i==2) 
            {
                r=p*255; 
                g=v*255; 
                b=t*255;
            } 
            else if(i==3) 
            {
                r=p*255; 
                g=q*255; 
                b=v*255;
            } 
            else if(i==4) 
            {
                r=t*255; 
                g=p*255; 
                b=v*255;
            } 
            else 
            {
                r=v*255; g=p*255; b=q*255;
            }

            return RGB(r,g,b);
        }
};

int main() 
{
    RGB rgbColor(255, 0, 0);
    HSV hsvColor = ColorConverter::rgbToHsv(rgbColor);
    cout << "HSV: " << hsvColor.h << ", " << hsvColor.s << ", " << hsvColor.v << endl;

    RGB convertedBack = ColorConverter::hsvToRgb(hsvColor);
    cout << "RGB: " << convertedBack.r << ", " << convertedBack.g << ", " << convertedBack.b << endl;

    return 0;
}`
      }
    ],
    "explicit-implicit": [
      {
        title: "Implicit int to float",
        code: `#include <iostream>
#include <typeinfo> 
using namespace std;

class Converter 
{
public:
    int intValue;
    float floatValue;

    void display() 
    {
        floatValue = intValue; // Implicit conversion
        cout << "Integer Value: " << intValue << endl;
        cout << "Int Converted Into Float (Type): " << typeid(floatValue).name() << endl;
        cout << "Float Value: " << floatValue << endl;
    }
};

int main() 
{
    Converter converter;
    converter.intValue = 10;
    converter.display();
    return 0;
}`
      },
      {
        title: "Explicit float to int (static_cast)",
        code: `#include <iostream>
using namespace std;

class Converter 
{
    public:
        void convertAndPrint(float value) 
        {
            int intValue=static_cast<int>(value);
            cout << "Float value: " << value << endl;
            cout << "Converted integer value: " << intValue << endl;
        }
};

int main() 
{
    Converter converter;
    float myFloat = 9.75;
    converter.convertAndPrint(myFloat);
    return 0;
}`
      },
      {
        title: "Explicit double to int (C-style cast)",
        code: `#include <iostream>
using namespace std;

class Converter 
{
    public:
        double value;

        Converter(double val) : value(val) {}

        int toInt() 
        {
            return (int)value; // C-style cast
        }
};

int main() 
{
    Converter converter(9.99);
    int intValue = converter.toInt();

    cout << "Double value: " << converter.value << endl;
    cout << "Converted integer value: " << intValue << endl;

    return 0;
}`
      },
      {
        title: "Implicit int to Distance (Constructor)",
        code: `#include <iostream>
using namespace std;

class Distance 
{
    public:
        int meters;

        Distance(int m) : meters(m) {}
};

int main() 
{
    Distance d=100; // Implicit conversion
    cout << "Distance in meters: " << d.meters << endl;
    return 0;
}`
      },
      {
        title: "Implicit char to int",
        code: `#include <iostream>
using namespace std;

class CharToIntConverter 
{
    public:
        char character;
        int asciiValue;

        void setCharacter(char ch) 
        {
            character=ch;
            asciiValue=character; // Implicit conversion
        }

        void displayValues() 
        {
            cout << "Character: " << character << endl;
            cout << "ASCII Value: " << asciiValue << endl;
        }
};

int main() 
{
    CharToIntConverter converter;
    converter.setCharacter('A');
    converter.displayValues();
    return 0;
}`
      },
      {
        title: "Explicit float to int (C-style cast)",
        code: `#include <iostream>
using namespace std;

class Converter 
{
    public:
        void convertAndDisplay(float decimalValue) 
        {
            int intValue=(int)decimalValue;
            cout << "Float value: " << decimalValue << endl;
            cout << "Converted int value: " << intValue << endl;
        }
};

int main() 
{
    Converter converter;
    float myFloat = 5.75;
    converter.convertAndDisplay(myFloat);
    return 0;
}`
      }
    ],
    "operator-overloading": [
      {
        title: "Point Addition (+)",
        code: `#include <iostream>
using namespace std;

class Point {
public:
   int x, y;

   Point(int a = 0, int b = 0) {
      x = a;
      y = b;
   }

   Point operator+(Point p) {
      Point temp;
      temp.x = x + p.x;
      temp.y = y + p.y;
      return temp;
   }

   void display() {
      cout << "(" << x << "," << y << ")";
   }
};

int main() {
   Point p1(3, 4), p2(5, 6), p3;
   p3 = p1 + p2; // adding two points
   cout << "Point 1 = "; p1.display();
   cout << "\\nPoint 2 = "; p2.display();
   cout << "\\nPoint 1 + Point 2 = "; p3.display();
   return 0;
}`
      },
      {
        title: "Student Comparison (==)",
        code: `#include <iostream>
#include <string>
using namespace std;

class Student 
{
    private:
        int id;
        string name;
    
    public:
        // Constructor: take name by value or const reference
        Student(int id, const string &name) : id(id), name(name) {}
    
        // Overload == operator to compare students by id
        bool operator==(Student& other)  
        {
            return id == other.id;
        }
    
        // Display student info
        void display() 
        {
            cout << "ID: " << id << ", Name: " << name << endl;
        }
};

int main() 
{
    Student s1(101, "Alice");
    Student s2(102, "Bob");
    Student s3(101, "Charlie");

    s1.display();
    s2.display();
    s3.display();

    cout << "\\nComparing s1 and s2: " << (s1 == s2 ? "Same ID" : "Different ID") << endl;
    cout << "Comparing s1 and s3: " << (s1 == s3 ? "Same ID" : "Different ID") << endl;

    return 0;
}`
      },
      {
        title: "Book Concatenation (<<)",
        code: `#include<iostream>
#include<string>
using namespace std;

class Book
{
    private:
        string title;
        string author;
    public:

        Book(string a,string b)
        {
            title=a;
            author=b;
        }

        Book operator<<(Book &b)
        {
            return Book(title+" & "+b.title,author+" & "+b.author);
        }
        
        void display()
        {
            cout<<"Title: "<<title<<endl;
            cout<<"Author: "<<author<<endl;
        }
};

int main()
{
    Book b1("The Great Gatsby","F. Scott Fitzgerald");
    Book b2("The Secreat Garden","Frances Hodgson Burnett");
    Book b3=b1<<b2;
    
    cout << "Book 1 details:\\n";
    b1.display();
    cout << "\\nBook 2 details:\\n";
    b2.display();
    cout << "\\nCombined Book details:\\n";
    b3.display();
    return 0;
}`
      },
      {
        title: "Box Subtraction (-)",
        code: `#include <iostream>
using namespace std;

class Box 
{
    public:
        float length;
        float width;
        float height;

        Box(float l,float w,float h) : length(l),width(w),height(h) {}

        Box operator-(Box &b) 
        {
            return Box(length-b.length,width-b.width,height-b.height);
        }

        void display() 
        {
            cout << "Length: " << length << ", Width: " << width << ", Height: " << height << endl;
        }
};

int main() 
{
    Box box1(10.0, 5.0, 3.0);
    Box box2(4.0, 2.0, 1.0);
    Box box3=box1-box2;
    cout << "\\nBox 1 details:\\n";
    box1.display();
    cout << "\\nBox 2 details:\\n";
    box2.display();
    cout << "\\nBox 3 (Box1-Box2) details:\\n";
    box3.display();

    return 0;
}`
      },
      {
        title: "Prefix Increment (++)",
        code: `#include <iostream>
using namespace std;

class Counter 
{
    private:
        int count;

    public:
        Counter() : count(0) {}

        // Overloading the prefix ++ operator
        Counter operator++() 
        {
            ++count;
            return *this;
        }

        int display()  
        {
            return count;
        }
};

int main() 
{
    Counter c;
    ++c;
    cout << "Count: " << c.display() << endl;
    return 0;
}`
      },
      {
        title: "Matrix Multiplication (*)",
        code: `#include <iostream>
using namespace std;

class Matrix 
{
    private:
        int a;
        int b;

    public:
        Matrix(int x,int y) : a(x),b(y) {}

        Matrix operator*(const Matrix &m) 
        {
            return Matrix(a*m.a,b*m.b);
        }

        void display() 
        {
            cout << "Matrix: [" << a << "," << b << "]" << endl;
        }
};

int main() {
    Matrix m1(2,3);
    Matrix m2(4,5);
    Matrix result = m1 * m2;

    cout << "\\nMatrix 1 details:\\n";
    m1.display();
    cout << "\\nMatrix 2 details:\\n";
    m2.display();
    cout << "\\nMatrix 3 (Matrix1 * Matrix2) details:\\n";
    result.display();

    return 0;
}`
      },
      {
        title: "Employee Comparison (!=)",
        code: `#include <iostream>
#include <string>
using namespace std;

class Employee 
{
    private:
        int id;
        double salary;

    public:
        Employee(int empId,double empSalary) : id(empId),salary(empSalary) {}

        bool operator!=(Employee &other) 
        {
            return id!=other.id;
        }

        void display()  
        {
            cout << "Employee ID: " << id << endl;
            cout << "Employee Salary: " << salary << endl;
        }
};

int main() {
    Employee emp1(101,50000);
    Employee emp2(102,60000);

    if (emp1!=emp2) 
    {
        cout << "emp1 and emp2 have different IDs." << endl;
    }
    else 
    {
        cout << "emp1 and emp2 have the same ID." << endl;
    }
    return 0;
}`
      },
      {
        title: "Array Subscript ([])",
        code: `#include <iostream>
#include <stdexcept>
using namespace std;

class Array 
{
    private:
        int *arr;
        int size;

    public:
        Array(int s) : size(s) 
        {
            arr=new int[size];
        }

        ~Array() 
        {
            delete[] arr;
        }

        int& operator[](int index)  
        {
            if (index<0 || index>=size) 
            {
                throw out_of_range("Index out of bounds");
            }
            return arr[index];
        }

        int display()
        {
            return size;
        }
};

int main() 
{
    Array myArray(5);
    int i;

    for(i=0;i<myArray.display();++i) 
    {
        myArray[i]=i*10;
    }

    for (i=0;i<myArray.display();++i) 
    {
        cout << myArray[i] << " ";
    }
    return 0;
}`
      },
      {
        title: "Function Call Operator (())",
        code: `#include <iostream>
using namespace std;

class Multiplier 
{
    public:
        int operator()(int a, int b) {
            return a*b;
        }
};

int main() 
{
    Multiplier multiply;
    int result = multiply(5, 3);
    cout << "The result of multiplication is: " << result << endl;
    return 0;
}`
      },
      {
        title: "Accumulator (+=)",
        code: `#include <iostream>
using namespace std;

class Accumulator 
{
    private:
        int sum;

    public:
        Accumulator() : sum(0) {}

        Accumulator operator+=(int value) 
        {
            sum+=value;
            return *this;
        }

        int display()
        {
            return sum;
        }
};

int main() 
{
    Accumulator acc;
    acc+=5;
    acc+=10;
    cout << "Total Sum: " << acc.display() << endl;
    return 0;
}`
      },
      {
        title: "Postfix Decrement (--)",
        code: `#include <iostream>
using namespace std;

class Timer 
{
    private:
        int count;

    public:
        Timer(int c) : count(c) {}

        // Postfix -- operator overload
        Timer operator--(int) 
        {
            Timer temp=*this;
            count--;
            return temp;
        }

        void display()
        {
            cout << "Count: " << count << endl;
        }
};

int main() 
{
    Timer t(5);
    t.display();
    t--;
    t.display();
    return 0;
}`
      },
      {
        title: "Box Comparison (<)",
        code: `#include <iostream>
using namespace std;

class Box 
{
    private:
        double length;
        double width;
        double height;

    public:
        Box(double l, double w, double h) : length(l), width(w), height(h) {}

        double volume() const
        {
            return length*width*height;
        }

        bool operator<(const Box& other) 
        {
            return this->volume()<other.volume();
        }
};

int main() 
{
    Box box1(3.0,4.0,5.0);
    Box box2(2.0,6.0,7.0);

    if (box1 < box2) 
    {
        cout << "Box 1 is smaller than Box 2." << endl;
    }
    else 
    {
        cout << "Box 1 is not smaller than Box 2." << endl;
    }

    return 0;
}`
      },
      {
        title: "Stream Extraction (>>)",
        code: `#include <iostream>
#include <string>
using namespace std;

class Person 
{
    private:
        string name;
        int age;

    public:
        friend istream& operator>>(istream &input,Person &p) 
        {
            cout << "Enter name: ";
            input >> p.name;
            cout << "Enter age: ";
            input >> p.age;
            return input;
        }

        void display() 
        {
            cout << "Name: " << name << ", Age: " << age << endl;
        }
};

int main() 
{
    Person p;
    cin >> p;
    p.display();
    return 0;
}`
      },
      {
        title: "String Concatenation (+)",
        code: `#include <iostream>
#include <cstring>
using namespace std;

class String 
{
    private:
        char *str;
    public:
        String(const char *s) 
        {
            str=new char[strlen(s)+1];
            strcpy(str,s);
        }

        ~String() 
        {
            delete[] str;
        }

        String operator+(String &other) 
        {
            char* newStr=new char[strlen(str)+strlen(other.str)+1];
            strcpy(newStr,str);
            strcat(newStr,other.str);
            return String(newStr);
        }

        void display() const 
        {
            cout << str;
        }
};

int main() 
{
    String str1("Hello, ");
    String str2("World!");
    String str3=str1+str2;

    
    cout << "\\nFirst String:\\n ";
    str1.display();
    cout << "\\nSecond String:\\n ";
    str2.display();
    cout << "\\nConcatenated String:\\n ";
    str3.display();
    return 0;
}`
      },
      {
        title: "Time Subtraction (-)",
        code: `#include <iostream>
using namespace std;

class Time 
{
    private:
        int hours;
        int minutes;

    public:
        Time(int h,int m) : hours(h), minutes(m) {}

        Time operator-(const Time& t) 
        {
            int totalMinutes1=hours*60+minutes;
            int totalMinutes2=t.hours*60+t.minutes;
            int diffMinutes=totalMinutes1-totalMinutes2;

            int h=diffMinutes/60;
            int m=diffMinutes%60;

            return Time(h,m);
        }

        void display() 
        {
            cout << hours << " hours and " << minutes << " minutes" << endl;
        }
};

int main() 
{
    Time t1(5,30);
    Time t2(2,45);
    Time t3=t1-t2;
    
    cout << "Difference: ";
    t3.display();

    return 0;
}`
      }
    ],
    "unary-operator": [
      {
        title: "Unary Minus (-)",
        code: `#include <iostream>
using namespace std;

class Number 
{
    private:
        int value;

    public:
        Number(int v) : value(v) {}

        // Overloading unary - operator
        Number operator-() 
        {
            return Number(-value);
        }

        void display() 
        {
            cout << "Value: " << value << endl;
        }
};

int main() 
{
    Number num(10);
    num.display();

    Number negNum=-num;
    negNum.display();

    return 0;
}`
      },
      {
        title: "Prefix Increment (++)",
        code: `#include <iostream>
using namespace std;

class Counter 
{
    private:
        int count;

    public:
        Counter() : count(0) {}

        // Overloading prefix ++ operator
        Counter& operator++() 
        {
            ++count;
            return *this;
        }

        void display()  
        {
            cout << "Count: " << count << endl;
        }
};

int main() 
{
    Counter c;
    ++c;
    c.display();
    ++c;
    c.display();
    return 0;
}`
      },
      {
        title: "Prefix Decrement (--)",
        code: `#include <iostream>
using namespace std;

class Counter 
{
    private:
        int count;

    public:
        Counter() : count(0) {}

        // Overloading prefix -- operator
        Counter& operator--() 
        {
            --count;
            return *this;
        }

        void display()  
        {
            cout << "Count: " << count << endl;
        }
};

int main() 
{
    Counter c;
    c.display(); // Count: 0
    --c;
    c.display(); // Count: -1
    return 0;
}`
      },
      {
        title: "Logical NOT (!)",
        code: `#include <iostream>
using namespace std;

class Switch 
{
    private:
        bool state;

    public:
        Switch() : state(false) {}

        // Overloading the unary ! operator
        Switch operator!() 
        {
            state=!state;
            return *this;
        }

        void displayState()  
        {
            cout << "Switch is " << (state ? "ON" : "OFF") << endl;
        }
};

int main() 
{
    Switch mySwitch;
    mySwitch.displayState();

    !mySwitch; // Toggle the switch
    mySwitch.displayState();

    !mySwitch; // Toggle again
    mySwitch.displayState();

    return 0;
}`
      },
      {
        title: "Bitwise NOT (~)",
        code: `#include <iostream>
using namespace std;

class Bitwise 
{
    private:
        int value;

    public:
        Bitwise(int v) : value(v) {}

        // Overloading the unary ~ operator
        Bitwise operator~() 
        {
            return Bitwise(~value);
        }

        void display() 
        {
            cout << "Value: " << value << endl;
        }
};

int main() 
{
    Bitwise b(5);
    b.display();

    Bitwise result=~b;
    result.display();

    return 0;
}`
      }
    ],
    "binary-operator": [
      {
        title: "Point Subtraction (-)",
        code: `#include <iostream>
using namespace std;

class Point 
{
    public:
        int x,y;

        Point(int xCoord, int yCoord) : x(xCoord), y(yCoord) {}

        Point operator-(const Point &other) 
        {
            return Point(this->x-other.x,this->y-other.y);
        }
};

int main() 
{
    Point p1(10,20);
    Point p2(5,15);
    Point result=p1-p2;
    cout << "Resulting Point: (" << result.x << "," << result.y << ")" << endl;
    return 0;
}`
      },
      {
        title: "Fraction Division (/)",
        code: `#include <iostream>
#include <stdexcept>  
using namespace std;

class Fraction 
{
    private:
        int numerator;
        int denominator;

    public:
        Fraction(int num, int denom) : numerator(num), denominator(denom) 
        {
            if (denom == 0) 
            {
                throw invalid_argument("Denominator cannot be zero.");
            }
        }

        Fraction operator/(const Fraction &other) 
        {
            if (other.numerator == 0) 
            {
                throw invalid_argument("Cannot divide by zero fraction.");
            }
            return Fraction(numerator * other.denominator, denominator * other.numerator);
        }

        void display()  
        {
            cout << numerator << "/" << denominator << endl;
        }
};

int main() 
{
    try 
    {
        Fraction frac1(1, 2);
        Fraction frac2(3, 4);
        Fraction result = frac1 / frac2;
        result.display();
    }
    catch (const invalid_argument &e) 
    {
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}`
      },
      {
        title: "Date Comparison (<)",
        code: `#include <iostream>
using namespace std;

class Date 
{
    private:
        int day;
        int month;
        int year;

    public:
        Date(int d, int m, int y) : day(d), month(m), year(y) {}

        bool operator<(Date &other)  
        {
            if (year!=other.year) 
            {
                return year<other.year;
            }
            else if (month!=other.month) 
            {
                return month<other.month;
            }
            else if(day!=other.day) 
            {   
                return day<other.day;
            }
            return false;
        }

        void display()  
        {
            cout << day << "/" << month << "/" << year << endl;
        }
};

int main() 
{
    Date date1(15,8,2021);
    Date date2(10,5,2022);

    if (date1<date2) 
    {
        cout << "Date1 is earlier than Date2" << endl;
    } 
    else 
    {
        cout << "Date1 is not earlier than Date2" << endl;
    }

    return 0;
}`
      },
      {
        title: "Stream Insertion (<<)",
        code: `#include <iostream>
using namespace std;

class Complex 
{
    private:
        double real;
        double imag;

    public:
        Complex(double r = 0, double i = 0) : real(r), imag(i) {}

        friend ostream& operator<<(ostream& out, const Complex& c) 
        {
            out<<c.real<<(c.imag>=0 ? "+" : "") << c.imag << "i";
            return out;
        }
};

int main() 
{
    Complex c1(3,4);
    Complex c2(5,-6);
    cout << "Complex Number 1: " << c1 << endl;
    cout << "Complex Number 2: " << c2 << endl;
    return 0;
}`
      },
      {
        title: "Logical AND (&&)",
        code: `#include <iostream>
using namespace std;

class BoolWrapper 
{
    private:
        bool value;

    public:
        BoolWrapper(bool val) : value(val) {}

        bool display() 
        {
            return value;
        }

        BoolWrapper operator&&(const BoolWrapper& other) 
        {
            return BoolWrapper(this->value && other.value);
        }
};

int main() 
{
    BoolWrapper a(true);
    BoolWrapper b(false);
    BoolWrapper result=a&&b;

    cout << "Result of a && b: " << result.display() << endl;

    return 0;
}`
      }
    ]
  };

  const data = sectionData[section || ""];
  const programs = programsData[section || ""] || [];

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
          <p className="text-center text-muted-foreground mb-12">C++ {unit?.toUpperCase()} - {data.count} programs</p>

          <div className="space-y-4">
            {programs.length > 0 ? (
              programs.map((program, i) => (
                <CollapsibleSection key={i} title={`Program ${i + 1}: ${program.title}`} count={1}>
                  <ProgramCard number={i + 1} title={program.title} code={program.code} fileExtension="cpp" />
                </CollapsibleSection>
              ))
            ) : (
              Array.from({ length: data.count }, (_, i) => (
                <CollapsibleSection key={i} title={`Program ${i + 1}`} count={1}>
                  <ProgramCard number={i + 1} />
                </CollapsibleSection>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CppSection;
