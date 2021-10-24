$(document).ready(function () {
  $('#quickstart-sign-in').on('click', () => {
    if ($('#quickstart-sign-in-status').html() != "Signed In") {
      let email = $('#email').val();
      let password = $('#password').val();
      $.post(
        "/auth/signin", 
        { email: email, password: password },
        (data) => {
          console.log(data);
          $("#quickstart-sign-up").disabled = true;
          $('#quickstart-sign-in-status').html("Signed In");
          $('#quickstart-sign-in').html("Sign Out");
        });
    }
    else {
      $.get(
        "/auth/signout",
        (data) => {
          console.log(data);
          $("#quickstart-sign-up").disabled = false;
          $('#quickstart-sign-in-status').html("Signed Out");
          $('#quickstart-sign-in').html("Sign In");
        });
    }
  });

  $('#quickstart-sign-up').on('click', () => {
    let email = $('#email').val();
    let password = $('#password').val();
    $.post(
      "/auth/signup", 
      { email: email, password: password },
      (data) => {
        console.log(data);
        $("#quickstart-sign-up").disabled = true;
        $('#quickstart-sign-in-status').html("Signed In");
        $('#quickstart-sign-in').html("Sign Out");
      });
  });
});