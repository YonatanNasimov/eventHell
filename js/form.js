window.onload = function () {
  declareEvents();
}


function declareEvents() {
  let id_form = document.querySelector("#id_form");

  id_form.addEventListener("submit", function (e) {
    clearForm();

    e.preventDefault();
    let name_val = document.querySelector("#id_name").value;
    let phone_val = document.querySelector("#id_phone").value;
    let email_val = document.querySelector("#id_email").value;
    let text_area = document.querySelector("#id_textarea").value;

    if (name_val.length < 2) {
      document.querySelector("#id_p_name").innerHTML = "Enter valid name, min 2 chars"
      return;

    }

    else if (phone_val.length < 10) {
      document.querySelector("#id_p_phone").innerHTML =
        "Enter valid phone , min 10 chars";
      return;
    }

    else if (email_val.indexOf("@") == -1 ||
      email_val.indexOf(".") == -1) {
      document.querySelector("#id_p_email").innerHTML =
        "Enter valid email ";
      return;
    }
    else if (text_area.length < 2) {
      document.querySelector("#id_p_text").innerHTML =
        "Right min 2 chars ";
      return;
    }


    window.open("https://www.youtube.com/watch?v=MZSDjpCx4hk");

    clearInput();

    console.log("form send");
  })

}

function clearForm() {
  document.querySelector("#id_p_name").innerHTML = "";
  document.querySelector("#id_p_phone").innerHTML = "";
  document.querySelector("#id_p_email").innerHTML = "";
  document.querySelector("#id_p_text").innerHTML = "";
}

function clearInput(){
  document.querySelector("#id_name").value = "" ;
  document.querySelector("#id_phone").value = "" ;
  document.querySelector("#id_email").value = "" ;
  document.querySelector("#id_textarea").value = "" ;

}