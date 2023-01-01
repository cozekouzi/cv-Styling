
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
  help();//so the user knows what this app do
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
  //turn input to lowercase letters so that no error ocure if upper case letters appear
  var mycommand = text.toLowerCase();

  if (0 == mycommand.indexOf('quit')) {
    quit();
  }
  else if(0 == mycommand.indexOf('exit')){
    exit();
  }
  else if(0 == mycommand.indexOf('hello')){
   // hello();
    hello(text.replace('\n','').substring(6));
  }

  else if(0 == mycommand.indexOf('help')){
    console.log('------');
    help();
  } 
  else if(0 == mycommand.indexOf('add')){
    add(text.replace('\n','').substring(3));
  } 
  else if(0 == mycommand.indexOf('list')){
    list();
  }
  else if(0 == mycommand.indexOf('remove')){
    remove(text.replace('\n','').substring(6));
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

/*function hello(){
  console.log('hello!');
  console.log("--------");
}*/



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!');
  console.log('-----------------------');
  process.exit();
}
/**
 * Exits the application
 *
 * @returns {void}
 */
 function exit(){
  console.log('Exitting now, goodbye!');
  console.log('-----------------------');
  process.exit();
}
//help functions outputs all commands available for the user and the role of each one
function help(){
  console.log('add:"Adds a task to My list."');
  console.log('exit:"Exits the application."');
  console.log('hello:"Says hello plus the extra text the user inputs."');
  console.log('help:"Outputs all commands available for the user and the role of each one."');
  console.log('list:"List my tasks."');
  console.log('quit:"Exits the application."');
  console.log('remove:"Removes a certain task from My list."')
  console.log('----------------------------------');
}
// The following line starts the application
startApp('Omar kouzi');
//help function

//======= hello function
function hello(name1){
  //------- remove empty spaces before and after the content then add an initial space as a separaitor from "hello"
  name1 =' '+ name1.trim();
  //------- in case of an empty content remove the empty space added above
  if(name1 == ' '){
    name1='';
  }
  /*other way to compile the above code
  name1 =name1.trim();
  if(name1 != ""){
    name1 = " " + name1}*/
  
  console.log('hello'+name1+'!');
  
  console.log('--------------------');
}

const mylist = [];
function list(){
console.log('My List\n'+'--------');

mylist.forEach((task, i)=>{
  console.log('['+`${i+1}`+'] '+task);
});
}
function add(newtask){
  newtask = newtask.trim();
  mylist.push(newtask);
  console.log(`${newtask} was added to your list`);
  console.log('----------------------------');
}
function remove(task,i){
  task = task.trim();
  task = i+1;
  mylist.splice(task);
}







