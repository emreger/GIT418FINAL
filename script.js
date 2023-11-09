/* Author Emily Reger 2023 - Final Project
    DON'T FORGET TO OBFUSCATE THIS FILE BEFORE UPLOADING ONLINE FOR THE PUBLIC

    Things to do:
    figure out ajax
    figure out the form
	Add more content to HTML
	Tidy up CSS 
*/

"use strict";

//Ajax/API https://dog.ceo/dog-api/documentation/random
$(function(){
    let dogImg = $("#dogImg");
    let urlImg = `https://dog.ceo/api/breeds/image/random/3`;

    $.ajax({
        url: `${urlImg}`,
        dataType: "json"
    }).done(function(data){
        let html = "";

        for(let i = 0; i < 3; i++){
            html += `<img src="${data.message[i]}" alt="Random picture from Dog API">`;
        }
        
        dogImg.html(html);
    }).fail(function(jqXHR){
        dogImg.html("There was a problem loading from the dog database");
    })
});

//jQuery Widget/Plugin
$("#accordion").accordion();

//Web Storage
function loadContactInfo(e){
	e.preventDefault();

	let output = document.getElementById("contactMsg");

	if(localStorage.getItem("fName")){ 
		output.innerHTML = `Hello and welcome back, ${localStorage.getItem("fName")}!`;
	} else {
		let fNameInput = document.getElementById("fName");
		let emailInput = document.getElementById("email");
		let commentInput = document.getElementById("comment");

		localStorage.setItem("fName", fNameInput.value);
		localStorage.setItem("email", emailInput.value);
		localStorage.setItem("comment", commentInput.value);

		output.innerHTML = `Hello and welcome, ${localStorage.getItem("fName")}<br>
		Email Address: ${localStorage.getItem("email")}<br>
		Comment: ${localStorage.getItem("comment")}.`;
		fNameInput.value = "";
		emailInput.value = "";
		commentInput.value = "";
	}
		
}


//Carousel https://plugins.jquery.com/slick/
$('.slick-carousel').slick({
	infinite: true,
	slidesToShow: 3, 
	slidesToScroll: 1, 
	autoplay: true
  });

//event handlers
document.getElementById("contactSubmit").addEventListener("click", loadContactInfo);