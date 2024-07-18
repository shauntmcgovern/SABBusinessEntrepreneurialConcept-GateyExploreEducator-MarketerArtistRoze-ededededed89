<html>
<head>
<script type="text/javascript">

function errorHandler(message, url, line)
{
    var errorMessage = "Error: "+ message +"\n";
    errorMessage += "URL: "+ url +"\n";
    errorMessage += "Line Number: "+ line +"\n";
    alert(errorMessage);
    return true;
}
onerror = errorHandler;

function invokeError()
{
    allllert("Hello World:");
}
</script>
</head>
<body>
    <input type="button" value="View Error" on click="invokeError();" />
</body>

</html>