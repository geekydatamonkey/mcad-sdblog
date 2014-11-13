/* main.js
 * http://mcadsustainabledesign.com
 */

;(function($, window, document, undefined) {
  'use strict';

  var pageSetup = {

    settings: {
      brick: '.post-thumb'
    },

    init: function() {
      this.bgImageCover();
    },

    // Makes the Post Thumbnail cover the container.
    bgImageCover: function() {
      var innerClass ='brick-inner';
      var $brick = $(this.settings.brick);

      $brick
        .wrapInner('<div class="' + innerClass + '"></div>')
        .each( function() {

          var imgSrc = $(this).find('img').attr('src');

          $(this)
            .find('.' + innerClass)
            .css('width', '100%')
            .css('height', '100%')
            .css('background-image','url("' + imgSrc + '")')
            .css('background-size','cover')
            .find('img')
            .css('display','none');
      });
    }
  };

  $(document).ready(function(){
    pageSetup.init();
  }); // end .ready()

})(jQuery, window, document);
