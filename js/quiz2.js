// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('a').click(function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!");
})(jQuery);

function goodbye(){
  document.getElementById("div").style.display = "none";
  document.getElementById("goodbye").style.display = "block";
}
function happy(){
  document.getElementById("hiddenText").style.display = "block";
}
function changeColor(){
  var list=["red","blue","green"];
  var index=0;
  for (var i=1;i<4;i++){
    var id="list"+i;
    document.getElementById(id).style.color = list[index];
    index++;
  }
}

function showAccordion(){ //For some reason, you have to hit the button twice to show the text for some reason, but after that, it works each time you click it once.
  var status=document.getElementById("accordionText").style.display;
  if (status==="none"){
    document.getElementById("accordionText").style.display="block"
  }
  else{
    document.getElementById("accordionText").style.display="none"
  }
}