# Creating my own website to host with 
# CSS & Javascript functions in a custom HTML'GG'BB""-'   ?/'
here you will find location. GEO location, that is now. Here && now in Barack Obama's court of law && in real understood reality right here.
* The RozeShowCaseTitleColumnRow.html is working with margins & you can see all my artwork.
* I have not hosted it, freely as of yet. 
* Will incorporate more borders, more description in the body & try to include some javascript functions. 
* Then wrap it up with a pretty jQuery feature.//yet to be done.
* //I cannot upload an entire folder file through this Chromebook only the individual files.
* Just added 2 buttons & 1 image-class-button for my LinkedIn, the twitter account & my Github Profile.
* Centered the titles of the illustrations & gave the buttons borders & sizes.
* Spaced out the images better.
* Reordering of images & better margins & more br's
* The images are being selected from the folder they are in now.
* Now the first 3 images if you click one of them go to new webpages with a bigger sole image.
* Now the illustrations fit correctly in the next html page. Then just click the browswer back button.
* Completed html pages for the top six images. So if a user clicks the image they can enlarge.
* Now images 1-9 can be enlargedski's & you can go backski's
* Now images 1-12 have there own webpage & you can then go back.
* images 1-15 can now be enlarged.
* All images have their own webpage if you click them && now you can clearly see them bigger. Full screen.
* Now I have an embedded Twitter widget. That updates automatically from the Twitter account, @rozeNameRoze.
* [Javascript API](https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/overview), I would of like to have learned that manually with javascript but Twitter does the work for you.
* //
Facebook Login for the Web with the JavaScript SDK
This document walks you through the steps of implementing Facebook Login with the Facebook SDK for JavaScript on your webpage.

Before You Start
You will need the following:

A Facebook Developer Account 
A Facebook App ID  for a website
Basic Automatic Login Example
The following code sample shows you how to add the Facebook SDK for Javascript to your webpage, initialize the SDK, and, if you are logged in to Facebook, will display your name and email. If you are not logged into Facebook, the login dialog popup window will automatically be displayed.

The public_profile permission , which allows you to get publicly available information such as name and profile picture, and the email permission  do not require app review and are automatically granted to all apps using Facebook Login.

<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>

    <h2>Add Facebook Login to your webpage</h2>

      <!-- Set the element id for the JSON response -->
    
      <p id="profile"></p>

      <script>
  
        <!-- Add the Facebook SDK for Javascript -->
  
        (function(d, s, id){
                              var js, fjs = d.getElementsByTagName(s)[0];
                              if (d.getElementById(id)) {return;}
                              js = d.createElement(s); js.id = id;
                              js.src = "https://connect.facebook.net/en_US/sdk.js";
                              fjs.parentNode.insertBefore(js, fjs);
                            }(document, 'script', 'facebook-jssdk')
        );


        window.fbAsyncInit = function() {
            <!-- Initialize the SDK with your app and the Graph API version for your app -->
            FB.init({
                      appId            : '{your-facebook-app-id}',
                      xfbml            : true,
                      version          : '{the-graph-api-version-for-your-app}'
                    });
            <!-- If you are logged in, automatically get your name and email adress, your public profile information -->
            FB.login(function(response) {
                      if (response.authResponse) {
                           console.log('Welcome!  Fetching your information.... ');
                           FB.api('/me', {fields: 'name, email'}, function(response) {
                               document.getElementById("profile").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email
                           });
                      } else { 
                           <!-- If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email -->
                           console.log('User cancelled login or did not fully authorize.'); }
            });
        };

      </script>

  </body>
