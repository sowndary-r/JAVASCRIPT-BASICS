/* ----------------JAVACRIPT-------------------------
* founder of js- Brendan Eich 
* JS is a scripting language used for creating client side dynamic websites.
* It is not a compiled language whereas it is a translated language where the js code is translated by a inbuit js engine in all the web browsers.
      ex: chrome --> v8
          firefox --> spidermonkey 
* case sensitve language
* it is a oop language.
* Naming history :
     Mocha --> Livescript --> JavaScript
     

 -------------------JS ENVIRONMENT -----------------
  * SUBLIME TEXT3
  * ATOM
  * VS CODE
  * LARAGON - used for website developmentd for projects.
  
 ------------------RUNNING JS USING NODE------------
 * download node software for your windows version.
 * open command window:
 * type node filename.js
 
  ------------------INLINE & OUTLINE JS-------------
  INLINE JS - writing code inside the html file (js code should be written inside <script></script> ).
  OUTLINS JS - writing code in separate s file and linking it with html file. 
       linking syntax---> <script src="file.js"> </script>
*/

//console logging(F12 opens console) --> displays only in console not in webpage.
//to open console click on inspect in your website. 
console.log("this is console logging");


//alerting
alert("this is a alert message");


//--------------------COMMANDS----------------------
// single line command --> //
//  multiline command --> /* */


//--------------------VARIABLES----------------------

//VARIABLE KEYWORDS:
// 1. var --> supports in all versions including old versions
var name="sowndarya";
// 2. let --> introduced in 2015 
let x=10;
// 3. const --> introduced in 2015. [note : variables declared with const cannot be changed.]
const y=20.56;
// 4. without keyword
z=10+5;

// concatenation of variabLE:
alert("my name is "+name);
let msg="console msg with name"+ name;
console.log(msg);

// naming conventions fo variables ----> similar to c.
// NOTE : default value of variabe --> "undefined".


//----------------------DATATYPES---------------------
/* datatypes are classified into two types :
* PRIMITIVE DATATYPES :                  * NON-PRIMITIVE DATATYPES :
    ->string                                  ->objects
    ->integer                                 ->funtions
    ->boolean                                 ->arrays
    ->null
    ->undefined
*/
let n="hello"; //string
let k=20; //integer
let def=undefined; //undefined
def=90; // we can reassign the undefined variables.
let de; //undefined
let key=null; // this specifies that as of now no value is assigned. we can reassign the values.
key=10;
let bool=true; //boolean

/* -----------------JAVASCRIPT - DYNAMIC TYPING------------
*Languages are classified into 2 types based on datatype declaration:
    * STATIC TYPED - datatypes are mentioned before the variable ( eg : int a=10; ). --> C,JAVA,C++
    * DYNAMIC TYPED - datatypes are not mentioned before the variable ( eg : name="sow"; ). --> Python , JS.

*In JS , typeof <varname> returns the datatype of that particular variable belongs to(type in console).

[ NOTE : datatype of null returns object --> typeof key returns "object" ]
*/


//---------------------OBJECTS IN JS------------------------
/*  object specifies the named values for all the properties.
    objects can hold more than one datatype and values.
*/
//way of declaring objects.
let person = {};    //empty object
//multiple property objects syntax :
/*
  let <objname> = {
    key1 : value1,
    key2 : value2,
    .
    .
    .
    keyn : value n
  };
  [NOTE : KEY SHOULD BE UNIQUE]
*/
let obj = {
    carname : "toyota",
    colour : "black",
    insurance : true,
    number : 124
};
console.log(obj); //shows all the properties inside obj
//way of accessing object :
//1.USING DOT OPERATOR :
console.log(obj.number);
//2.USING BRACKET 
console.log(obj["carname"]);
//inner object creation :
let parent ={
    mother : "karpagam",
    father : "ramesh",
    child : {
        elder : "sowndarya",
        younger : "yogesh"
    }
};
console.log(parent);
console.log(parent.child);
console.log(parent.child.elder);

