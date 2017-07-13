//Get the elements of the image
var images =  document.getElementsByTagName("img");
console.log(images);

// Get the modal
var modal = document.getElementById('myModal');

var imagesObj = {
	src1:"images/Hillary_and_tenzing mt everest.jpg",
	src2:"images/Compagnoni_summit_K2.jpg",
	src3:"images/Kangchenjunga First Ascent - George Band On Kangchenjunga Summit May 25, 1955.jpg",
	src4:"images/170px-Ernst_Reiss.jpg",
	src5:"images/lionel-terray-parviendra-au-sommet-le-26-mai-1964-brandissant-le-drapeau-francais-aux-cotes-de-jacques-soubis-1400878208.jpg"
};	

var caption = {
	cap1: "Sir Edmund Hilary and Tenzing Norgay",
	cap2: "Lino Lacedelli and Achille Compagnoni",
	cap3: "Joe Brown and George Brand	",
	cap4: "Ernst Reiss and Fritz Luchsinger",
	cap5: "Lionel Terray and Jean Couzy"
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('01');
console.log("Id of the image " +img.ELEMENT_NODE);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

/*img.onclick();
	modal.style.display = "block";
    modalImg.src = "images/Hillary_and_tenzing mt everest.jpg";
    captionText.innerHTML = "Sir Edmund Hilary and Tenzing Norgay";*/


// function to display the image when click on the mountain
function display(object){
	var img = object.id;
	/*alert(object.id);*/
	modal.style.display = "block";

	if(img == '01'){
		modalImg.src = imagesObj.src1;
	    captionText.innerHTML = caption.cap1;
	}else if(img == '02'){
		modalImg.src = imagesObj.src2;
	    captionText.innerHTML = caption.cap2;
	}else if(img == '03'){
		modalImg.src = imagesObj.src3;
	    captionText.innerHTML = caption.cap3;
	}else if(img == '04'){
		modalImg.src = imagesObj.src4;
	    captionText.innerHTML = caption.cap4;
	}
	if(img == '05'){
		modalImg.src = imagesObj.src5;
	    captionText.innerHTML = caption.cap5;
	}
    
}

/*img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/Hillary_and_tenzing mt everest.jpg";
    captionText.innerHTML = "Sir Edmund Hilary and Tenzing Norgay";
}*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}


/*function display(){

	var images = [
		"images/Hillary_and_tenzing mt everest.jpg",
		"images/Compagnoni_summit_K2.jpg",
		"images/Kangchenjunga First Ascent - George Band On Kangchenjunga Summit May 25, 1955.jpg",
		"images/170px-Ernst_Reiss.jpg",
		"images/lionel-terray-parviendra-au-sommet-le-26-mai-1964-brandissant-le-drapeau-francais-aux-cotes-de-jacques-soubis-1400878208.jpg",
	];

	document.getElementById('demo').style.display = 'block';

	/*for(i = 0; i < images.length; i++){					
		var href = document.getElementById(i.toString());		
		console.log(href);
		var p = document.getElementById("demo"+i.toString());
		p.setAttribute('src',images[i]);					
	}*/								

	/*var p = document.getElementById("demo");
	p.setAttribute('src','images/170px-Ernst_Reiss.jpg');*/
//}


