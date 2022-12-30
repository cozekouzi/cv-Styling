
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var mycommand = text.toLowerCase();

  if (mycommand == 'quit\n') {
    quit();
  }
  else if(mycommand == 'exit\n'){
    exit();
  }
  else if(mycommand.substring(0,5) == 'hello'){
    
    hello(mycommand.replace("\n","").substring(6));
  }

  else if(mycommand == 'help\n'){
    help();
  }

  else {
    unknownCommand(text);

  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed;
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"');
}


/**
 * Says hello
 *
 * @returns {void}
 */

function hello(){
  console.log('hello!');
  console.log("--------");
}



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!');
  console.log("-----------------------");
  process.exit();
}
/**
 * Exits the application
 *
 * @returns {void}
 */
 function exit(){
  console.log('Quitting now, goodbye!');
  console.log("-----------------------");
  process.exit();
}

function help(){
  console.log('------');
  console.log('hello:"Says hello plus the extra text the user inputs"');
  console.log('exit:"Exits the application"');
  console.log('quit:"Exits the application"');
  console.log('help:"Outputs available commands"');
  console.log("----------------------------------");

}
// The following line starts the application
startApp("Omar kouzi");
//help function

//======= hello argument 30/12/2022 AMK
function hello(name1,text){
  //------- remove empty spaces before and after the content then add an initial space as a separaitor from "hello"
  name1 =" "+ name1.trim();
  //------- in case of an empty content remove the empty space added above
  if(name1 == " "){
    name1="";
  }
  /*other way to compile the above code
  name1 =name1.trim();
  if(name1 != ""){
    name1 = " " + name1}*/
  
  console.log("hello"+name1+"!");
  
  console.log("--------------------");
}
