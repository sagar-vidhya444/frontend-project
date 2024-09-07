// selecting 
var container = document.querySelector(".container");
var innertitle = document.querySelector(".inner-title");
var topictitle = document.getElementById("topic");
var date = document.getElementById("date");
var time = document.getElementById("time");
var textarea = document.getElementById("textarea");
var submitbutton = document.getElementById("submit");
var clearbutton = document.getElementById("clear1");


submitbutton.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "inner-content");
  div.innerHTML = `<h2>${topictitle.value}</h2>
    <h3>${date.value}</h3>
    <h3>${time.value}</h3>
    <h2>${textarea.value}</h2>
    <button id="clear1" onclick="delitem(event)">clear</button>`;
  container.append(div);
});
function delitem(event) {
  event.target.parentElement.remove();
}
