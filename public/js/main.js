$(document).ready(function () {

  //click find
  $('.search-bar').blur(() => {
    let txtsearch = $('.search-bar').val();
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/Storey/search/' + txtsearch,
      success: function (response) {
        $('.products-row').hide('div')
        $("div#addRowSeach").html(response);
      },
      error: function (err) {
        console.log(err);
      }
    });
  })

  //click delete
  $('button.btn_delete').click(function(){
    const id = $(this).attr('data-id');

    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này - " + id) == true) {
      $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/Storey/deleted/' + id,
        success: function (response) {
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