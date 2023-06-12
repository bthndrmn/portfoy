function drpClick() {
    const btnDrw = document.getElementById("btn");
    const show = document.getElementById("dropdown-content");
	btnDrw.onclick=function(){
        if (show.style.display === "none") {
            show.style.display = "block";
          } else {
            show.style.display = "none";
          }
	}
  }
