///* code goes here */
//document.getElementById("first");

//document.getElementById("first").firstChild;

//document.getElementById("first").firstChild.nextSibling;


var stories = document.getElementById("stories");
for (i=0; i<stories.childNodes.length; i++)
{
    console.log("child " + i + " =" + stories.childNodes[i] +
            " nodeType=" + stories.childNodes[i].nodeType);
    if (stories.childNodes[i].nodeType == 1) {
        stories.childNodes[i].style.backgroundColor = "green";
    }   
}