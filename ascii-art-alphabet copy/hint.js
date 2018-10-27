/*
var one_array = ["ABC", "123", "-!-"];

var another_array = ["DEF", "456", "**&"];

var a_third_array = ["GHI", "789", "^#@"];

var space_array = ["  ", "  ", "  "];
 

for (var j=0; j<3; j++) {

	var temp_string = one_array[j] + space_array[j] + another_array[j] + space_array[j] + a_third_array[j];

	console.log(temp_string);

} */

//arrays need 7 characters and 7 sets of data

//this is an object of arrays

//an object is a collection of properties
//property is an association between a key and a value

var alpha = {

	a: [" _ _ _ ", "|* * *|", "|*|\xAF|*|", "|* \xAF *|", "|*|\xAF|*|", "|*| |*|", " \xAF   \xAF "],

	b: [" _ _ _ ", "|* * *|", "|*|\xAF|*|", "|* \xAF *|", "|*|\xAF|*|", "|* \xAF *|", " \xAF \xAF \xAF "],

	c: [" _ _ _ ", "|* * *|", "|*|\xAF\xAF\xAF\xAF", "|*|    ", "|*|    ", "|*|\xAF\xAF\xAF|"," \xAF\xAF\xAF\xAF\xAF "],

	d: [" _ _ _ ", "|*   *|", "|*|\xAF|*|", "|*| |*|", "|*| |*|", "|* \xAF *|", " \xAF\xAF\xAF\xAF\xAF "],

	e: [" _ _ _ ", "|* * *|", "|*|\xAF\xAF\xAF\xAF", "|* \xAF\xAF\xAF|", "|*|\xAF\xAF\xAF ", "|* \xAF\xAF\xAF|", " \xAF\xAF\xAF\xAF\xAF "],

	f: [" _ _ _ ", "|* * *|", "|*|\xAF\xAF\xAF ", "|*\xAF\xAF|  ", "|*|\xAF   ", "|*|    ", " \xAF     "],

	g: [" _ _ _ ", "|* * *|", "|*|\xAF\xAF\xAF ", "|*|   _", "|*|\xAF|\xAF|", "|* \xAF *|", " \xAF\xAF\xAF\xAF\xAF "],

	h: [" _   _ ", "|*| |*|", "|*|_|*|", "|* _ *|", "|*| |*|", "|*| |*|", " \xAF   \xAF "],

	i: [" _ _ _ ", "|__ __|", "  |*|  ", "  |*|  ", "  |*|  ", "|\xAF\xAF \xAF\xAF|", " \xAF\xAF\xAF\xAF\xAF "],

	j: ["     _ ", "    |*|", "    |*|", " _  |*|", "|*| |*|", "|* \xAF *|", " \xAF\xAF\xAF\xAF\xAF "],

	k: [" _   _ ", "|*| /*/", "|*|/*/ ", "|***<  ", "|*|\\*\\ ", "|*| \\*\\", " \xAF   \xAF "],

	l: [" _     ", "|*|    ", "|*|    ", "|*|    ", "|*|    ", "|* \xAF\xAF\xAF|", "  \xAF\xAF\xAF\xAF "],

	m: [" _   _ ", "/ \\ / \\", "|* v *|", "|* v *|", "|*| |*|", "|*| |*|", " \xAF   \xAF "],

	n: [" _   _ ", "|*\\ |*|", "|* \\|*|", "|*|\\ *|", "|*| |*|", "|*| |*|", " \xAF   \xAF "],

	o: [" _ _ _ ", "|*   *|", "|*|\xAF|*|", "|*| |*|", "|*| |*|", "|* \xAF *|", " \xAF\xAF\xAF\xAF\xAF "],

	p: [" _ _ _ ", "|* * *|", "|*|\xAF|*|", "|*\xAF\xAF\__|", "|*|\xAF   ", "|*|    ", " \xAF     "],

	q: [" _ _ _ ", "|*   *|", "|*|\xAF|*|", "|*| |*|", "|*|\\|*|", "|* \xAF\\*|", " \xAF\xAF\xAF\xAF\\ "],

	r: [" _ _ _ ", "|* * *|", "|*|\xAF|*|", "|* \xAF\_/ ", "|*|\\*\\ ", "|*| \\*\\", " \xAF    \xAF"],

	s: [" _ _ _ ", "|*/-\\ |", " \\*\\ \xAF ", "  \\*\\  ", "   \\*\\ ", "|\xAF\\-/*|", " \xAF\xAF\xAF\xAF\xAF "],

	t: [" _ _ _ ", "|*****|", "\xAF\xAF|*|\xAF\xAF", "  |*|  ", "  |*|  ", "  |*|  ", "   \xAF   "],

	u: [" _   _ ", "|*| |*|", "|*| |*|", "|*| |*|", "|*| |*|", "|* \xAF *|", " \xAF\xAF\xAF\xAF\xAF "],

	v: [	" _   _ ",
			"|*| |*|",
			"|*| |*|",
			"\\*\\ /*/", 
			" \\*V*/ ", 
			"  \\*/  ",
			"   \xAF   "],

	w: [	"__   __",
			"|*| |*|",
			"|*| |*|",
			"|* ^ *|",
			"|*/ \\*/",
			"\\*/\xAF\\*/",
			" \xAF   \xAF ",],

	x: [	"__   __",
			"|*| |*|",
			"\\*\\ /*/",
			" \\*V*/ ",
			"/*/ \\*\\",
			"|*| |*|",
			"\xAF\xAF   \xAF\xAF"],

	y: [	"__   __",
			"|*| |*|",
			"\\*\\ /*/",
			" \\*V*/ ",
			"  |*|  ",
			"  |*|  ",
			"   \xAF   "],

	z: [	" _ _ _ ",
			"|*****/",
			"\xAF\xAF\xAF/*/ ",
			"  /*/  ",
			" /*/___",
			"/*****|",
			" \xAF \xAF \xAF "],
/*
	.: ["       ",
		"       ",
		"       ",
		"       ",
		"___    ",
		"|*|    ",
		"\xAF\xAF"] */

}
  


