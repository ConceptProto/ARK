//Slide jQuery
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

//Modal jQuery
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

//Collapse of menu
 $(".button-collapse").sideNav();