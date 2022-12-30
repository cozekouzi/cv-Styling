
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
  if (text == 'quit\n') {
    quit();
  }
  else if(text == 'exit\n'){
    exit();
  }
  else if(text.substring(0,5) == 'hello'){
    
    hello(text.replace("\n","").substring(6));
  }

  else if(text == 'help\n'){
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

//hello argument
function hello(name1,text){
  if(text == 'hello'){
    console.log("hello!")
  }
  else{
    console.log("hello "+name1+"!");
  }
 
  console.log("--------------------");
}