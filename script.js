// Получаем ссылки на элементы HTML
const heading = document.getElementById("mainHeading"); // Заголовок
const textInput = document.getElementById("textInput"); // Поле ввода текста
const changeTextButton = document.getElementById("changeTextButton"); // Кнопка изменения текста
const colorInput = document.getElementById("colorInput"); // Поле ввода цвета
const changeColorButton = document.getElementById("changeColorButton"); // Кнопка изменения цвета
const toggleVisibilityButton = document.getElementById("toggleVisibilityButton"); // Кнопка скрытия/показа

// Добавляем обработчик события для кнопки изменения текста
changeTextButton.addEventListener("click", () => {
    // Получаем значение из поля ввода
    const newText = textInput.value;
    // Если поле не пустое, меняем текст заголовка
    if (newText) {
        heading.textContent = newText;
    } else {
        alert("Пожалуйста, введите текст!");
    }
});

// Добавляем обработчик события для кнопки изменения цвета
changeColorButton.addEventListener("click", () => {
    // Получаем значение из поля ввода
    const newColor = colorInput.value;
    // Если поле не пустое, меняем цвет текста заголовка
    if (newColor) {
        heading.style.color = newColor;
    } else {
        alert("Пожалуйста, введите цвет!");
    }
});

// Добавляем обработчик события для кнопки скрытия/показа
toggleVisibilityButton.addEventListener("click", () => {
    // Проверяем, видим ли заголовок
    if (heading.style.display !== "none") {
        // Если видим, скрываем
        heading.style.display = "none";
    } else {
        // Если скрыт, показываем
        heading.style.display = "block";
    }
});