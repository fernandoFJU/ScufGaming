$(function(){
    $("#abre-menu").click(function () {
        if ($(this).hasClass("abriu-menu")) {
            fecharOffcanvas();
        }else{
            abrirOffcanvas();
        }
    });




    function abrirOffcanvas() {
        $("#abre-menu").addClass("abriu-menu");
        $(".bg-menu-ativo").fadeIn(300);
        $(".offcanvas").removeClass("off-canvas-inative").addClass("off-canvas-active");
        $("#abre-menu .barra-1").css({
            transform: "rotate(45deg) translate(7px,9px)",
            "background-color": "#ffffff"
        });
        $("#abre-menu .barra-2").css({opacity: "0"});
        $("#abre-menu .barra-3").css({
            transform: "rotate(-45deg) translate(8px,-10px)",
            "background-color": "#ffffff"
        });
    }
    function fecharOffcanvas() {
        $("#abre-menu").removeClass("abriu-menu");
        $(".bg-menu-ativo").fadeOut(300);
        $(".offcanvas").removeClass("off-canvas-active").addClass("off-canvas-inative");
        $("#abre-menu .barra-1").css({
            transform: "rotate(0deg) translate(0px,0px)",
            "background-color": "#E42C47"
        });
        $("#abre-menu .barra-2").css({opacity: "1"});
        $("#abre-menu .barra-3").css({
            transform: "rotate(0deg) translate(0px,0px)",
            "background-color": "#E42C47"
        });
    }

});
