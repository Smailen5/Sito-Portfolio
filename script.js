$(document).ready(() => {
    $('#menu').click(() => {
        $('#menu').toggleClass('openmenu');
        $('#tendina').slideToggle('slow')
        // $('#tendina')
        
    })
    $('#menu-nav ul :last-child').click(()=>{
        alert("Questo link non è disponibile")
        console.log("Link non disponibile");
    })
    // $('#tendina').addClass('hidden')
    









})