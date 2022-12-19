// פונקציה שדואגת להצגי בבאדי את השאלה עם התשובות
// והאזנה לכפתורים של התשובות

function addSingleQuestion(_quesiton,_answers_ar,_correcttAnswer){
  // מייצר את הדיב של השאלה
  let questionDiv = document.createElement("div");
  questionDiv.className = "question";
  document.querySelector("#id_parent").append(questionDiv);

  // מציג את השאלה
  questionDiv.innerHTML += `
    <h2>${_quesiton}</h2>
  `;
  // מייצר את הדיב של הכפתורים עם התשובות
  let answerDiv = document.createElement("div");
  answerDiv.className = "answers";
  questionDiv.append(answerDiv);

  // מייצר את כל התשובות בכפתור, יהיו 4 במערך
  _answers_ar.forEach(function(answerItem,i){
    let btn = document.createElement("button");
    btn.innerHTML = answerItem;
    answerDiv.append(btn);
    btn.addEventListener("click",function(){
      if(i == _correcttAnswer){
        successAnswer();
      }
      else{
        failAnswer();
      }
    })
  })
}