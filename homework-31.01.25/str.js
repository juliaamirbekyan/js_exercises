let str = `Hello`;

console.log( str[str.length - 1] ); 
console.log( str.at(-1) );

for (let char of "Hello") {
    console.log(char);
}

let str1 = 'Hi';
str1 = 'h' + str1[1]; 
console.log( str1 );

console.log( 'Interface'.toUpperCase() );
console.log( 'Interface'.toLowerCase() );

let str2 = "Widget";

if (~str2.indexOf("Widget")) {
  console.log( 'Совпадение есть' );
}

console.log( "Widget with id".includes("Widget") );

console.log( "Widget".startsWith("Wid") );
console.log( "Widget".endsWith("get") );

let str3 = "stringify";
console.log( str3.slice(0, 5) );
console.log( str3.slice(0, 1) );