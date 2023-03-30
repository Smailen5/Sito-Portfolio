$(document).ready(() => {

    // mi son dimenticato il title, lo aggiungo cosi
    $('a .fa-ellipsis').attr('title', 'Altro').addClass('tooltip');
    // Attiva Tooltipster, thema di default va bene
    $('.tooltip').tooltipster();
    $('.cnt-aside > *').addClass('icon');

    // Nasconde tutti classe tendenze dopo il settimo figlio e li fa apparire al click del link
    $('.tendenze:gt(3)').addClass('hidden');
    $('#show').click(function () {
        $('.tendenze:gt(7)').slideToggle("hidden");
        // Cambia il testo del link "Mostra altro" in "Mostra meno" al click
        if ($(this).text() === 'Mostra altro') {
            $(this).text('Mostra meno');
        } else {
            $(this).text('Mostra altro');
        }
    });

    // Funzione per gestire il popup
    $('.tendenze, #btn-setting,  .icon, .error').click(function () {
        // Se ha class error
        if ($(this).hasClass('error')) {
            $('#alert-pnt').removeClass('hidden');
            return (false);
        } else {
            // Se non ha class error
            $('#alert').removeClass('hidden');
        }
    });
    // Il bottone meglio fuori dalla funzione popup
    $('.close-btn').click(function () {
        $('#alert, #alert-pnt').addClass('hidden');
    });

    // Variabili con ciclo for per gestire tuti i figli del div id back-ctn-form per rimuovere tutte le classi hidden
    var backForm = document.getElementById("back-ctn-form");
    var children = backForm.querySelectorAll("*");
    for (var i = 0; i < children.length; i++) {
        children[i].classList.remove("hidden");
    }
    // Gestisce il click al bottone Login
    document.getElementById("login-btn").addEventListener("click", function () {
        document.getElementById("back-ctn-form").classList.remove("hidden");
    });

});