$(function(){
    $("button#tabBtn1").click(function(){
        $("button").css({
            "border":"none",
            "top":"0"
        });
        $(this).css({
             "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });
        $("div#tabContents1").css({
            "display":"block",

        });
         $("div#tabContents2").css({
            "display":"none",

    });
         $("button#tabBtn2").click(function(){
        $("button").css({
            "border":"none",
            "top":"0"
        });
        $(this).css({
             "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });
        $("div#tabContents1").css({
            "display":"none",

        });
         $("div#tabContents2").css({
            "display":"block",

    });
});

