$(document).ready(function () {

  //click find
  $('.search-bar').blur(() => {
    let txtsearch = $('.search-bar').val();
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/admin/search/' + txtsearch,
      success: function (response) {
        $('.products-row').remove('div')
        $("div#addRowSeach").html(response);
      },
      error: function (err) {
        console.log(err);
      }
    });
  })

  //click delete
  $('.btn_delete').click(() => {
    let id = $('.btn_delete').attr('data-id');

    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này - " + id) == true) {
      $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/admin/deleted/' + id,
        success: function (response) {
          alert(id)
          $('.delete-row' + id).remove('div')
        },
        error: function (err) {
          console.log(err);
        }
      });
    } else {
      console.log("404")
    }
  })





});