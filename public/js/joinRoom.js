$(document).ready(() => {
  $.ajaxSetup({
    headers: {
      "auth-token": localStorage.getItem("auth-token")
    }
  });

  function updateCosmetics() {
    $.ajax({
      type: "get",
      url: "/users/updateCosmetics",
      success: function(data) {
        $("html").css(
          "background-image",
          `url(${data.activeBackground.imageLink})`
        );
      },
      error: function(e) {
        console.log(e.responseText);
      }
    });
  }

  /** Takes user gameLobby page */
  $("#submit").click(() => {
    console.log("join");
    $.ajax({
      type: "put",
      url: "/game",
      data: {
        sessionId: $("#roomNo").val(),
        sessionPass: $("#roomPass").val()
      },
      success: function(data) {
        console.log("joined room: ", data);
      },
      error: function(err) {
        M.Toast.dismissAll();
        M.toast({ html: err.responseText, classes: "red",
          displayLength: 2500 });
      }
    });
  });

  updateCosmetics();

  /** Takes user back to main menu */
  $("#back").click(() => {
    window.location.href = "main";
  });
});
