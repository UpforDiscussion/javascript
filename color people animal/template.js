/*
 *  Narrative description of user story
 *
 *  create 3 arrays: [animal], [people], [colors]
 *  ask user: do you want to create an animal, person, color, or quit
 *  user chooses, prompt for how many colors
 *  collect colors until number selected has been provded
 *  add to array.
 *  make work for all three arrays
 *  loop until user quits 
 *  ask user: do you want to delete something? y/n
 *  if yes, what do you want to delete--color, animal, person
 *  user selects array
 *  return list of array items
 *  ask: which array item to delete?
 *  delete that array item
 *  loop until user says no
 *  provide final array results
 *
push
pop
tostring


 */

 $(function(){

	var color =[] //set all three variables to be arrays//

	var response = prompt('do you want to create an (a)nimal, (p)erson, (c)olor?, or (q)uit?'); //correct

	while (response != 'q') //use while so you can set up a loop//
	{
		var count = prompt('How many would you like?') //this is commont o the below 3 if else clauses//
		count = parseInt(count) //take the user entred number which is stored as string and convert to a number//

		if(response == 'a')
		{
			for(var i = 0; i < count; 1++)

				var selection = prompt('Enter an animal'); //this is where the user tells you what animal they want to add//
				animals.push(selection);  //animals the array, push what?, selection from above//

		else if(response == 'p') //or, if they entered people../	

			for(var i = 0; i < count; 1++) //figure out what this is//

				var selection = prompt('Enter an person'); //this is where the user tells you what animal they want to add//
				persons.push(selection);  //persons the array, push what?, selection from above//			

				//do again for fruits or whatever//

	var response = prompt('do you want to create an (a)nimal, (p)erson, (c)olor?, or (q)uit?'); //this is here at the bottom because its a loop, so you need to ask it again until the user quits

		response = prompt('do you want to remove a bunch of stuff, fill in Avi')
		while(response != q_)

			if  response == c//do 1 if 2 else if estatements about c, p, a with the following:
				console.log('colors = ' + colors); //colsole reads: "Colors : Red, blue, etc what sin the array"
				var del = prompt('which one do you want to delete?')
				var index = colors.indexof(del); //figure out what colors.indexof does
				color.splice(index, 1) //adding variable index to position 1, after position 0

			//do this three times

 //note that there isnt a repeat of the question as in the part above
	console.log('here are your colors : ' + colors) //spits out here are your colors ; red green blue etc
	//do two more times

	//add curly braces and semi colons.





/*



var response = [];

if (var response != 0) {};

array

var animal = [];
var person = [];

while (response != 'q')
{
	colors.push(response);
	console.log('you just typed in :'+ response);
	response = prompt('Enter a color or (q)uit');
}


*/

 });

