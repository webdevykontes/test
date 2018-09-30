/**Устанавливаем переменные с которыми будем работать**/
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close")

//**Вызываем консоль в браузере**//
console.log(btn1);
console.log(btn2);
console.log(main);
console.log(list);
console.log(ul);
console.log(story);

//*Вызываем переменную и меняем стиль у этого элементаmain.style.background = "#F0E68C";**//

//**Пишем функцию для кнопок: добавить элемент и удалить элемент**//
function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Моя новая задача!!!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}
//**Пишем функцию всплывающего окна о завершении всех задач**//
function delItem(){
	myList.removeChild(story[0]);
	if(story.length == 0){
		popup.style.display = "block";
	}
}

//**Пишем функцию для закрытия завершающего окна при нажатии на крестик**//

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);