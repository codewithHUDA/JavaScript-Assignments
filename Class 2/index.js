
/*Ex# 1: Make An Object Using new Object() Constructor And Add Some Properties And Methods Of Your Choice And Access Them.*/

// 1-Make An Object Using new Object() Constructor.

   let myobj = new Object();

// 2-Add Some Properties.

   myobj.name = "Aeroplane";
   myobj.speed = 2.95;

// 3-Methods Of Your Choice.

   myobj.message = function() {
      return "Hello! Aeroplane seep is "+this.speed;
   };

// 4-Access Them.

console.log(myobj.name); //Aeroplane.
console.log(myobj.speed); //2.95.
console.log(myobj.message()); //Hello! Aeroplane seep is 2.9


/*Ex# 2: Reassign Values In Your Object Properties And Access Using Methods With The Help Of this keyword.*/

// 1-Reassign Values In Your Object Properties And Access.

   myobj.name = "Civic";
   myobj.speed = 3.15;

// 2-Access Using Methods With The Help Of this keyword.

   myobj.info = function() {
      return(
            "My car is " +this.name+ " and it's speed is "+this.speed+"km/hr"
      );
   };
console.log(myobj.info());


/*Ex# 3: Make A Function Which Prints Your Name.*/

   function myName() {
      console.log("HUDA");
      // return("HUDA");
   };

myName();
// console.log(myName());


/*Ex# 4: Make 4 Methods Which Takes 2 Parameters And Do Addition,Subtraction,Multiplication And Division.*/

let calculate = {
      addition: function(num1,num2){
            return num1 + num2;
      },
      subtraction: function(num1,num2){
            return num1 - num2;
      },
      mutliplication: function(num1,num2){
            return num1 * num2;
      },
      division: function(num1,num2){
            return num1 / num2;
      }
};
console.log(calculate.addition(2,4));
console.log(calculate.subtraction(6,4));
console.log(calculate.mutliplication(2,3));
console.log(calculate.division(8,4));