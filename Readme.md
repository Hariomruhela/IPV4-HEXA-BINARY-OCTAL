This project is use to convert the IPv4 address into the binary, octal, haxadecimal.
By using the HTML, CSS And JAVASCRIPT

JS description :~
we create a Function for binary.
In the Function we take the IP address as input in the form of "x.x.x.x".
 we spilt the IP address from (.)

 And the we use the For loop for traversing the array by index. 
 in the for loop first we change the items of array from string to number.
 then it  it converts the decimal value to binary using Number.toString(2).
 and then the result of binary values are combine back into an IP address formate(e.g. “11000000.10101000.00000001.00000001”).
and dispay  the result to the output area.
similar function for octal and hexadecimal.


WE create the another Funtion for check the validation of IP address.
in this function  splits the input IP address.
it check the there are length are 4 or not .if not, it returns false.
then covert into number.and check the arry are empty or not empty.with the range(0-255)
if  any validation are fail return false 
otherwise return ture.
