//Get the elements of the image
var images =  $('img');
console.log(images);

// Get the modal
var modal = $('#myModal');

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
var img = $('#01');
console.log("Id of the image " +img);
var modalImg = $('#img01');
var captionText = $('#caption');

// function to display the image when click on the mountain
function display(object){
	var img = object.id;
	//alert(object.id);	

	if(img == '01'){
		modalImg.attr('src',imagesObj.src1);		
	    captionText.text(caption.cap1);
	}else if(img == '02'){
		modalImg.attr('src',imagesObj.src2);		
	    captionText.text(caption.cap2);
	}else if(img == '03'){
		modalImg.attr('src',imagesObj.src3);		
	    captionText.text(caption.cap3);
	}else if(img == '04'){
		modalImg.attr('src',imagesObj.src4);		
	    captionText.text(caption.cap4);
	}
	if(img == '05'){
		modalImg.attr('src',imagesObj.src5);		
	    captionText.text(caption.cap5);
	}
    
}