/*
----------------------------JAVASCIPT OPERATORS----------------------
   1.ARITHMETIC OPERATOR  --> (+ , - , * , /(returns exact decimal) , % , **(exponential))
   2.COMPARISON OPERATOR --> (< , > ,<= , >= , ===(equality operator) , !==) returns boolean.
   we can also compare strings using comparator operator.
   3.LOGICAL OPERATOR
   4.ASSIGNMENT OPEARATOR --> (= , += , -= , *= , /=)
   5.BITWISE OPERATOR
   6.INCREMENT/DECREMENT --> (++ ,--)
   7.TERNARY OPERATOR -->(CONDITION?TRUE:FALSE)
*/
console.log("operators");
console.log(2**3); //2^3=8
console.log(2===3);
console.log(2!==3);
console.log("hi"==="hi");
console.log("aa">"bb");
console.log("1"<6); //automatically convert string to int and then check.
console.log(true || false);
console.log("true" || "false"); //output: false;
console.log("false" || "");//output: false
//falsy --> undefined , null,0,false,"",'',NaN 
//truthy -->other than falsy


//-----------------------------CONDITIONAL STATEMENTS(IF-ELSE,SWITCH CASE) -------------------------------------
//IF-ELSE STATEMENT - same syntax as C and JAVA
 if("Hot"=="hot")
 {
    console.log("whether is hot!!");
 }
 else
 console.log("whether is cool!!");

 //getting date using date fuction: Date class is used to get current date and time
 let date=new Date();
 console.log(date);
 console.log(date.getHours());

 //SWITCH SATETEMENT - same as java
 switch('a')
 {
    case 'b':
        console.log("successful!");
        break;
    default:
        console.log("default block");
 }

 //----------------------------------------ARRAYS------------------------------------------------------------
 /*
 *Arrays is a object with collection of similar type of elements.
 *There are 3 ways to construct array*/

 //* 1. Using array literal :
 let arr=["red","white","black"]; //empty array
 console.log(arr);//prints all the elements
 console.log(arr[0]);//prints the value for particular element in the specfied index

 //* 2.By creating instance of array(using new keyword)
 let ar=new Array(5);
 
 //ar[0]="hello";
 console.log(ar);

 //* 3. Using array constructor : we can create instance of array by passing value as arguments
 let a=new Array(3,2,3);
 console.log(a);

 //defining arrays :
 //we can define array with mixed data types
 let nums=[1,2,'hi'];
 console.log(`mixed array ${nums}`);
 //we can also give array inside an array
 let numsa=[1,2,3,[4,5]];
 console.log(numsa);
 console.log(numsa[3]);
 console.log(numsa[3][0]); //prints 4
/*ARRAY METHODS:
* fill()-fills the array using specified element
* reverse()-reverse the elements in the array
* push()-it adds the elements at the end of the array and returns the new length
* pop()-it removes and returns the last element of the array
* sort() - sorts the array
*/
a.sort();
console.log(a);
a.fill(1);
console.log(a);
let newlength=a.push(10);
console.log(newlength);
console.log(a);
let r=a.pop();
console.log(r);

//---------------------------------------STRINGS----------------------------------------------------------------
/*
*JS String is an object that represents a sequence of characters.
*There are 2 ways to create string in JS*/
            //1. using string literal
let str="helloworld";
            //2.Using new keyword
let st=new String("hello");
console.log("string length = " + str.length);
//STRING METHODS:
// 1. charAt()
//2. concat()
//3.toUpperCase()
//4.toLowerCase()
//5.length()
//6.indexOf()
//7.substr()
//8.slice()--> same as substring method 
console.log("slice method-->" + str.slice(1,3));
console.log("slice method reverse-->" +str.slice(-5)); //prints from last k characters
console.log("substr method-->"+ str.substr(1,4));//prints from starting index till k characters.
console.log("string upper = " + str.toUpperCase());
console.log("string lower = " + str.toLowerCase());



 //-------------------------------LOOPING STATEMENTS-------------------------------------------------------------
 /*
  * FOR loop - same as java
  * WHILE loop - same as java
  * DoWHILE loop - same as java 
  * FOR..IN loop
  * FOR..OF loop
 */
// FOR IN LOOP: 
/*
*Forin loop can be used in both ojects and arrays.
*In objects,it travers the key
*In arrays it traverses the index of the array 
*/
for(let i in arr)
{
console.log(i);  //prints the index
}
// FOR OF LOOP: 
/*
*Forin loop can be used in both ojects and arrays.
*In objects,it travers the value
*In arrays it traverses the elements of the array 
*/
for(let i of arr)
{
console.log(i);  //prints the elements 
}


