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

// 5.
