function AddComment(name, text) {
    var message = document.createElement("div");
    message.append(reviewTemplate.content.cloneNode(true));
    if(text && name) {
        message.firstElementChild.firstElementChild.textContent = name;
        message.firstElementChild.lastElementChild.textContent = text;
        reviewsContainer.appendChild(message);
    }
}

function SendComment() {
    AddComment(usernameTextField.value, reviewnputTextField.value);
    usernameTextField.value = "";
    reviewnputTextField.value = "";
}

AddComment("Артур Гиннес", "Не знаю, кто украл мой рецепт, но получили его именно они!");


