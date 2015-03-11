$(document).ready(function() {
	//quiz questions - array
	var questions = [{
		question: "What were the first golf balls made of?",
		answers: ["Round globs of cured rubber", "Thin leather filled with ground corn cobs","Thin leather covering stuffed with feathers","Ten layers of thin leather wrapped around a small pebble"],
		qnum: 0,
		correct: 3,
		fact: "The first golf balls were made of thin leather stuffed with feathers. Tightly-packed feathers made balls that flew the farthest. Feather balls were used until 1848."
		},
		{
		question: "How many dimples are on a regulation golf ball?", 
		answers: ["336", "375", "409", "418"],
		qnum: 1,
		correct: 1,
		fact: "There are 336 dimples on a regulation golf ball"
		},
		{
		question: "How old was Tiger Woods when he recorded his first ace?",
		answers: ["Six years old", "Seven years old", "Eight years old", "Ten years old"],
		qnum: 2,
		correct: 3,
		fact: "Tiger Woods snagged his first ace at the tender age of eight years old."
		},
		{
		question: "What impact does temperature have on the travel of a golf ball?", 
		answers: ["No effect", "Small decrease in distance", "Small increase in distance", "Significant increase in distance"],
		qnum: 3,
		correct: 4,
		fact: "A golfer swinging a club at around 100 mph will carry the driver up to eight yards longer for each increase in air temperature of 25°F.",
		},		
		{
		question: "Where does the term birdie come from?", 
		answers: ["America", "England", "Scotland", "Ireland"],
		qnum: 4,
		correct: 1,
		fact: "The term birdie comes from an American named Ab Smith. While playing 1899, he played what he described as a 'bird of a shot', which became 'birdie' over time."
	}]

	var idx = 0,
	  score = 0;

	function populateQuestion() {
		console.log("popQues: " + idx)
		$('.question').text(questions[idx].question);
		$('.radio').each(function(index,radio) {
			$(radio).text(questions[idx].answers[index]);
			//radio.next('label').text(ans);
            $(radio).next('label').text(questions[idx].answers[index]);
		});
	}

	function endQuiz() {
		console.log("End Quiz")
	}

	$('#begin').click(function() {
        console.log('click');
        $('#begin').hide();
        $('#submit').show();
        $('#question_wrapper').show();
    });

    $('#submit').click(function() {
    	console.log('submit');
    	$('#question_fact').text(questions[idx].fact);
    	$('#question_fact').show();
    	var inputVal = $("input[type='radio']:checked").val();
    	console.log("inputVal: " + inputVal);
    	console.log("correct " + questions[idx].correct);

    	if (inputVal == questions[idx].correct) {
            
    		//message
    		score += 1;
    	} else {
    		//message
    	}
    	//fact info
    	idx += 1;

    	if (idx == questions.length) {
    		endQuiz();
    	} else {
    		$("input[type='radio']:checked").attr('checked', false);
    		console.log("Else, not finished" + " score: " + score)
    		populateQuestion();
    	}

    });

    populateQuestion();
});