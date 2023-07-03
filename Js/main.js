document.addEventListener("DOMContentLoaded", function () {
  var spanData = [];
  var svgClick = [];

  for (var i = 1; i <= 5; i++) {
    spanData[i] = document.getElementById("span-acordeon-data-" + i);
    svgClick[i] = document.getElementById("s4-svg-" + i);

    svgClick[i].addEventListener("click", function (event) {
      var position = parseInt(this.id.split("-")[2]);
      Show_S4_Data(position);
    });
  }

  resetStyle();

  function Show_S4_Data(position) {
    if (spanData[position].style.display === "none") {
      spanData[position].style.display = "";
      svgClick[position].style.transform = "rotate(180deg)";
    } else {
      spanData[position].style.display = "none";
      svgClick[position].style.transform = "rotate(360deg)";
    }
  }

  function resetStyle() {
    for (var i = 1; i <= 5; i++) {
      spanData[i].style.setProperty("display", "none");
    }
  }
});
