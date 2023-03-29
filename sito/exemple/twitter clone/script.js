$(document).ready(() => {

    // mi son dimenticato il title, lo aggiungo cosi
    $('a .fa-ellipsis').attr('title', 'Altro').addClass('tooltip');
    // Attiva Tooltipster, thema di default va bene
    $('.tooltip').tooltipster();

    // Nasconde tutti .tendenze dopo il nono e li fa apparire al click del link
    $('.tendenze:gt(3)').addClass('hidden');
    $('#show').click(function () {
        $('.tendenze:gt(7)').slideToggle("hidden");
        if ($(this).text() === 'Mostra altro') {
            $(this).text('Mostra meno');
        } else {
            $(this).text('Mostra altro');
        }
    });

    // Funzione per gestire il popup
    $('.tendenze, #btn-setting, .error').click(function () {
        if ($(this).hasClass('error')) {// Se ha class error
            $('#alert-pnt').removeClass('hidden');
            return (false);
        } else {// Se non ha class error
            $('#alert').removeClass('hidden');
        }
    });
    // Il bottone meglio fuori dalla funzione popup
    $('.close-btn').click(function () {
        $('#alert, #alert-pnt').addClass('hidden');
    });
    
document.getElementById("login-btn").addEventListener("click", function() {
  document.getElementById("login-form").classList.remove("hidden");
});

});