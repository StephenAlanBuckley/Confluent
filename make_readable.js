$(document).ready(function() {
  $(".ajs-menu-bar").append("<li class='ajs-button normal'><a id='confluent_read_link'><span><u>R</u>ead</span></a></li>");

  var Confluent = {
    read_mode : false
  };

  $("body").keyup(function(e) {
    if (e.keyCode === 222) { //the ' key
      changeReadingMode(Confluent);
    }
  });

  $("#confluent_read_link").on("click", function() {
    changeReadingMode(Confluent);
  });

  function getThemeStorage() {
    var creme = chrome.storage.sync.get("theme", function(theme) {
      console.log(theme);
    });
  }

  function setThemeStorage(theme) {
    chrome.storage.sync.set({"theme" : theme}, function() {
      message('saved!');
    });
  }

  function changeReadingMode(con) {
    con.read_mode = !con.read_mode;
    toggleLeftBar();
    toggleHeader();
    toggleTitle();
    toggleMainContent(con.read_mode);
    toggleHeaders();
    toggleLinks();
    toggleNavBar();
    toggleTableOfContents() 
  }

  function toggleLeftBar() {
    $(".ia-fixed-sidebar").slideToggle();
  }

  function toggleHeader() {
    $("#header").slideToggle();
  }

  function toggleTitle() {
    $("#title-text").toggleClass('confluent-title');
  }

  function toggleMainContent(read_mode) {
    if(read_mode) {
      $("#main").animate({
        marginLeft: "5%",
        marginRight: "5%"
      }, 500);

      $("#main-content").animate({
        fontSize: "250%"
      }, 500);
      $("span").animate({
        fontSize: "100%"
      }, 500);
    } else {
      $("#main").animate({
        marginLeft: "285px",
        marginRight: "0%"
      }, 500);

      $("#main-content").animate({
        fontSize: "100%"
      }, 500);
      $("span").animate({
        fontSize: "100%"
      }, 500);
    }
  }

  function toggleHeaders() {
    $("#main-content h1").toggleClass('confluent-h1');
    $("#main-content h2").toggleClass('confluent-h2');
    $("#main-content h3").toggleClass('confluent-h3');
    $("#main-content h4").toggleClass('confluent-h4');
    $("#main-content h5").toggleClass('confluent-h5');
  }

  function toggleLinks() {
    $("a").toggleClass('onfluent-a');
  }

  function toggleNavBar() {
    $("#navigation").toggleClass('confluent-navigation');
  }

  function toggleTableOfContents() {
    $(".toc-macro").toggleClass('confluent-toc');
  }
});
