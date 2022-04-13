
$(document).ready(function () {
    $('.btn_delete').on('click', () => {
        let id = $('.btn_delete').attr("data-id");

        if( confirm("Bạn có chắc chắn muốn xoá sản phẩm này - "+id)==true){
            $.ajax({
                type: 'DELETE',
                url: 'http://localhost:3000/admin/deleted/'+ id,
                success : function( response) {
                  window.location.href='http://localhost:3000/admin/dashboard';
                  
               },
                error: function(err){
                  console.log(err);
                }
              });
        }else{
            console.log("dsad")
        }
        
       
      })



      
});