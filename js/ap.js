$(document).ready(function() {
	//quiz questions - array
	var questions = [{
		question: "What were the first golf balls made of?",
		answers: ["Round globs of cured rubber", "Thin leather filled with ground corn cobs","Thin leather covering stuffed with feathers","Ten layers of thin leather wrapped around a small pebble"],
		qnum: 0,
		correct: 2,
		fact: "The first golf balls were made of thin leather stuffed with feathers. Tightly-packed feathers made balls that flew the farthest. Feather balls were used until 1848."
		},
		{
		question: "", 
		answers: [""],
		qnum: 1,
		correct: 1,
		fact: ""
		},
		{
		question: "",
		answers: [""],
		qnum: 2,
		correct: 1,
		fact: ""
		},
		{
		question: "", 
		answers: [""],
		qnum: 3,
		correct: 1,
		fact: "",
		},		
		{
		question: "", 
		answers: [""],
		qnum: 4,
		correct: 1,
		fact: ""
	}]

	$('#begin').click(function() {
        console.log('click');
        $('#begin').hide();
        $('#submit').show();
        $('#question_wrapper').show();
    });

    $('#submit').click(function() {
    	console.log('submit');
    	$('#question_fact').show();
    })


});