$(".shows__button").on("click", function(){
    const target = $(this).attr("target")
    const listas = $(".shows__list")
    const botoes = $(".shows__button")
    
    for (let i = 0; i < listas.length; i++) {
        if (listas.eq(i).hasClass("shows__list--is-active")){
            listas.eq(i).removeClass("shows__list--is-active");
        }
    }

    for (let i = 0; i < botoes.length; i++) {
        if (botoes.eq(i).hasClass("shows__button--is-active")){
            botoes.eq(i).removeClass("shows__button--is-active");
        }
    }

    $(target).addClass("shows__list--is-active");
    $(this).addClass("shows__button--is-active");
})

