
$(document).ready(function () {
    $('.btn_delete').on('click', () => {
        let id = $('.btn_delete').attr("data-id");

        if( confirm("Bạn có chắc chắn muốn xoá sản phẩm này - "+id)==true){
            $.ajax({
                type: 'DELETE',
                url: 'http://localhost:3000/admin/deleted/'+ id,
                success : function( response) {
                  var tam = $('div').attr("data-row"==id)
                  $(tam).remove(".products-row");
               },
                error: function(err){
                  console.log(err);
                }
              });
        }else{
            console.log("404")
        }
      })



      
});