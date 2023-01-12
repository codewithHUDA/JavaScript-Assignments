/*Ex# 1: Create An Function Which Can Take Any Number Of Parameters And Do Addition Of All And Then Return The Result To Result Variable And After That Show The Result Using  Console.*/

function Add(){    //function which can take any number of Parameters.
      var Result = 0;
      for (var i=0; i < arguments.length; i++){
            Result += arguments[i]; //Do Addition.
      };
      return Result; //Then Return The Result To Result Variable.
};

console.log(Add(1,2,3)); //result 6-Show The Result Using  Console.
console.log(Add(4,5,6)); //result 15-Show The Result Using  Console.