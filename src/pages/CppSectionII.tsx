import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import CollapsibleSection from "@/components/CollapsibleSection";
import ProgramCard from "@/components/ProgramCard";
import BackButton from "@/components/BackButton";

const CppSectionII = () => {
    const { section } = useParams();

    const sectionData: Record<string, { name: string; count: number }> = {
        "singlelevel": { name: "Single Level Inheritance", count: 5 },
        "multilevel": { name: "Multilevel Inheritance", count: 5 },
        "multiple": { name: "Multiple Inheritance", count: 5 },
        "hierarchical": { name: "Hierarchical Inheritance", count: 5 },
        "hybrid": { name: "Hybrid Inheritance", count: 5 },
        "constructor-derived": { name: "Constructor in Derived Class", count: 5 },
        "nesting-class": { name: "Nesting of Class", count: 5 },
        "abstract-class": { name: "Abstract Class", count: 5 },
        "virtual-base-class": { name: "Virtual Base Class", count: 5 },
    };

    const programsData: Record<string, Array<{ title: string; code: string }>> = {
        "singlelevel": [
            {
                title: "Person and Student (Single Level Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Person
{
	public:
		string name;
		int age;
		
		void pinput()
		{
			cout << "Enter Name: ";
			cin >> name;
			cout << "Enter Age: ";
			cin >> age;
		}
		void poutput()
		{
			cout << "Name is : " << name << endl;
			cout << "Age is : " << age << endl;
		}
};

class Student : public Person
{
	public:
		int rno,m1,m2;
		
		void sinput()
		{
			cout << "Enter Student Roll no : ";
			cin >> rno;
			cout << "Enter Student Mark of Subject 1 : ";
			cin >> m1;
			cout << "Enter Student Mark of subject 2 : ";
			cin >> m2;
		}
		void soutput()
		{
			cout << "Roll No is : " << rno << endl;
			cout << "mark 1 is : " << m1 << endl;
			cout << "mark 2 is : " << m2 << endl;
		}
};

int main()
{
	Student s;
	s.pinput();
	s.sinput();
	s.poutput();
	s.soutput();
	return 0;
}`
            },
            {
                title: "Shape and Rectangle (Single Level Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Shape
{
	public:
		string color;
		void sinput()
		{
			cout << "Enter Color : ";
			cin >> color;
		}
		void soutput()
		{
			cout << "Shape Color is : " << color << endl;
		}
};

class Rectangle : public Shape
{
	public:
		float l,w,a;
		void rinput()
		{
			cout << "Enter Width of Rectangle : ";
			cin >> w;
			cout << "Enter Length of Rectangle : ";
			cin >> l;
		}
		void rmethod()
		{
			a=l*w;
		}
		void routput()
		{
			cout << "Length is : " << l << endl;
			cout << "Width is : " << w << endl;
			cout << "Area Of Rectangle is : " << a << " Square Units" << endl;
		}
};

int main()
{
	Rectangle r;
	r.sinput();
	r.rinput();
	r.rmethod();
	r.soutput();
	r.routput();
	return 0;
}`
            },
            {
                title: "Employee and Manager (Single Level Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Employee
{
	public:
		int empid,salary;
		string empname;
		
		void einput()
		{
			cout << "Enter Employee ID : ";
			cin >> empid;
			cout << "Enter Employee Name : ";
			cin >> empname;
			cout << "Enter Employee Salary (in INR) : ";
			cin >> salary;
		}
		
		void eoutput()
		{
			cout << "Employee ID is : " << empid << endl;
			cout << "Employee Name is : " << empname << endl;
			cout << "Employee Salary (in INR) is : " << salary << endl;
		}
};

class Manager : public Employee
{
	public:
		string department;
		int bonus_salary;
		void minput()
		{
			cout << "Enter Department : ";
			cin >> department;
			cout << "Enter Bonus Salary : ";
			cin >> bonus_salary;
		}
		void moutput()
		{
			cout << "Department is : " << department << endl;
			cout << "Bonus Salary is : " << bonus_salary << endl;
			cout << "Total Salary is : " << bonus_salary+salary << endl;
		}
};

int main()
{
	Manager m;
	m.einput();
	m.minput();
	m.eoutput();
	m.moutput();
	return 0;
}`
            },
            {
                title: "Vehicle and Car (Single Level Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Vehical
{
	public:
		string brand,model;
		void vinput()
		{
			cout << "Enter Brand : ";
			cin >> brand;
			cout << "Enter Model : ";
			cin >> model;
		}
		
		void voutput()
		{
			cout << "Brand is : " << brand << endl;
			cout << "Model is : " << model << endl;
		}
};

class Car : public Vehical
{
	public:
		int s;
		float m;
		void cinput()
		{
			cout << "Enter Seat no : ";
			cin >> s;
			cout << "Enter Mileage : ";
			cin >> m;
		}
		void coutput()
		{
			cout << "Seat Number is : " << s << endl;
			cout << "Mileage is : " << m << endl;
		}
};

int main()
{
	Car c;
	c.vinput();
	c.cinput();
	c.voutput();
	c.coutput();
	return 0;
}`
            },
            {
                title: "Accounts and Savings Account (Single Level Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Accounts
{
	public:
		int accnmbr,balance;
		void ainput()
		{
			cout << "Enter Account Number : ";
			cin >> accnmbr;
			cout << "Enter Account Balance : ";
			cin >> balance;
		}
		void aoutput()
		{
			cout << "Account Number is : " << accnmbr << endl;
			cout << "Account Balance is : " << balance << endl;
		}
};

class Savings_accounts : public Accounts
{
	public:
		float intrate;
		void sainput()
		{
			cout << "Enter Intrest Rate : ";
			cin >> intrate;
		}
		void saoutput()
		{
			cout << "Intreset Rate is : " << intrate << endl;
			cout << "Yearly Intrest is : " << balance*intrate << endl;
		}
};

int main()
{
	Savings_accounts sa;
	sa.ainput();
	sa.sainput();
	sa.aoutput();
	sa.saoutput();
	return 0;
}`
            }
        ],
        "multilevel": [
            {
                title: "Person, Employee, and Manager (Multilevel Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Person
{
	public:
		string name;
		void pinput()
		{
			cout << "Enter Name : ";
			cin >> name;
		}
		void poutput()
		{
			cout << "Name is : " << name << endl;
		}
};

class Employee : public Person
{
	public:
		int empid;
		void einput()
		{
			cout << "Enter Employee id : ";
			cin >> empid;
		}
		void eoutput()
		{
			cout << "Employee id is : " << empid << endl;
		}
};

class Manager : public Employee
{
	public:
		string department;
		void minput()
		{
			cout << "Enter Department of Employee : ";
			cin >> department;
		}
		void moutput()
		{
			cout << "Employee Department is : " << department << endl;
		}
};

int main()
{
	Manager m;
	m.pinput();
	m.einput();
	m.minput();
	m.poutput();
	m.eoutput();
	m.moutput();
	return 0;
}`
            },
            {
                title: "Animal, Mammal, and Dog (Multilevel Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Animal
{
	public:
		string specise;
		void ainput()
		{
			cout << "Enter Specise : ";
			cin >> specise;
		}
		void aoutput()
		{
			cout << "Specise is : " << specise << endl;
		}
};

class Mammal : public Animal
{
	public:
		string habitat;
		void minput()
		{
			cout << "Enter Habitat Of Animal : ";
			cin >> habitat;
		}
		void moutput()
		{
			cout << "Habitat is : " << habitat << endl;
		}
};

class Dog : public Mammal
{
	public:
		void Breed()
		{
			cout << "Breed...." << endl;
		}
		void bark()
		{
			cout << "Bark....." << endl;
		}
};

int main()
{
	Dog d;
	d.ainput();
	d.minput();
	d.aoutput();
	d.moutput();
	d.Breed();
	d.bark();
	return 0;
}`
            },
            {
                title: "Student, Test, and Result (Multilevel Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Student
{
	public:
		int rno;
		string name;
		void sinput()
		{
			cout << "Enter Roll No : ";
			cin >> rno;
			cout << "Enter Name : ";
			cin >> name;
		}
		void soutput()
		{
			cout << "Roll No is : " << rno << endl;
			cout << "Name is : " << name << endl;
		}
};

class Test : public Student
{
	public:
		int m1,m2;
		void tinput()
		{
			cout << "Enter Mark of Subject 1 : ";
			cin >> m1;
			cout << "Enter Mark of Subject 2 : ";
			cin >> m2;
		}
		void toutput()
		{
			cout << "Mark 1 : " << m1 << endl;
			cout << "Mark 2 : " << m2 << endl;
		}
};

class Result : public Test
{
	public:
		float total,percentage;
		void method()
		{
			total=m1+m2;
			percentage=total/200*100;
		}
		void display()
		{
			cout << "Total Mark is : " << total << endl;
			cout << "Percentage is : " << percentage << "%" << endl;
		}
};

int main()
{
	Result r;
	r.sinput();
	r.tinput();
	r.soutput();
	r.method();
	r.toutput();
	r.display();
	return 0;
}`
            },
            {
                title: "Shape, Polygon, and Triangle (Multilevel Inheritance)",
                code: `#include<iostream>
using namespace std;

class Shape
{
	public:
		float base;
		void input()
		{
			cout << "Enter Base Value : ";
			cin >> base;
		}
		void output()
		{
			cout << "Base is : " << base << endl;
		}
};

class Polygon : public Shape
{
	public:
		float height;
		void pinput()
		{
			cout << "Enter Height : ";
			cin >> height;	
		}
		void poutput()
		{
			cout << "Height is : " << height << endl;
		}
};

class Triangle : public Polygon
{
	public:
		float area;
		void method()
		{
			area=1/2*base*height;
		}
		void toutput()
		{
			cout << "Area of Triangle is : " << area << endl;
		}
};

int main()
{
	Triangle t;
	t.input();
	t.pinput();
	t.output();
	t.poutput();
	t.method();
	t.toutput();
	return 0;
}`
            },
            {
                title: "Devices, Computer, and Laptop (Multilevel Inheritance)",
                code: `#include<iostream>
using namespace std;

class Devices
{
    public:
        void doutput()
        {
            cout << "called from device" << endl;
        }
};

class Computer : public Devices
{
    public:
        void coutput()
        {
            cout << "Called from computer" << endl;
        }
};

class Laptop : public Computer
{
    public:
        void output()
        {
            cout << "Called From laptop" << endl;
        }
};

int main()
{
    Laptop l;
    l.doutput();
    l.coutput();
    l.output();

    return 0;
}`
            }
        ],
        "multiple": [
            {
                title: "Teacher, Researcher, and Professor (Multiple Inheritance)",
                code: `#include<iostream>
using namespace std;

class Teacher
{
    public:
        void t()
        {
            cout << "Teacher age is : 29" << endl;
        }
};

class Researcher
{
    public:
        void r()
        {
            cout << "Researcher Task is : Research " << endl;
        }
};

class Professor : public Teacher, public Researcher
{
    public:
        void p()
        {
            cout << "Call From Professor" << endl;
        }
};

int main()
{
    Professor p;
    p.t();
    p.r();
    p.p();

    return 0;
}`
            },
            {
                title: "Engine, Body, and Car (Multiple Inheritance)",
                code: `#include<iostream>
using namespace std;

class Engine
{
    public:
        void eoutput()
        {
            cout << "Horse Power is : 500000" << endl;
        }
};

class Body
{
    public:
        void boutput()
        {
            cout << "Car Wiegth is : 50 kg" << endl;
        }
};

class Car : public Engine , public Body
{
    public:
        void coutput()
        {
            cout << "Car Is Reseamble" << endl;
        }
};

int main()
{
    Car c;
    c.eoutput();
    c.boutput();
    c.coutput();

    return 0;
}`
            },
            {
                title: "Flyer, Swimmer, and Duck (Multiple Inheritance)",
                code: `#include<iostream>
using namespace std;

class Flyer
{
    public:
        void f()
        {
            cout << "Duck is Flying....." << endl;
        }
};

class Swimmer
{
    public:
        void s()
        {
            cout << "Duck is Swimming....." << endl;
        }
};

class Duck : public Flyer , public Swimmer
{
    public:
        void d()
        {
            cout << "Call From Duck" << endl;
        }
};

int main()
{
    Duck d;
    d.f();
    d.s();
    d.d();

    return 0;
}`
            },
            {
                title: "Artist, Engineer, and Designer (Multiple Inheritance)",
                code: `#include<iostream>
using namespace std;

class Artist
{
    public:
        void a()
        {
            cout << "Creative Score...." << endl;
        }
};

class Enginer
{
    public:
        void e()
        {
            cout << "Technical Skill...." << endl;
        }
};

class Designer : public Artist , public Enginer
{
    public:
        void d()
        {
            cout << "Call From Designer....." << endl;
        }
};

int main()
{
    Designer d;
    d.a();
    d.e();
    d.d();

    return 0;
}`
            },
            {
                title: "GPS, Vehicle, and SmartCar (Multiple Inheritance)",
                code: `#include<iostream>
using namespace std;

class Gps
{
    public:
        void g()
        {
            cout << "Gps Is providing navigations...." << endl;
        }
};

class Vehical
{
    public:
        void v()
        {
            cout << "Vehical Provides Gps Its location...." << endl;
        }
};

class SmartCar : public Gps , public Vehical
{
    public:
        void s()
        {
            cout << "Smart Car is Using gps...." << endl;
        }
};

int main()
{
    SmartCar s;
    s.g();
    s.v();
    s.s();

    cin.get();
    cin.get();
    return 0;
}`
            }
        ],
        "hierarchical": [
            {
                title: "Person, Student, and Professor (Hierarchical Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Person
{
    public:
        int age;
        string name;

        void personinput()
        {
            cout << "Enter Age : ";
            cin >> age;
            cout << "Enter Name: ";
            cin >> name;
        }

        void poutput()
        {
            cout << "Age is : " << age << endl;
            cout << "Name is : " << name << endl;
        }
};

class Student : public Person
{
    public:
        void studentoutput()
        {
            cout << "called from Student" << endl;
        }
};

class Professor : public Person
{
    public:
        void professoroutput()
        {
            cout << "Called From Professor" << endl;
        }
};

int main()
{
    Student s;
    Professor p;
    s.studentoutput();
    s.personinput();
    s.poutput();
    
    p.professoroutput();
    p.personinput();
    p.poutput();   
    
    return 0;
}`
            },
            {
                title: "Shape, Circle, and Rectangle (Hierarchical Inheritance)",
                code: `#include<iostream>
using namespace std;

class Shape
{
    public:
        float area;
        void soutput()
        {
            cout << "Area is : " << area << endl;
        }
};

class Circle : public Shape
{
    public:
        float r;
        void circleinput()
        {
            cout << "Enter R of Circle : ";
            cin >> r;
        }

        void method()
        {
            area=3.14159*r*r;
        }
};

class Rectangle : public Shape
{
    public:
        float l,w;
        void rectangleinput()
        {
            cout << "Enter Width : ";
            cin >> w;
            cout << "Enter Length : ";
            cin >> l;
        }

        void rmethod()
        {
            area=l*w;
        }
};

int main()
{
    Circle c;
    Rectangle r;

    c.circleinput();
    c.method();
    c.soutput();

    r.rectangleinput();
    r.rmethod();
    r.soutput();

    cin.get();
    cin.get();  // waits for Enter

    return 0;
}`
            },
            {
                title: "Account, Savings Account, and Current Account (Hierarchical Inheritance)",
                code: `#include<iostream>
using namespace std;

class Account
{
    public:
        int balance;
        int accountholder;

        void ainput()
        {
            cout << "\\nEnter Account Number : ";
            cin >> accountholder;
            cout << "Enter Account Balance : ";
            cin >> balance;
        }
        void aoutput()
        {
            cout << "\\nAccount Number is : " << accountholder << endl;
            cout << "Account Balance is : " << balance << endl; 
        }
};

class Savings_acc : public Account
{
    public: 
        int d_amount,w_amount,t_amount;
        void saDeposit()
        {
            cout << "Enter Amount TO Deposit : ";
            cin >> d_amount;
        }
        void sawithdrwal()
        {
            cout << "Enter Amount TO Withdrwal : ";
            cin >> w_amount;
        }
        void method1()
        {
            cout << "Total Balance after WithDraw And Deposit in Saving account is : " << balance+(d_amount-w_amount) << endl;
        }
};

class Current_acc : public Account
{
    public: 
        int d1_amount,w1_amount;
        void caDeposit()
        {
            cout << "Enter Amount TO Deposit : ";
            cin >> d1_amount;
        }
        void cawithdrwal()
        {
            cout << "Enter Amount TO Deposit : ";
            cin >> w1_amount;
        }
        void method2()
        {
            cout << "Total Balance after WithDraw And Deposit in Current account is : " << balance+(d1_amount-w1_amount) << endl;
        }
};

int main()
{
    Savings_acc sa;
    Current_acc ca;

    cout << "Enter Amounts For Saving Accounts" << endl;

    sa.ainput();
    sa.saDeposit();
    sa.sawithdrwal();
    sa.aoutput();
    sa.method1();

    cout << "Enter Amounts For Current Accounts" << endl;

    ca.ainput();
    ca.caDeposit();
    ca.cawithdrwal();
    ca.aoutput();
    ca.method2();

    cin.get();
    cin.get();

    return 0;
}`
            },
            {
                title: "Animal, Dog, and Cat (Hierarchical Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Animal
{
    public:
        string s;
        void ainput()
        {
            cout << "Enter Spieces : ";
            cin >> s;
        }
        void output()
        {
            cout << "Spieces is : " << s << endl;
        }
};

class Dog : public Animal
{
    public:
        void bark()
        {
            cout << "Dog is barking....." << endl;
        }
};

class Cat : public Animal
{
    public:
        void cat1()
        {
            cout << "Cate Is Meowing......" << endl;
        }
};

int main()
{
    cout << "Enter Details Of Dog" << endl;
    Dog d;
    d.ainput();
    d.output();
    d.bark();

    cout << "Enter Details Of cat" << endl;
    Cat c;
    c.ainput();
    c.output();
    c.cat1();

    return 0;
}`
            },
            {
                title: "Vehicle, Car, and Bike (Hierarchical Inheritance)",
                code: `#include<iostream>
#include<string>
using namespace std;

class Vehical
{
    public:
        string brand;
        int model;
        void vinput()
        {
            cout << "\\nEnter Vehical Brand : ";
            cin >> brand;
            cout << "Enter Model Number : ";
            cin >> model;
        }
        void voutput()
        {
            cout << "\\nBrand is : " << brand << endl;
            cout << "Mode Number is : " << model << endl;
        }
};

class Car : public Vehical
{
    public:
        int w,m;
        void cintput()
        {
            cout << "\\nEnter Wheels of Car : ";
            cin >> w;
            cout << "Enter Mileage of Car : ";
            cin >> m;
        }
        void couput()
        {
            cout << "\\nWheels is : " << w << endl;
            cout << "Mileage is : " << m << endl;
        }
};

class Bike : public Vehical
{
    public:
        int w1,m1;
        void boutput()
        {
            cout << "\\nEnter Wheels of Bike : ";
            cin >> w1;
            cout << "Enter Mileage of Bike : ";
            cin >> m1;
        }
        void binput()
        {
            cout << "\\nWheels is : " << w1 << endl;
            cout << "Mileage is : " << m1 << endl;
        }
};

int main()
{
    

    Car c;
    Bike b;

    cout << "\\nEnter details of car " << endl;

    c.vinput();
    c.cintput();
    c.voutput();
    c.couput();

    cout << "\\nEnter details of bike" << endl;

    
    b.vinput();
    b.binput();
    b.voutput();
    b.boutput();

    cin.get();
    cin.get();

    return 0;
}`
            }
        ],
        "hybrid": [
            {
                title: "Person, Student, Teacher, and TeachingAgent (Hybrid Inheritance)",
                code: `#include<iostream>
using namespace std;

class Person
{
    public:
        void p()
        {
            cout << "Age is : 19 " << endl;
        }
};

class Student : virtual public Person
{
    public:
        void s()
        {
            cout << "Student Roll No is : 27" << endl;
        }
};

class Teacher : virtual public Person
{
    public:
        void t()
        {
            cout << "Teacher Subject is : c++ " << endl;
        }
};

class Teachingagent : public Student , public Teacher
{
    public:
        void ta()
        {
            cout << "Call From Teaching Agent..." << endl;
        }
};

int main()
{
    Teachingagent t;
    t.p();
    t.s();
    t.t();
    t.ta();

    return 0;
}`
            },
            {
                title: "Vehicle, LandVehicle, WaterVehicle, and AmphibiousVehicle (Hybrid Inheritance)",
                code: `#include<iostream>
using namespace std;

class Vehical
{
    public:
        void v()
        {
            cout << "Call From Base First class " << endl;
        }
};

class Landvehical : virtual public Vehical
{
    public:
        void l()
        {
            cout << "This vehical Can Run Only in Land" << endl;
        }
};

class Watervehical : virtual public Vehical
{
    public:
        void w()
        {
            cout << "This Vehical Can Run in Water" << endl;
        }
};

class Amphibiousvehical : public Landvehical , public Watervehical
{
    public:
        void a()
        {
            cout << "Amphibious Vehical Can Run on Both Water & Land" << endl;
        }
};  

int main()
{
    Amphibiousvehical a;
    a.v();
    a.l();
    a.w();
    a.a();

    return 0;
}`
            },
            {
                title: "Devices, Computer, Phone, and Smartphone (Hybrid Inheritance)",
                code: `#include<iostream>
using namespace std;

class Devices
{
    public:
        void d()
        {
            cout << "Devices Features..." << endl;
        }
};

class Computer : virtual public Devices
{
    public:
        void c()
        {
            cout << "Compute Features...." << endl;
        }
};

class Phone : virtual public Devices
{
    public:
        void p()
        {
            cout << "Phone Features...." << endl;
        }
};

class Smartphone : public Computer , public Phone
{
    public:
    void s()
    {
        cout << "Smatphone Got Features From Phone And Computer" << endl;
    }
};

int main()
{
    Smartphone s;
    s.d();
    s.c();
    s.p();
    s.s();

    return 0;
}`
            },
            {
                title: "Shape, Shape2D, Shape3D, and Cylinder (Hybrid Inheritance)",
                code: `#include<iostream>
using namespace std;

class Shape
{
    public:
        void s()
        {
            cout << "Call from First Base class " << endl;
        }
};

class Shape2d : virtual public Shape
{
    public:
        float r;
        void s2()
        {
            cout << "Enter Radius of cyclynder : ";
            cin >> r;
        }
        void sdisplay()
        {
            cout << "Radius is : " << r << endl;
        }
};

class Shape3d : virtual public Shape
{
    public:
        float h;
        void s3d()
        {
            cout << "Enter Hieght of Cylinder : ";
            cin >> h;
        }
        void s3doutput()
        {
            cout << "Hiegth is : " << h << endl;
        }
};

class Cylinder : public Shape2d , public Shape3d
{
    public:
    void cyclinderoutput()
    {
        cout << "Call From Cylinder " << endl;
    }
};

int main()
{
    Cylinder c;
    c.s();
    c.s2();
    c.s3d();
    c.sdisplay();
    c.s3doutput();
    c.cyclinderoutput();

    cin.get();
    cin.get();

    return 0;
}`
            },
            {
                title: "Animal, Herbivorous, Carnivorous, and Omnivores (Hybrid Inheritance)",
                code: `#include<iostream>
using namespace std;

class Animal
{
    public:
        void a()
        {
            cout << "Animal Eating.." << endl;
        }
};

class Herbivorues : virtual public Animal
{
    public:
        void h()
        {
            cout << "Herbivourus Eating Habit..." << endl;
        }
};

class Carnivourus : virtual public Animal
{
    public:
        void c()
        {
            cout << "Carnivourus Eating Habit...." << endl;
        }
};

class Omniveres : public Herbivorues , public Carnivourus
{
    public:
        void o()
        {
            cout << "Omniveres Inherits Eating habit from Carniveres and Herbivourus.." << endl;
        }
};

int main()
{
    Omniveres o;
    o.a();
    o.h();
    o.c();
    o.o();

    return 0;
}`
            }
        ],
        "constructor-derived": [
            {
                title: "Person and Student (Constructor in Derived Class)",
                code: `#include<iostream>
using namespace std;

class Person
{
    public:
        Person()
        {
            cout << "Name is : Joyeb " << endl;
        }
};

class Student : public Person
{
    public:
        Student()
        {
            cout << "Roll No is : 27 " << endl;
        }
};

int main()
{
    Student s1;
    return 0;
}`
            },
            {
                title: "Shape and Rectangle (Constructor in Derived Class)",
                code: `#include<iostream>
using namespace std;

class Shape
{
    public:
        Shape()
        {
            cout << "Color is : Red " << endl;
        }
};

class Rectangle : public Shape
{
    public:
        Rectangle()
        {
            cout << "Length is : 10 " << endl;
            cout << "Width is : 5 " << endl;
        }
};

int main()
{
    Rectangle s1;
    return 0;
}`
            },
            {
                title: "Animal and Dog (Constructor in Derived Class)",
                code: `#include<iostream>
using namespace std;

class Animal
{
    public:
        Animal()
        {
            cout << "Animal Name is : Unknown " << endl;
        }

        Animal(string name)
        {
            cout << "Animal Name is : " << name << endl;
        }
};

class Dog : public Animal 
{
    public:
        Dog()
        {
            cout << "Dog Bread Is : Unknown " << endl;
        }

        Dog(string name, string breed) : Animal(name)
        {
            cout << "Dog Bread Is : " << breed << endl;
        }
};

int main()
{
    int i;
    string name;
    string breed;

    cout << "To call Default Construtor Enter 1"<< endl;
    cout << "To call Parameterized Construtor Enter Any Number"<< endl;
    cout << "Enter Your Choice : ";
    cin >> i;

    if(i==1)
    {
        Dog d1;
    }

    else
    {
        cout << "Enter Name: ";
        cin >> name;
        cout << "Enter Breed: ";
        cin >> breed;
        Dog d1(name, breed);
    }

    cin.get();
    cin.get();

    return 0;
}`
            },
            {
                title: "Vehicle and Car (Constructor in Derived Class)",
                code: `#include<iostream>
using namespace std;

class Vehcial
{
    public:
        Vehcial()
        {
            cout << "Vehical Brand Is: Toyota" << endl;
        }
};

class Car : public Vehcial
{
    public:
        Car()
        {
            cout << "Car Model is: 2020" << endl;
        }
};

int main()
{
    Car c1;
    return 0;
}`
            },
            {
                title: "Account and Savings Account (Constructor in Derived Class)",
                code: `#include<iostream>
using namespace std;

class Account 
{
    public:
        Account()
        {
            cout << "Account Number is : 2548" << endl;
        }
};

class Savingacc : public Account
{
    public:
        Savingacc()
        {
            cout << "Account Balance is : 50,000" << endl;
        }    
};  

int main()
{
    Savingacc s1;
    return 0;
}`
            }
        ],
        "nesting-class": [
            {
                title: "Classroom and Student (Nesting of Class)",
                code: `#include<iostream>
using namespace std;

class Classroom
{
    public:
        class Student
        {
            public:
                int rno;
                string name;

                void input()
                {
                    cout << "Enter Roll No: ";
                    cin >> rno;
                    cout << "Enter Name: ";
                    cin >> name;
                }

                void output()
                {
                    cout << "Roll No: " << rno << endl;
                    cout << "Name: " << name << endl;
                }
        };

        Student s;
        void display()
        {
            s.input();
            cout << "Student Details: " << endl;
            s.output();
        }
};

int main()
{
    Classroom c;
    c.display();

    cin.get();
    cin.get();
    
    return 0;
}`
            },
            {
                title: "Library and Book (Nesting of Class)",
                code: `#include<iostream>
using namespace std;

class Library
{
    public:
        class Book
        {
            public:
            string author;
            string title;
            void input()
            {
                cout << "Enter Author Name: ";
                cin >> author;
                cout << "Enter Title: ";
                cin >> title;
            }

            void output()
            {
                cout << "Author Name: " << author << endl;
                cout << "Title: " << title << endl;
            }
        };

        Book b[100];
        int i,n;

        void getdata()
        {
            cout << "Enter Number of Books: ";
            cin >> n;

            for(i=0;i<n;i++)
            {
                b[i].input();
                cout << endl;
            }
        }

        void display()
        {
            for(i=0;i<n;i++)
            {
                b[i].output();
            }
        }
};

int main()
{
    Library l;
    l.getdata();
    l.display();

    cin.get();
    cin.get();
    
    return 0;
}`
            },
            {
                title: "Computer and Processor (Nesting of Class)",
                code: `#include<iostream>
using namespace std;

class Computer
{
    public:
        class Processor
        {
            public:
                void output()
                {
                    cout << "Speed is : 3.2 GHz" << endl;
                    cout << "Cores is : 2" << endl;
                }
        };

        void display()
        {
            Processor p;
            p.output();
        }
};

int main()
{
    Computer c;
    c.display();

    cin.get();
    cin.get();
    
    return 0;
}`
            },
            {
                title: "University and Department (Nesting of Class)",
                code: `#include<iostream>
using namespace std;

class University
{
    public:
        class Department
        {
            public:
                void output()
                {
                    cout << "Department of Computer Science and Engineering" << endl;
                    cout << "Hod OF Computer Department" << endl;
                }      
        };

        void display()
        {
            Department d;
            d.output();
        }
};

int main()
{
    University u;
    u.display();

    cin.get();
    cin.get();
    
    return 0;
}`
            },
            {
                title: "Car and Engine (Nesting of Class)",
                code: `#include<iostream>
using namespace std;

class Car
{
    public:
        class Engine
        {
            public:
                void output()
                {
                    cout << "Car Horsepower is: 250000" << endl;
                    cout << "Car Type is: Petrol" << endl;
                }
        };

        void display()
        {
            Engine e;
            e.output();
        }
};

int main()
{
    Car c;
    c.display();

    cin.get();
    cin.get();
    
    return 0;
}`
            }
        ],
        "abstract-class": [
            {
                title: "Shape, Circle, and Rectangle (Abstract Class)",
                code: `#include<iostream>
using namespace std;

class Shape
{
    public:
        virtual void area()=0;
};

class Circle : public Shape
{
    public:
        void area()
        {
            cout << "Circle Overrided The Abstract base  Class" << endl;
        }
};

class Rectangle : public Shape
{
    public:
        void area()
        {
            cout << "Rectangle Overrided The Abstract base  Class" << endl;
        }
};

int main()
{
    Circle c;
    Rectangle r;
    
    c.area();
    r.area();

    return 0;
}`
            },
            {
                title: "Animal, Dog, and Cat (Abstract Class)",
                code: `#include<iostream>
using namespace std;

class Animal
{
    public:
        virtual void sound()=0;
};

class Dog : public Animal
{
    public:
        void sound()
        {
            cout << "Dog Overrided The Abstract base Class" << endl;
        }
};

class Cat : public Animal
{
    public:
        void sound()
        {
            cout << "Cat Overrided The Abstract base  Class" << endl;
        }
};

int main()
{
    Dog d;
    Cat c;
    
    d.sound();
    c.sound();

    return 0;
}`
            },
            {
                title: "Employee, FullTime, and PartTime (Abstract Class)",
                code: `#include<iostream>
using namespace std;

class Employee
{
    public:
        int salary=5000; // per day
        virtual void calculatesalary()=0;
};

class Fulltime : public Employee
{
    public:
        void calculatesalary()
        {
            cout << "Total Salary is : " << salary*30 << endl;
        }
};

class Parttime : public Employee
{
    public:
        void calculatesalary()
        {
            cout << "Total Salary is : " << salary/2*30 << endl;
        }
};

int main()
{
    cout << "Salary Of Full Time Employee :" << endl;
    Fulltime f;
    f.calculatesalary();
    cout << "Salary Of Part Time Employee :" << endl;
    Parttime p;
    p.calculatesalary();

    return 0;
}`
            },
            {
                title: "Application, Fan, and AC (Abstract Class)",
                code: `#include<iostream>
using namespace std;

class Application
{
    public:
        virtual void turnon()=0;
};

class Fan : public Application
{
    public:
        void turnon()
        {
            cout << "Fan is ON" << endl;
        }
};

class Ac : public Application
{
    public:
        void turnon()
        {
            cout << "Ac is OF" << endl;
        }
};

int main()
{
    Fan f;
    Ac a;
    
    f.turnon();
    a.turnon();

    return 0;
}`
            },
            {
                title: "Vehicle, Car, and Bike (Abstract Class)",
                code: `#include<iostream>
using namespace std;

class Vehical 
{
    public:
        virtual void start()=0;
};

class Car : public Vehical
{
    public:
        void start()
        {
            cout << "Car Started" << endl;
        }
};

class Bike : public Vehical
{
    public:
        void start()
        {
            cout << "Bike Started" << endl;
        }
};

int main()
{
    Car c;
    Bike b;
    
    c.start();
    b.start();

    return 0;
}`
            }
        ],
        "virtual-base-class": [
            {
                title: "Working Student (Virtual Base Class)",
                code: `#include<iostream>
using namespace std;

class Person
{
	public:
		int age;
		string name;
		
		void input1()
		{
			cout << "Enter Name: ";
			cin >> name;
			cout << "Enter Age: ";
			cin >> age;
		}
		void display1()
		{
			cout << "Name is: " << name << endl;
			cout << "Age is: " << age << endl;
		}
};

class Student : virtual public Person
{
	public:
			
};

class Employee : virtual public Person
{
	public:
		
};

class Workingstudent : public Student , public Employee
{
	public:
			
};

int main()
{
	Workingstudent s;
	s.input1();
	s.display1();
	
	return 0;
}`
            },
            {
                title: "Smart Device (Virtual Base Class)",
                code: `#include<iostream>
using namespace std;

class Device
{
	public:
		int model;
		string brand;
		
		void input1()
		{
			cout << "Enter Brand: ";
			cin >> brand;
			cout << "Enter Model: ";
			cin >> model;
		}
		void display1()
		{
			cout << "Brand is: " << brand << endl;
			cout << "Model is: " << model << endl;
		}
};

class Computer : virtual public Device
{
	public:
		int ram,processor;	
		void input2()
		{
			cout << "Enter Ram: ";
			cin >> ram;
			cout << "Enter Processor: ";
			cin >> processor;
		}
		void display2()
		{
			cout << "Ram is: " << ram << endl;
			cout << "Processor is: " << processor << endl;
		}			
};

class Phone : virtual public Device
{
	public:
		int Simslot,battery;	
		void input3()
		{
			cout << "Enter Sim Slot: ";
			cin >> Simslot;
			cout << "Enter Battery: ";
			cin >> battery;
		}
		void display3()
		{
			cout << "Sim Slot is: " << Simslot << endl;
			cout << "Battery is: " << battery << endl;
		}
};

class Smartdevice : public Computer , public Phone
{
	public:
			
};

int main()
{
	Smartdevice s;
	s.input1();
	s.input2();
	s.input3();
	s.display1();
	s.display2();
	s.display3();
	
	return 0;
}`
            },
            {
                title: "Omnivore Animal (Virtual Base Class)",
                code: `#include<iostream>
using namespace std;

class Animal
{
	public:
		string spicies;
		
		void input1()
		{
			cout << "Enter Spices: ";
			cin >> spicies;
		}
		void display1()
		{
			cout << "Spices is: " << spicies << endl;
		}
};

class Herbivoure : virtual public Animal
{
	public:
		void eatplant()
		{
			cout << "Eat PLant"	<< endl;
		}	
};

class Carnivoure : virtual public Animal
{
	public:
		void eatmeet()
		{
			cout << "Eat Meet" << endl;
		}
};

class Omnivore : public Herbivoure , public Carnivoure
{
	public:
			
};

int main()
{
	Omnivore o;
	o.input1();
	o.display1();
	o.eatplant();
	o.eatmeet();
	
	return 0;
}`
            },
            {
                title: "Hybrid Account (Virtual Base Class)",
                code: `#include<iostream>
using namespace std;

class Account
{
	public:
		int acc_nmbr,acc_balance;
		
		void input1()
		{
			cout << "ENter Account Number: ";
			cin >> acc_nmbr;	
			cout << "ENter Account Balance: ";
			cin >> acc_balance;
		}	
		void dsplay1()
		{
			cout << "Account Number is : " << acc_nmbr << endl;
			cout << "Account Balance is : " << acc_balance << endl;
		}
};

class Savingacc : virtual public Account
{
	public:
		float interest,intrate;
		void input2()
		{
			cout << "Enter Interest Rate : ";
			cin >> intrate;
		}
		
		void method()
		{
			interest=acc_balance*intrate/100;
		}
		
		void display2()		
		{
			cout << "Interest Amount is : " << interest << endl;
		}
};

class Currentacc : virtual public Account
{
	public:
			
};

class Hybridacc : public Savingacc , public Currentacc
{
	public:
			
};

int main()
{
	Hybridacc h;
	h.input1();
	h.input2();
	h.dsplay1();
	h.method();
	h.display2();
	
	return 0;	
}`
            },
            {
                title: "Prism (Virtual Base Class)",
                code: `#include<iostream>
using namespace std;

class Shape
{
    public:
        string color;
        void input1()
        {
            cout << "Enter Color: ";
            cin >> color;
        }

        void display1()
        {
            cout << "Color is: " << color << endl;
        }
};

class Polygon : virtual public Shape
{
    public:
        int s;
        void input2()
        {
            cout << "Enter Number of Sides: ";
            cin >> s;
        }

        void display2()
        {
            cout << "Number of Sides is: " << s << endl;
        }
};

class Solid : virtual public Shape
{
    public:
        void volueme()
        {
            cout << "Call From Solid" << endl;       
        }
};

class Prism : public Polygon , public Solid
{
    public:
        
};

int main()
{
    Prism p;
    p.input1();
    p.input2();
    p.display1();
    p.display2();
    p.volueme();

    cin.get();
    cin.get();
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
        <div className="min-h-screen" >
            <CodingBackground />
            <Navigation />

            <section className="py-20 px-4 container mx-auto pt-24">
                <div className="max-w-4xl mx-auto">
                    <BackButton />
                    <h1 className="text-4xl font-bold mb-4 text-center text-primary">{data.name}</h1>
                    <p className="text-center text-muted-foreground mb-12">C++ II Unit 1 - {data.count} programs</p>

                    <div className="space-y-4">
                        {programs.map((program, i) => (
                            <CollapsibleSection key={i} title={`Program ${i + 1}: ${program.title}`} count={1}>
                                <ProgramCard number={i + 1} title={program.title} code={program.code} fileExtension="cpp" />
                            </CollapsibleSection>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
};

export default CppSectionII;