
//-----------nav----------//  
$(document).ready(function () {
  $(".hamburger-icon img").click(function () {
         var closeButton= $(".closebtn");
         var responsiveLogo = $(".latifan_logo");
         responsiveLogo.css("z-index", "0");
         var responsiveNav = $(".navItemsResp");
         responsiveNav.show();
 
         responsiveLogo.css("opacity", "0.2");
         responsiveLogo.css("z-index", "1");
         responsiveNav.animate(
           {
             right: "0",
           },
           400
         );
        
         $("body").append('<div class="back-container"></div>');
         $(".back-container").click(function () {
           responsiveNav.animate(
             {
               right: "-220px",
             },
             400
           );
           responsiveNav.css("display", "none");
           responsiveLogo.css("opacity", "1");
 
           $(this).remove();
         });
       });
     });
 
