/*Pour que les boutons du menu deviennent bleu au survol*/
$(".btn-primary").mouseover(function(){
$(this).css('background-color','#5D7CF9');
});
/*Pour que les boutons restent bleu après le survol*/
$(".btn-primary").mouseout(function(){
$(this).css('background-color','#5D7CF9');
});


/*Pour que les border top restent au click*/
/*Pour que les border top du menu deviennent blanches au survol*/
$(".btn, .btn-primary").mouseover(function(){
$(this).css('border-top-color','#ffffff');
$(this).css('borderWidth','6px 0px 0px 0px');

});
/*Pour que les border top restent blanches après le survol*/
$(".btn, .btn-primary").mouseout(function(){
$(this).css('border-top-color','#ffffff');
$(this).css('borderWidth','1px 0px 0px 0px');

});

/*vire la box-shadow au bout de 1 seconde... Faudrait voir si y'a pas moyen qu'elle n'apparaisse pas du tout*/
$( ".btn-secondary").click(function() {
  $(this).css('box-shadow','none');
});
