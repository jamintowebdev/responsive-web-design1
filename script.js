/* 
To open and close , we can use click function in btn
and slideToggle() function to the desired element
*/

$(function() {
    $(".btn").click(function() {
        $(".submenu").slideToggle(500);
    });
});