//-------------------------------------FUNCTIONS--------------------------------------------------
//function keyword is used to create function 

//function definition:
let hob=["dancing","singing"];
let ms=`my hobbies are ${hob}`; // another way of concatenating values "${}"
function add(a,b)
{
    console.log(ms);
    
}
//function call
add(5,5);
//eg with return statement :
function sub(c,d)
{
    return c+d;
}
let res=sub(10,20);
console.log(res);

//----------------------------------------JS OBJECT & OOP--------------------------------------------
let nam="mahesh";
let dob="25/08/2002";
let ph=6578;
let address={
    state:"tamilnadu",
    dis:"cbe",
    greeting :function()  //creating function inside the object
    {
        console.log("welcome to " + this.state); //this keywod is used to access variables inside the objects.
    }
};
console.log(address.greeting());

//-------------------------------------------FACTORY FUNCTIONS------------------------------------------
//used for code simplicity
function greet(n) //returning objects
{
    return {
        n, //if key and values are same we can mention like this
        welcome(){
            console.log("welcome " + n);
        }
    }
}
let trisha= new greet("trishaa");  //new keyword is used to create objects
let hari=new greet("hari");
trisha.welcome();
hari.welcome();


//-------------------------------------------BOM-------------------------------------------------------------
/*
*BOM stands for Browser Object Model.
*BOM is used to interact with the browser.
*Document object represents the html document.
*if the default object of the browser is window, then we can call all the methods of the browser using window.
*/
window.alert("bom message");

/* 1. WINDOW OBJECT:

*window object represents a window in browser.
*this is automatically created by the browser.
*it is not the object of javacript like string,array,date,...

Methods of window object:
*alert() --displays the alert box containing message with ok button.
*confirm() --displays dialog box containing message with ok and cancel button.
*prompt() --displays the dialog box to get input from the user.
*open() --opens the new window.
*close()--close the current window.

Examples are:
*/
var v=confirm("click ok to continue");
if(v==true)
alert("THANKYOU FOR RESPONDING");
var p=prompt("who are u");
alert("myself "+p);

/*2. HISTORY OBJECT:

*The JavaScript history object represents an array of URLs visited by the user. 
*By using this object, you can load previous, forward or any particular page.
*The history object is the window property, so it can be accessed by:
                            window.history  
//METHODS OF HISTORY OBJECT:
*length - returns the length of the history URLs.
1	forward()	loads the next page.
2	back()	loads the previous page.
3	go()	loads the given page number.
*/
//Examples are:
history.back();//for previous page  
history.forward();//for next page  
history.go(2);//for next 2nd page  
history.go(-2);//for previous 2nd page

/*
3. SCREEN OBJECT:

*The JavaScript screen object holds information of browser screen. It can be used to display screen width, height, colorDepth, pixelDepth etc.
*The screen object is the window property, so it can be accessed by:

                           window.screen(or) screen
PROPERTIES:
1	width	returns the width of the screen
2	height	returns the height of the screen
3	availWidth	returns the available width
4	availHeight	returns the available height
5	colorDepth	returns the color depth
6	pixelDepth	returns the pixel depth.
Examples are:
*/

console.log("screen width "+screen.width);
console.log("screen height "+screen.height);


//------------------------------------------------------DOM---------------------------------------------------
/*
*DOM stands for document object model
*The document object represents the whole html document.
*When html document is loaded in the browser, it becomes a document object.
*it is the root element that represents the html document. It has properties and methods.
*it is the root element that represents the html document. It has properties and methods.
*it is the object of window. So it can be written as
                        window.document
*The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
METHODS OF DOCUMENT OBJECTS:

write("string")	writes the given string on the doucment.
writeln("string")	writes the given string on the doucment with newline character at the end.
getElementById()	returns the element having the given id value.
getElementsByName()	returns all the elements having the given name value.
getElementsByTagName()	returns all the elements having the given tag name.
getElementsByClassName()	returns all the elements having the given class name.

*/
//Accessing field value by document object: value is the property, that returns the value of the input text. 

//var name=document.form1.name.value;  
  
/*<form name="form1">  
Enter Name:<input type="text" name="name"/>  
<input type="button" onclick="printvalue()" value="print name"/>  
</form>  */


