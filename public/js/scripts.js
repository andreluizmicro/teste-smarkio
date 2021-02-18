function validateForm(){


    // function sendForm(event){
    //   event.preventDefault();
    //
    // }

    let comment = $("#comment").val();
    let ajax = new XMLHttpRequest();
    ajax.open('POST', '/add');
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange=function(){
      if(ajax.status == 200 && ajax.readyState === 4){
        ajax.send(comment);
      }
    };

   //  Swal.fire({
   //    position: 'top-end',
   //    icon: 'success',
   //    title: 'Your work has been saved',
   //    showConfirmButton: false,
   //    timer: 10500
   // });




//   var comment = ($( "#comment" ).val());
//   if(comment.length <= 0){
//     alert("Você precisa informar um texto no campo!");
//   }
//
//   $.ajax({
//     url : "/comments",
//     type : 'post',
//     data : {
//     comment : comment
//   },
//   beforeSend : function(){
//     alert(comment);
//   }
// }).done(function(msg){
//   $("#resultado").html(msg);
// }).fail(function(jqXHR, textStatus, msg){
//   // alert(msg);
// });
}
