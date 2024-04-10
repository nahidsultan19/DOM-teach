document.getElementById('submit-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');

    const courseSection = document.getElementById('course-section');

    const li = document.createElement('li');
    li.innerText = inputField.value;

    courseSection.appendChild(li);

    inputField.value = '';
 });