var data = {
	quotes: ["Only I can change my life. No one can do it for me." , "The greatest gift of life is friendship, and I have received it." , "Do not take life too seriously. You will never get out of it alive." , "The good life is one inspired by love and guided by knowledge."] 
}

function generate()
{
	var rand = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
	item= data.quotes[rand];
	//console.log(item);
	main= document.getElementById("quote");
	main.innerHTML = item;
}
window.addEventListener("onLoad", generate() );
genb = document.getElementById("newq");
console.log(genb);
genb.addEventListener("click", function() {
	var rand = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
	item= data.quotes[rand];
	main= document.getElementById("quote");
	while(item==main.innerHTML)
	{
		var rand = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
		item= data.quotes[rand];
	}
	main.innerHTML = item;
} );
tb= document.getElementById("tweet");
tb.addEventListener("click", function(){
	window.open('https://twitter.com/intent/tweet?text=' + document.getElementById("quote").innerHTML);
	//this.attr("href", 'https://twitter.com/intent/tweet?text=' + document.getElementById("quote").innerHTML)
})
