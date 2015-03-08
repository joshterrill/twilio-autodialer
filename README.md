# twilio-autodialer
an autodialer written in nodejs using the twilio api

### installation
```
git clone https://github.com/joshuaterrill/twilio-autodialer.git
cd twilio-autodialer/
npm install
```

### setting up a twiml app
1. Login to twilio and go to https://www.twilio.com/user/account/apps
2. Create a twiml app and point the HTTP post voice request URL to http://yourserver.com/twilio-autodial.xml
3. Save it and get your applicationSid, accountSid, and authToken

### configuring the app
1. Open ``` dial.js ``` and replace all the empty variables at the top of the file with the proper values from your account
2. Load your numbers into ``` numbers.json ```
3. Configure ``` say.xml ``` to say what you want it to say
4. Run ``` node dial.js ```

### to do
1. Support loading numbers via URL / REST
2. Turn into an NPM package

License: MIT