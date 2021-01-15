// 1. déactiver envoi si pas checkbox


// 2. corriger prbl src d'img

// 3. blink text
$('#frame').css('height', '20px');
function blinks (){
    $('#blink').fadeToggle(500);
}

setInterval(blinks, 1000);

// 4.
$('tr').siblings(':even').css('background', 'grey');

// 5. imprimer


// 6.
let nbr = 250;
$('#car').text(nbr);

$('#message').keyup(function () {
    let text = $('#message').val().length;
    let left = nbr - text;
    if(left > 0){
        $('#car').text(left);
    }
    else {
        alert('il reste ' + left + ' caractere');
    }
})

