
$(document).ready(() => {
  // 
  $('#btn_delete').on('click', () => {
    let id = $('#btn_delete').attr("data-id");
    $.ajax({
      url: 'http://localhost:3000/admin/deleted/'+ id,
      type: 'DELETE',
      success: function (kq) {
        // res.redirect("http://localhost:3000/admin/dashboard");
        console.log(kq)
      },
      error: function(){
        console.log(error);
      }
    });
   
  })
  // 
  document.querySelector(".jsFilter").addEventListener("click", function () {
    document.querySelector(".filter-menu").classList.toggle("active");
  });

  document.querySelector(".grid").addEventListener("click", function () {
    document.querySelector(".list").classList.remove("active");
    document.querySelector(".grid").classList.add("active");
    document.querySelector(".products-area-wrapper").classList.add("gridView");
    document
      .querySelector(".products-area-wrapper")
      .classList.remove("tableView");
  });

  document.querySelector(".list").addEventListener("click", function () {
    document.querySelector(".list").classList.add("active");
    document.querySelector(".grid").classList.remove("active");
    document.querySelector(".products-area-wrapper").classList.remove("gridView");
    document.querySelector(".products-area-wrapper").classList.add("tableView");
  });

  var modeSwitch = document.querySelector(".mode-switch");
  modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("light");
    modeSwitch.classList.toggle("active");
  });

})