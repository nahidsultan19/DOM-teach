document.getElementById('input-field').addEventListener('keyup', function (event) {
    const input = event.target.value;
    console.log(input);

    const confirmBtn = document.getElementById('btn');

    if (input === 'info') {
        confirmBtn.removeAttribute('disabled');
    } else {
        confirmBtn.setAttribute('disabled', true);
    }
});

document.getElementById('btn').addEventListener('click', function () {
    const write = document.getElementById('info');
    write.style.display = 'none';
})