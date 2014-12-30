/*
 var pause = 2000;
 var intervalId;
 var album = $('.album');
 var count = album.length;
 var i = 0;
 jQuery(document).ready(function($) {
 jQuery(".album").hover(function() {
 var that = this;
 var length = jQuery(this).children("img").length;
 album = jQuery(this).children("img");
 count = length;
 intervalId = setTimeout(transition, 500);
 }, function() {
 album.eq(i).removeClass("current");
 album.eq(0).addClass("current");
 clearTimeout(intervalId);
 });
 });
 
 function transition() {
 album.eq(i).removeClass("current");
 if (++i >= count) {
 i = 0;
 }
 album.eq(i).addClass("current");
 intervalId = setTimeout(transition, pause);
 }
 
 */

(function($) {

    $.fn.rotator = function() {
        var that = this;
        console.log("hello");
        this.hover(function() {
            console.log(this);
            var length = $(this).children("img").length;
            console.log(length);
            album = $(this).children("img");
            count = length;
            console.log(i);
            //intervalId = setTimeout(transit, 500);
        }, function() {
//            album.eq(i).removeClass("current");
//            album.eq(0).addClass("current");
//            clearTimeout(intervalId);
        });

        function transit() {
            console.log("inside transit");
            album.eq(this.i).removeClass("current");
            if (++this.i >= count) {
                this.i = 0;
            }
            album.eq(this.i).addClass("current");
            intervalId = setTimeout(transit, this.pause);
            return this;
        }
        ;


    };



    $.fn.rotator.defaults = {
        selector: "",
        pause: 2000,
        intervalId: "",
        album: $('.album'),
        count: 0,
        i: 0
    };

}(jQuery));