let score = 0;
// משתנה שיאפשר לי לרוץ על השאלות ולבדוק אם
// הגענו לשאלה האחרונה
let counter = 0;

function init(){
  updateUi();
  createQuestion();
}

// שתרוץ על שאלות שיגיעו מג'ייסון ותדע כל פעם להציג את השאלה
// הבאה וגם לשים לב מתי יסתיימו השאלות 
function createQuestion(){
  // בודק אם לא נשארו שאלות
  if(counter > trivia_ar.length - 1){
    document.querySelector("#id_parent").innerHTML = "Game end, your score is: " + score;
    // יעצור את הפונקציה ולא יתן להמשיך
    return ;
  }
  // מוחק את השאלה הקודמת
  document.querySelector("#id_parent").innerHTML = "";
  // addSingleQuestion("Who invite javascript",["microsoft","apple","netscape","tesla"],2)
  // יצרתי משתנה שמכיל באותו רגע את האובייקט של השאלה שמכילה
  // את השאלה עצמה , מערך של התושבות והתא של התשובה הנכונה במערך התשובות
  let qItem = trivia_ar[counter]
  // addSingleQuestion("Capital of israel",["Netanya","Ashdod","Tel aviv","Jerusalem"],3);
  addSingleQuestion(qItem.question,qItem.answers,qItem.correctAnswer);
  // מעביר את הקואנטר לשאלה הבאה
  counter++;
}

function successAnswer(){
  alert("you right");
  score += 10;
  createQuestion();
  updateUi();
}

function failAnswer(){
  score -= 5;
  if(score <= 0){
    score = 0
  }
  createQuestion();
  alert("you worng");
  updateUi();
}

function updateUi(){
  document.querySelector("#id_score").innerHTML = score;
}

init();