<!--Web Publishing with HTML && CSS, Lesson 15, Laura Lemay && Rafe Colburn, 2006 SAMS && Hour 16, 2020 SAMS -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" version="-//W3C/DTD XHTML 1.1//EN" xml:lang="en">
<!--
//C#  *9.0* in a Nutshell(The Definitive Reference)'
<script>
string s1 = "Hello";
string s2 = "First Line\r\nSecond Line";
string s3 = @"\\server\fileshare\helloworld.cs";

Console.Write (new string ('*', 10)); //*********

char[] ca = "Hello".ToCharArray();
string s = new string (ca);   //s="Hello"

string empty = "";
Console.WriteLine (empty == "");   //True
Console.WriteLine (empty == string.Empty);   //True
Console.WriteLine (empty.Length == 0);   //True

string nullString = null;
Console.WriteLine (nullString == null);   //True
Console.WriteLine (nullString == "");   //False
Console.WriteLine (nullString.Length == 0);   //NullReferenceException
	    
</script>-->
<head>
    <title>AJAX Example</title>
    <script languague="JavaScript">
    var request = false;
    var ajaxreq = false, ajaxCallback;
	
    function ajaxRequest(filename) {
	    try {
	    // Firefox / Chrome / Edge / Others
	    ajaxreq = new XMLHttpRequest();
	    } catch (error) {
	    	try {
	    	// IE 5 / IE 6
			ajaxreq = new ActiveXObject("Microsoft.XMLHTTP");
	    	} catch (error) {
			return false;
	        }
            }
	    ajaxreq.open("GET", filename);
	    ajaxreq.onreadystatechange = ajaxResponse;
	    ajaxreq.send(null);
    }
    function ajaxResponse() {
	     if (ajaxreq.readyState != 4) return;
	     if (ajaxreq.status == 200) {
	     	//if the request succeeded...
	     	if (ajaxCallBack) ajaxCallBack();
	     } 
	     else alert("Request failed: " + ajaxreq.statusText);
	     return true;
    }
	
    function sendAjaxRequest(toUrl) {
        if (window.XMLHttpRequest) {
            request = newXMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (request) {
            request.onreadystatechange = processReadyStateChange;
            request.open('GET', toUrl, true);
            request.send("");
        }
        
     }
     function updateTemperature(msg) {
        var contentDiv = document.getElementById("ajaxTarget");
        contentDiv.innerHTML = msg;
     }
     function getLatestTemp() {
        sendAjaxRequest("temp.txt");
     }
     function processReadyStateChange() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                updateTempature(request.responseText);
            }
            else {
                alert("An error occurred.");
            }
        }
     }
     </script>
</head>

<body>
    <p>
        Current Tempature:
        <div id="ajaxTarget" style="font-size: x-large;"> 90 degrees </div>
    </p>
    
    <p>
        <button onclick="getLatestTemp() "> Update Tempature </button>
    </p>
</body>
<!--
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
    request.onreadystatechange = processReadyStateChange;
    request.open("POST", "remote.cgi", true);
    request.send("user=test");
        
    <a href="/" id="mylink" onclick="linkCLicked()">My link</a>
    document.getElementById("mylink").onclick = linkClicked;
    request.onreadystatechange = processReadyStateChange;

Chapter 15 direct quote
"As I said before, a real-life example would be significantly more complex, but this example illustrates how AJAX is used in a simple case.
Unlike the other examples you've seen in this book so far, you'd have to put both the HTML page && tempt.txt file on a web server in order
for the example to work. XMLHttpRequest relies on the HTTP protocol, && its security constraints require the target to be on the same server as
the page making the call."
-->
</html>
