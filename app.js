//! 1. Show an alert box on click on a link.
// var button=document.getElementById("btn").addEventListener("click",()=>{
//                 alert("hello world");
//         })
//! 2. Display some Mobile images in browser. On click on an
//! image Show the message in alert to user.

// function showMess(message){
//         alert(message);
// }

//! 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
// function del(){
//          var delTable = document.getElementById("table-del").remove();

// }

// . Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
//?  5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
var i = 0;

var inc = document
  .getElementById("data")
  .addEventListener("click", function () {
    console.log(i++)
    updateCounter();
  });

  var inc = document
  .getElementById("data1")
  .addEventListener("click", function () {
    console.log(i--);
    updateCounter();
  });

  function updateCounter(){
        var scr =document.getElementById("screen").value=i;
  }

