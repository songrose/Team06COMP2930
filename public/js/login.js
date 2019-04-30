$(document).ready(() => {
  let print = user => {
    console.log(JSON.stringify(user));
  };

  $("#submit").click(() => {
    console.log("hello");
    if($("#pass").val().equals($("#cpass").val()));
    $.ajax({
      type: "post",
      url: "/users",
      data: {
        username: $("#uname").val(),
        email: $("#email").val(),
        password: $("#pass").val()
      },
      success: user => print(user),
      error: err => print(err.responseText)
    });
  });
});