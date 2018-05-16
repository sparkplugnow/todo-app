var Edit = document.getElementById("edit");
var TodoList = document.getElementById("text-holder");
var InputText = document.querySelector('input');
var span = document.querySelectorAll('span');

Edit.addEventListener('click', function () {
    InputText.style.display = "block";
});

InputText.addEventListener('keypress', function (event) {
    if (event.keyCode == 13 && event.target.value != '') {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.innerHTML = '&times; ';
        span.addEventListener('click', function () {
            this.parentElement.remove();
        });
        li.append(span);
        li.append(event.target.value);
        TodoList.append(li)
    }
});

for (var i = 0; i < span.length; i++) {
    span[i].addEventListener('click', function () {
        this.parentElement.remove();
    });
}