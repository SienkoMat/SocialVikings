$("document").ready(function () {
  let body = $("body");
  let openMenuH = $(window).height();
  let closeMenuH = 80 + "px";
  let menuImg = $("#container header #header-right #burger");
  let menu = $("#container header #header-center #menu ul");
  let menuItem = $("#container header #header-center #menu ul li");
  let navLink = $("#container header #header-center");
  let header = $("#container header");

  menuImg.click(function () {
    if (!menuImg.hasClass("open")) {
      body.css("overflow", "hidden");
      menuImg.addClass("open").attr("src", "img/close.png");
      header.addClass("phone-menu").animate({ height: openMenuH });
      navLink.css("display", "block");
      menu.css({ left: "25%", top: "12%" });
      menuItem.css("padding-bottom", "40px");
    } else {
      body.css("overflow", "visible");
      menuImg
        .removeClass("open")
        .attr("src", "img/burger-menu-right-svgrepo-com 1.png");
      header.animate({ height: closeMenuH }).removeClass("phone-menu");
      navLink.css("display", "none");
    }
  });
});
