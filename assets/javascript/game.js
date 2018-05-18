$(document).ready(function(){
    
    var randomValue = Math.floor(Math.random() * 130 + 17) 
    $('#scoreCount').text(randomValue);


    var redValue= Math.floor(Math.random() * 8 + 2);
    var yellowValue= Math.floor(Math.random() * 9 + 2);
    var greenValue= Math.floor(Math.random() * 7 + 2);
    var blueValue= Math.floor(Math.random() * 13 + 2);
    var totalScore = 0; 
    var wins = 0;
    var losses = 0;


$('#winsTracker').text(wins);
$('#lossTracker').text(losses);
$('#scoreTracker').text(totalScore);


    function reset(){
        randomValue = Math.floor(Math.random() * 130 + 17);
        $('#scoreCount').text(randomValue);
        redValue= Math.floor(Math.random() * 8 + 2);
        yellowValue= Math.floor(Math.random() * 9 + 2);
        greenValue= Math.floor(Math.random() * 7 + 2);
        blueValue= Math.floor(Math.random() * 13 + 2);
        totalScore= 0;
        $('#scoreTracker').text(totalScore);
        } 


    function youwon(){
        alert("You won! Congradulations!");
        wins++; 
        $('#winsTracker').text(wins);
        reset();
    }


    function toobad(){
        alert ("You didn't get it, too bad!");
        losses++;
        $('#lossTracker').text(losses);
        reset()
    }


$('.redCrystal').on('click', function(){
    totalScore = totalScore + redValue;
    $('#scoreTracker').text(totalScore); 
        if (totalScore == randomValue){
            youwon();
        }
        else if (totalScore > randomValue){
            toobad();
        }   
    })


$('.yellowCrystal').on('click', function(){
    totalScore = totalScore + yellowValue;
    $('#scoreTracker').text(totalScore);
        if (totalScore == randomValue){
            youwon();
        }
        else if (totalScore > randomValue){
            toobad();
        } 
    })

    
$('.greenCrystal').on('click', function(){
    totalScore = totalScore + greenValue;
    $('#scoreTracker').text(totalScore); 
        if (totalScore == randomValue){
            youwon();
        }
        else if (totalScorel > randomValue){
            toobad();
        }
    }) 


$('.blueCrystal').on('click', function(){
    totalScore = totalScore + blueValue;
    $('#scoreTracker').text(totalScore); 
        if (totalScore == randomValue){
            youwon();
        }
        else if (totalScore > randomValue){
            toobad();
        } 
    });
});

    