// The latest ECMAScript standard defines seven data types:
six datatypes that are primitives:
1) Boolean
2) Null
3) Undefined
4) Number
5) String
6) Symbol

and

Object

In computer science, an object is a value in memory which is possibly referenced by an identifier.
: a derived object like Array, Date or a function.

It returns "function" for callable objects, which belong to Object type.


Point to remember:
-----------------

The most reasonable way to check the type of a value seems the typeof operator.
The only problem is that it's horribly broken:

1) It returns "object" for null, which belongs to Null type.
2) It returns "function" for callable objects, which belong to Object type.
3) It can return (almost) anything it wants for non-standard non-callable objects.
4) For example, IE seemed to like "unknown". The only forbidden results are "function" and primitive types.



A data that is not an object and does not have any methods.
JavaScript has 5 primitive datatypes: string, number, boolean, null, undefined.