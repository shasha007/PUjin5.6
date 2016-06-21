/**
 * Created by huqiwen on 16/6/16.
 */
fullpage.initialize('#fullpage', {
    css3: true,
    anchors:[],
    onLeave: function () {
        StopScrolling();
    },
    afterLoad: function (index) {

    }
});

var btn = document.getElementById("h_LogSchool");
btn.addEventListener("click", function () {
    StartScrolling();
    $("#h_LogInBg").show();
    $("#fullpage").hide();
    $("html").css({"overflow":"scroll","height":"auto"});
},false);
$(".h_SelectSchool li").click(function () {
    $("#h_LogSchool").val($(this).html());
    $("#h_LogInBg").hide();
    $("#fullpage").show();
    $("html").css({"overflow":"hidden","height":"100%"});
    if (window.location.hash !== "") {
        window.location.hash = "";
    }
})
$(".h_InstallBtn").click(function () {
    window.location = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.xyhui';
});
function StartScrolling(){
    document.removeEventListener('touchmove', stopScrolling);
}
function StopScrolling(){
    document.addEventListener('touchmove', stopScrolling);
}
function stopScrolling(touchEvent) {
    touchEvent.preventDefault();
}