//This converts user's input to lowercase so the program
//can handle uppercase and lowercase input
userText = (process.argv[2])
LowerUserText = userText.toLowerCase();

//Function is called with user input all in lower case
Ascii(LowerUserText)


//this portion of the function takes the user's input and converts it to a two dimensional array
//a new array is created called "line" that holds the object keys
//related to the letters of the user input
line = [];

function Ascii (text){
    var line =[]
    for (i = 0; i < text.length; i++){
        line.push(alpha[text[i]])

    }


console.log('\n')


//This section iterates through the five horizontal lines of each
//letter in the user input

//The two for loops are for the two dimentions of the array

//this for loop is for the lines within a specific letter
for (i=0; i<7; i++) {

//this for loop is for the letters in the user input
//which has been put in the array "line"

//process.stdout.write is equivelent to console.log, without
//the \n that console.log adds


    for (k=0; k<line.length; k++) {
        process.stdout.write(line[k][i] + ' ');
        }
    process.stdout.write('\n');

    }

console.log('\n')

}





/* function ConstructString(inputString) {
    alphabetArray = [];

    for (var i = 0; i < inputString.length; ++i) {
        currChar = inputString[i].toLowerCase();

        if (currChar in alphabet) {
            alphabetArray.push(alphabet[currChar]);
        } else {
            console.error("Unrecognized character '${currChar}'");

            return null;
        }
    }
    return alphabetArray;
}

function PrintString(inputString) {
    wordString = '';
    alphabetArray = ConstructString(inputString);

    for (var height = 0; height < 3; ++height) {
        for (var i = 0; i < alphabetArray.length; ++i) {
            wordString += alphabetArray[i][height] + alphabet['em_spacer'][height];
        }
        wordString += '\n';
    }
    console.log(wordString);
} 

var inputString = process.argv[2];
PrintString(inputString); 
/*	var alphabet_array ["a_array", "b_array", "c_array",  ]; */

