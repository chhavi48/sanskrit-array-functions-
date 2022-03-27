

     let arr1 = new Array("1", "2", "3");
     
  console.log("arr1:", arr1);

  function Abrakadabra() {
    Object.defineProperty(this, "length", {
      value: 0, // better than `undefined`
      writable: true, // important!
      enumerable: false, // could be omitted
    });

    for (let i = 0; i < arguments.length; i++) {
      //index: value

      this[i] = arguments[i];
    }

    this.length = arguments.length;
  }

  Abrakadabra.prototype.आरंभः = function (value) {
    let index = this.length;

    this[index] = value;

    this.length++;
  };

  Abrakadabra.prototype.निस्हृ = function () {
    let index = this.length - 1;

    delete this[index];

    this.length--;
  };
  Abrakadabra.prototype.आ_वृज् =function(value)
  {
      let index=value.length-1;
      var arr=" ";
      for(var i=index;i>=0;i--)
      {
          arr=arr+value[i]
      }
      console.log(arr)
  }
  function श्लेषः(str,char)
{
 
var bag="";

for(i=0;i<arr.length;i++)
{
  bag=bag+arr[i]+char;
}
return bag;
}

var char="***";


  

  let arr = new Abrakadabra("4", "5", "6");
  arr.आरंभः("2");//PUSH
  arr.निस्हृ();//POP
  arr.आरंभः("1");//PUSH
  arr.आ_वृज्("MASAI SCHOOL")//REVERSE
  console.log(श्लेषः(arr,char)) //JOIN
  
// const firstElement = arr.shift();

// console.log(arr);
 

//arr.निस्हृ();

  console.log("arr:", Object.values(arr));

  //create an object

  //localStorage
  //.createElement()
  //appending()
  function replace(str) {
  var len = str.length;
  var bag="";
  var spaces=" ";
  var dashes="@@@@";
  for (i = 0; i < len; i++) {

    if (str[i] == spaces) {
      bag=bag+dashes;
    }
    else{
         bag=bag+str[i];
    }
  }
 return bag;
}

var input = "Masai A Transformation in Education";

var res = replace(input);
console.log(res);