</html>//
* Excellent, 2/28/22
* Thats a nice little footer.
* now the footer Rescales to every ScreenSize && Device.
* The Recscalin' Footer is filled in with Gray to match, the headers are all White && the body is now grey style="background-color:#808080;"
* Row && Column have margin-right && margin-left now are both 0.0 no padding is necessary.
* Different data-widget-id for twitter feed.
* Now you got a weather js.widget in the bottom there.
* This weatherwidget-io <weatherwidget-io> is displaying in Fahrenheit from this websites javascript [Forcast 7](https://forecast7.com/en/41d88n87d63/chicago/?unit=us)
* I need to purchase an API to be able to use Accuweather to build javascript functions to communicate with its API
* Now the buttons open up their webpages into a new tab with the "_blank" command.
* Now all of the column images have the same border color as the color of the buttons, strawberry. Then the font inside is a banana yellow.
* The button borders are now the hex color #000000 which is solid black.
* I could only make the weather widget get a strawberry border. The twitter widget is not accepting a border perhaps because u can scroll.
* Now if you click one of the pieces && you are brought to the next page with it in full screen it has the 
#ffe347 banana yellow background color.
* The two buttons I have on either side of the Twitter fa-fa button are the font-family Agency FB, Impact, monospace &&
  the titles of each piece of Artwork are now part of the w3 school example font-family Lucida Console, Courier New, monospace.
* DOM stands for Document Object Model. Very similar to a HUD you see in a video game. Or the Heads Up Display a pilot uses to see information.
* Updated one of the borders to the hex color, #98FB98, otherwise known as the Moschino Drama, Big Hair, Big Scoop.
* The DHTML Test Example.
* For a client to server. 
  All you need is a private server where you have access. Amazon || Microsoft.
  Then from there.
  You build a client to communicate with the server && the server, is where all your fixed && resting information && data
  is now stored so you can use the client to display, edit && save with your personal client which is what the user sees.
  The client is the webpage. The server is a data server && handles your traffic && a list of other things for your client.
  It is then housed && owned by a company of my choice && I use my personal && designated server space I purchased for my client so I can then host it on the world wide web. You have 2 different codebases. Both are housed on your chosen company servers. You have your server codebase && your client's codebase. The client && the server can be saved && edited && updated through github or another company of your choosing. The server code is written differently than the clients codebase.
* Just added a JS function that if you click the footer which is now a 'big button.' You can change the background color to really Red && see the webpage with a new background color && I have yet to put another command to change to any another .bg color available (there is only so many HTML can accept) || javascript back to the original chosen grey colour. For now if you click your browsers or mobile phones refresh button the background will go back to grey.
* I just added my Instagram account button which pulls the skin && icon from this library uploaded stylesheet from cloudflare. Right above the twitter feed updated.
* Now all of the buttons are correctly 'Centered.' The 'footer button' is a button all by itself. It isnt part of the 'button' class in my css.
* [Facebook Profile](https://www.facebook.com/shaun.mcgovern.90/), if you wanna see it. 
* I could make my Exquisite Man && his brand switch over to the book. same thing.
* You have a small team of developers. You have 1, senior developer leading the way, deciding how to execute the client && server then successfully hosting it on a web server of the, client's choosing. Then the senior developer develops milestones for the junior developer && this is what exactly to do && what pieces to put where. You incoporate the visual artist's && media designer's work, you work with the business company suppling the store the client wants to use, the various hyperlinks && other media's the client has, you include the other companies that the client wants to work with. Then you successfully host it online. At that time, you have to communicate with the web hosting company but as long as the company can see the files most likely on their web servers than they can publicly display the web address for everyone to see && use. Then if you get further into that, what the website hosting company is doing is communicating with our government && other subsidaries in order to host the website online, publicly. Which means they pay these systems in order to do business && that is host websites, any && all kinds.
* From this point, I pick what company is interested in me. I deliver a mock-up of what programming && computer design tools they are using. So I can hit the ground running.
* This is happening on Twitter's end.:(); as you can see I imported a different widget, that works as you can see in the ahref thatitisin' which is the command--now it is fixxed on Twitter's end but as you can see it is elongated yet to be primed, web developed to exacted specifications and so on(:0:;(:):';"'?/<,.>M:;"'?/So until Twitter gets it act together it will display, "Nothing to see here - yet
                                                                      n/'When they Tweet, their Tweets will show up here.*\n"" instead of the usual twtrr-timeline;'BB
