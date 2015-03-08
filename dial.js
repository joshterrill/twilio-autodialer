// Twilio Credentials 
var accountSid = ""; 
var authToken = "";
var applicationSid = "";
var twilioNumber = "";
var numbersFile = "numbers.json";
var sayUrl = "http://yourserver.com/say.xml";
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
var fs = require('fs'),
    obj

fs.readFile(numbersFile, callNumber)

function callNumber(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    for(i=0; i < obj.numbers.length; i++) {
      var number = obj.numbers[i];
      
      client.calls.create({ 
        to: number, 
        from: twilioNumber, 
        url: sayUrl, 
        applicationSid: applicationSid, 
        method: "GET",  
        fallbackMethod: "GET",  
        statusCallbackMethod: "GET",  
        ifMachine: "Hangup",  
        record: "false" 
      }, function(err, call) { 
        console.log("Call made to " + number); 
      });
    }
}
 
