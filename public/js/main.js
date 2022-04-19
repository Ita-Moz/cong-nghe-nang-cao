$(document).ready(function () {
  // mở modal 
  $("button.btn_edit").click(function (event) {
    $('div#myModalEdit').modal('show');
    const id = $(this).attr("data-id");
    alert(id)

  })

  //Click Update
  $("#btnSave").click(function () {
    const id = $(this).attr('data-id');

    if (confirm("Bạn có chắc chắn muốn luu sản phẩm này - " + id) == true) {
      $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/Storey/update/' + id,
        success: function (response) {
          alert("update thành công ")
        },
        error: function (err) {
          console.log(err);
        }
      });
    } else {
      console.log("404")
    }
    alert("Bạn đã cập nhật thành công");
    $("div#myModalEdit").modal("hide");
  });

  //click find
  $('.search-bar').blur(() => {
    let txtsearch = $('.search-bar').val();
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/Storey/search/' + txtsearch,
      success: function (response) {
        $('.products-row').hide('div')
        $("div#addRowSeach").html(response);
        $('button.btn_delete').click(function () {
          const id = $(this).attr('data-id');
          const image = $(this).attr('data-image');
          
          if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này - " + id) == true) {
            $.ajax({
              type: 'DELETE',
              url: 'http://localhost:3000/Storey/deleted/' + id + "/" + image,
              success: function (response) {
                location.reload();  
                alert("Xoá thành công ")
              },
              error: function (err) {
                console.log(err);
              }
            });
          } else {
            console.log("404")
          }
        })
      },
      error: function (err) {
        console.log(err);
      }
    });
  })

  //click delete
  $('button.btn_delete').click(function () {
    const id = $(this).attr('data-id');
    const image = $(this).attr('data-image');

    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này - " + id) == true) {
      $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/Storey/deleted/' + id + "/" + image,
        success: function (response) {
          $('.delete-row' + id).remove('div')
          alert("Xoá thành công ")
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