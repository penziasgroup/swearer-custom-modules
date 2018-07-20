(function ($) {
  Drupal.behaviors.siteAlert = {
    attach: function (context, settings) {
        
        $('#site-alert .close-message').click(function(){
            $('#site-alert').hide();
        });
        
    } // end of attach function
  };
  
  })(jQuery);
