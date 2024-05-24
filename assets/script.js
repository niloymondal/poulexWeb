let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $("#carouselExampleCaptions").carousel({
    interval: 3000, // Set the interval between slides
    pause: "hover", // Pause the carousel on mouse hover
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel");

  owl.owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
    
  });

  // Custom event handler to update active dot
  owl.on("changed.owl.carousel", function (event) {
    var currentIndex = event.item.index;
    $(".owl-dot").removeClass("active"); // Remove active class from all dots
    $(".owl-dot").eq(currentIndex).addClass("active"); // Add active class to the corresponding dot
  });
  // Add event listener to dot buttons
  $(".owl-dots button.owl-dot").click(function () {
    var index = $(this).index();
    owl.trigger("to.owl.carousel", [index]); // Go to the specified slide index
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
});

$(document).ready(function () {
  $(".pricingCard").hover(
    function () {
      $(this).addClass("centers");
      $(".orta").removeClass("centers");
    },
    function () {
      $(this).removeClass("centers");
      $(".orta").addClass("centers");
    }
  );

  $(".plan").click(function () {
    var i = this.childNodes[1];
    $(".plan i").removeClass("onay");
    $(".plan").css("border-color", "lightgrey");

    $(i).addClass("onay");
    $(this).css("border-color", "#673de6");
  });

  $(".payment").click(function () {
    var i = this.childNodes[1];
    $(".payment i").removeClass("onay");
    $(".payment").css("border-color", "lightgrey");

    $(i).addClass("onay");
    $(this).css("border-color", "#673de6");
  });
});

