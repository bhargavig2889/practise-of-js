  let result;
result='2'+3;
console.log(result)
result=3+'3';
console.log(result)
result=true+'3';
console.log(result)
result=3+null;
console.log(result)
result=4+undefined;
console.log(result)


//implicit conversion no number
result='4'-'2';
console.log(result);
result="heloo"-"world";
console.log(result)
result='4'-"heloo";
console.log(result)
//implicit conversion  boolean to  number
result='4'-true;
console.log(result)
result=5+false;
console.log(result)
// null conversion
result=5+null;
console.log(result)
// undefined conversion under defined to number
result=4+undefined;
console.log(result)
result=true+undefined;
console.log(result)
result='4'+undefined;
console.log(result)
//  explicit conversion
// string to number
result=Number('324')
console.log(result)
result=Number('324.01')
console.log(result)
//boolean to  number
result=Number(true);
console.log(result)
result=Number(false)
console.log(result)
// null
result=Number(null);
console.log(result)
result=Number("");
console.log(result)
// undefined
result=Number(undefined);
console.log(result) 
result=Number('heloo');
console.log(result)
//strings using parseint() parse float() + unary operator math.floor()
result=parseInt('20.1')
console.log(result)
result=parseFloat('20.1')
console.log(result)
result=+('20.1')
console.log(result)
result=Math.floor('20.1')
console.log(result)
// number  to string
result=String(324);
console.log(typeof result)
// other data types
result=String(null);
console.log(result)
result=String(undefined);
console.log(result)
result=String(true);
console.log(result)
// tostring ()
result=(324).toString();
console.log(result)
result=true.toString();
console.log(result)
result=null.toString();
console.log(result)
/// converting Boolean()
result = Boolean('');
console.log(result); 

result = Boolean(0);
console.log(result); 

result = Boolean(undefined);
console.log(result); 

result = Boolean(null);
console.log(result); 

result = Boolean(NaN);
console.log(result); 
// giving true values
result = Boolean("bhargavi");
console.log(result); 

result = Boolean(324);
console.log(result); 

result = Boolean('hello');
console.log(result); 

result = Boolean(' ');
console.log(result); 



