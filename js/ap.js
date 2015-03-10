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

	var idx = 0,
	  score = 0;

	function populateQuestion() {
		console.log("popQues: " + idx)
		$('.question').text(questions[idx].question);
		$('.radio').each(function(index,radio) {
			console.log("labels")
			$("input[type = 'radio']").text(questions[idx].answers[index]);
			//radio.next('label').text(questions[idx].answers[index]);
		});
	}

	$('#begin').click(function() {
        console.log('click');
        $('#begin').hide();
        $('#submit').show();
        $('#question_wrapper').show();
    });

    $('#submit').click(function() {
    	console.log('submit');
    	$('#question_fact').show();
    	var inputVal = $("input[type='radio']:checked").val();

    	if (inputVal == questions[idx].correct) {
    		//message
    		score += 1;
    	} else {
    		//message
    	}
    	//fact info
    	idx += 1;
    	console.log("index: " + idx)

    	if (idx == questions.length) {
    		endQuiz();
    	} else {
    		$("input[type='radio']:checked").attr('checked', false);
    		console.log("Else, not finished")
    		populateQuestion();
    	}

    });

    populateQuestion();
});