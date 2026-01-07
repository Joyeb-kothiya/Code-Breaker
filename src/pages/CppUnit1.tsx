import Navigation from "@/components/Navigation";
import CodingBackground from "@/components/CodingBackground";
import CollapsibleSection from "@/components/CollapsibleSection";
import ProgramCard from "@/components/ProgramCard";
import BackButton from "@/components/BackButton";

const CppUnit1 = () => {
	const programs = [
		{
			title: "Time Input/Output",
			code: `#include <iostream>
using namespace std;
 
class input
{
  public:int h,m,s;
  	void getdata()
  	{
  		cout << "Enter Hour= ";
  		cin >> h;
  		cout << "Enter minute= ";
  		cin >> m;
  		cout << "Enter seconds= ";
  		cin >> s;
    }
    
    void display()
    {
    	cout << h << ":" <<  m << ":" << s;
	}
};
 
int main()
{
	input k;
	k.getdata();
	k.display();
	
	return 0;
}`
		},
		{
			title: "Date Input/Output",
			code: `#include<iostream>
using namespace std;

class input
{
  public:int d,m,y;
  	void getdata()
  	{
  		cout << "Enter DAy= ";
  		cin >> d;
  		cout << "Enter month= ";
  		cin >> m;
  		cout << "Enter year= ";
  		cin >> y;
    }
    
    void display()
    {
    	cout << d << "-" <<  m << "-" << y;
	}
};

int main()
{
	input k;
	k.getdata();
	k.display();
	
	return 0;
}`
		},
		{
			title: "Temperature Converter (Celsius to Fahrenheit)",
			code: `#include<iostream>
using namespace std;

class temperature
{
 public:float c,f; // Use float for accurate calculations
   void getdata()
   {
   	cout << "Enter Celsius= ";
   	cin >> c;
   }
   
   void display()
   {
    // Use 9.0/5.0 for floating-point division, not integer division
   	f = (c * (9.0 / 5.0)) + 32;
   	cout << "Fahrenheit= "<< f;
   }
}; 

int main()
{
	temperature k;
	k.getdata();
	k.display();
	return 0;
}`
		},
		{
			title: "Student Marksheet",
			code: `#include<iostream>
#include<string> // Include for std::string
using namespace std;

class marksheet
{
  public:
    int roll_no, m1, m2, m3, total;
    string name; // Use string to store a full name, not char
    float percentage;
		 
    void getdata()
    {
        cout << "Enter Roll Number= ";
        cin >> roll_no;
        cout << "Enter Name= ";
        cin >> name;
        cout << "Enter Mark1= ";
        cin >> m1;
        cout << "Enter Mark2= ";
        cin >> m2;
        cout << "Enter Mark3= ";
        cin >> m3;
    } 	
    
    void display()
    {
        cout <<"Roll No= " << roll_no <<"\\n";
        cout <<"Name= " << name <<"\\n";
        cout <<"Mark 1 = " << m1 <<"\\n";
        cout <<"Mark 2 = " << m2 <<"\\n";
        cout <<"Mark 3 = " << m3 <<"\\n";
        total = m1 + m2 + m3;
        // Correct percentage calculation
        percentage = (total / 300.0) * 100.0;
        cout << "Total= " << total << "\\n";
        cout << "Percentage= " << percentage << "%";
    }
};

int main()
{
	marksheet k;
	k.getdata();
	k.display();
	return 0;
}`
		},
		{
			title: "Employee Salary Management",
			code: `#include<iostream>
#include<string>
using namespace std;

class Employee
{
  public:
    int empid;
    float salary; // Use float for salary
    string name, department;
		 
    void getdata()
    {
        cout << "Enter Employee ID= ";
        cin >> empid;
        cout << "Enter Name= ";
        cin >> name;
        cout << "Enter Department is: ";
        cin >> department;
        cout << "Enter Salary= ";
        cin >> salary;
    } 	
    
    void display()
    {
        cout <<"Employee ID= " << empid <<"\\n"; 
        cout <<"Name= " << name <<"\\n";
        cout <<"Employee department = " << department <<"\\n";
        cout <<"Employee salary = " << salary <<"\\n";
        float increment = salary * 50.0 / 100.0;
        cout <<"Increment Amount (50%)= " << increment << "\\n";
        cout <<"Total Incremented salary= " << salary + increment;
    }
};

int main()
{
	Employee k;
	k.getdata();
	k.display();
	return 0;
}`
		},
		{
			title: "Parking Charges Calculator",
			code: `#include<iostream>
using namespace std;

class parking
{
	public:
    int v_number, entry_time, exit_time;
    float charges_per_hour = 10.0;
	
	void getdata()
	{
		cout << "Enter vehicle number: ";
		cin >> v_number;
		cout << "Enter Entry Time of vehicle (in hours): ";
		cin >> entry_time;
		cout << "Enter Exit Time of vehicle (in hours): ";
		cin >> exit_time;	
	}
	
	void display()
	{
		cout << "Vehicle Number: " << v_number << "\\n";
		cout << "Entry Time: "<< entry_time << "\\n";
		cout << "Exit time: "<< exit_time << "\\n";
        // Calculate duration correctly
		cout << "Total Charges: " << charges_per_hour * (exit_time - entry_time);
	}
};

int main()
{
	parking k;
	k.getdata();
	k.display();
	return 0;
}`
		},
		{
			title: "Temperature Check",
			code: `#include<iostream>
using namespace std;

class temperature
{
  public: int number;
  
  void getdata()
  {
    cout << "Enter Temperature: ";
	cin >> number;	
  }	
  
  void display()
  {
  	if(number <= 20)
  	{
  	  cout << "Temperature is cold ";	
	}
	else if(number >= 35)
	{
		cout << "Temperature is hot ";
	}
	else
	{
		cout << "Temperature is moderate ";
	}
  }
};

int main()
{
  temperature k;
  k.getdata();
  k.display();
  return 0;
}`
		},
		{
			title: "Product Discount Calculator",
			code: `#include<iostream>
#include<string>
using namespace std;

class product
{
	public:
    string name;
	float price;

	void getdata()
	{
		cout << "Enter Product Name: ";
		cin >> name;
		cout << "Enter Price: ";
		cin >> price;
	}
	void display()
	{
		cout << "Name: " << name << "\\n";
		cout << "Price: " << price << "\\n";
		if (price > 1000)
		{
            float discount = price * 10.0 / 100.0;
			cout << "Discount Amount (10%): " << discount << "\\n";
			cout << "Total price after discount: " << price - discount;
		}
	}
};

int main()
{
	product k;
	k.getdata();
	k.display();
	return 0;
}`
		},
		{
			title: "Speed Checker",
			code: `#include<iostream>
using namespace std;

class speed
{
  public: int speed_val;	
  
  void getdata()
  {
  	cout << "Enter Speed: ";
  	cin >> speed_val;
  }
  
  void display()
  {
  	if(speed_val <= 20)
  	{
  	  cout << "Speed Is Slow";	
	}
	else if(speed_val >= 40)
	{
		cout << "Speed Is Fast";
	}
	else
	{
		cout << "Speed Is Normal";
	}
  }
};

int main()
{
	speed s;
	s.getdata();
	s.display();
	return 0;
}`
		},
		{
			title: "Voting Eligibility Checker",
			code: `#include<iostream>
#include<string>
using namespace std;

class citizen
{
	public:
    string name;
	int age;
	
	void getdata()
	{
		cout << "Enter Name: ";
		cin >> name;
		cout << "Enter Age: ";
		cin >> age;
	}
	
	void display()
	{
		cout << "Name: "<< name << "\\n";
		cout << "Age: "<< age << "\\n";
		
		if(age >= 18)
		{
			cout << "Citizen is Eligible to Vote";
		}
		else
		{
			cout << "Citizen is not eligible to Vote";
		}
	}
};

int main()
{
  citizen k;
  k.getdata();
  k.display();
  return 0;
}`
		},
		{
			title: "BMI Calculator",
			code: `#include<iostream>
#include<string>
using namespace std;

class bmi
{
	public:
    string name;
	float h, w, bmi_value;
	
	void getdata()
	{
		cout << "Enter Name: ";
		cin >> name;
		cout << "Enter Height (in meters): ";
		cin >> h;
		cout << "Enter Weight (in kg): ";
		cin >> w;
	}
	
	void display()
	{
		cout << "Name: " << name << "\\n";
		cout << "Height: " << h << "\\n";
		cout << "Weight: " << w << "\\n";
        
        bmi_value = w / (h * h);
        cout << "Your BMI is: " << bmi_value << "\\n";
		
		if(bmi_value < 18.5)
		{
			cout << "Category: Underweight";
		}
		else if(bmi_value >= 18.5 && bmi_value <= 24.9)
		{
			cout << "Category: Normal";
		}
		else if(bmi_value >= 25 && bmi_value <= 29.9)
		{
			cout << "Category: Overweight";
		}
		else // Handles bmi_value > 29.9
		{
			cout << "Category: Obese";
		}
	}
};

int main()
{
  bmi k;
  k.getdata();
  k.display();
  return 0;
}`
		},
		{
			title: "Age Group Classifier",
			code: `#include<iostream>
#include<string>
using namespace std;

class age
{
	public:
    string name;
	int age_val;
	
	void getdata()
	{
		cout << "Enter Name: ";
		cin >> name;
		cout << "Enter Age: ";
		cin >> age_val;
	}
	
	void display()
	{
		cout << "Name: " << name << "\\n";
		
		if(age_val < 13)
		{
			cout << "Age Group: Kid";
		}
		else if(age_val >= 13 && age_val <= 19)
		{
			cout << "Age Group: Teen";
		}
		else if(age_val >= 20 && age_val <= 59)
		{
			cout << "Age Group: Adult";
		}
		else // Handles age_val >= 60
		{
			cout << "Age Group: Senior";
		}
	}
};

int main()
{
  age k;
  k.getdata();
  k.display();
  return 0;
}`
		},
		{
			title: "Student Attendance Checker",
			code: `#include<iostream>
#include<string>
using namespace std;

class student
{
   public:
   int roll_no, total_classes, attended_classes;	
   string name;
   float attendance_percentage;
   
   void getdata()
   {
   	 cout << "Enter Roll No: ";
	 cin >> roll_no; 
	 
	 cout << "Enter Name: ";
	 cin >> name;
	 
	 cout << "Total Classes: ";
	 cin >> total_classes;
	 
	 cout << "Enter Attended classes: ";
	 cin >> attended_classes;
   }
   
   void display()
   {
   	cout << "Student Roll no is: " << roll_no << "\\n";
   	cout << "Student Name is: " << name << "\\n";
   	
   	attendance_percentage = ( (float)attended_classes / total_classes) * 100.0;
    cout << "Attendance: " << attendance_percentage << "%\\n";

   	if(attendance_percentage >= 75)
   	{
   	  cout << "Student Is Eligible for Exam";	
	}
	else
	{
		cout << "Student is Not Eligible for Exam";
	}
    }
};

int main()
{
  student j;
  j.getdata();
  j.display();
  return 0;
}`
		},
		{
			title: "Shopping Bill Calculator",
			code: `#include<iostream>
#include<string>
using namespace std;

class shopping
{
  public:
  string item_name;
  float quantity, price_per_unit;
  
  void getdata()
  {
    cout << "Enter Item Name: ";
	cin >> item_name;
	
	cout << "Enter Quantity: ";
	cin >> quantity;
	
	cout << "Enter Price Per Unit: ";
	cin >> price_per_unit;	
  }	
  
  void display()
  {
  	cout << "Name of Item is: " << item_name << "\\n";
  	cout << "Quantity is: " << quantity << "\\n";
	cout << "Price Per Unit is: " <<  price_per_unit << "\\n";
	cout << "Total Price: " << quantity * price_per_unit;
  }
};

int main()
{
  shopping j;
  j.getdata();
  j.display();
  return 0;
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
					<h1 className="text-4xl font-bold mb-4 text-center text-primary">C++ Unit 1</h1>
					<p className="text-center text-muted-foreground mb-12">14 programs</p>

					<div className="space-y-4">
						{programs.map((program, i) => (
							<CollapsibleSection key={i} title={`Program ${i + 1}: ${program.title}`} count={1}>
								<ProgramCard number={i + 1} title={program.title} code={program.code} fileExtension="cpp" />
							</CollapsibleSection>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default CppUnit1;
