document.getElementById('list-1').addEventListener('click', function () {
    console.log('click list 1');
});
document.getElementById('list-2').addEventListener('click', function (event) {
    console.log('click list 2');
    event.stopPropagation();
});
 
document.getElementById('list-item').addEventListener('click', function () {
    console.log('click list item');
});

document.getElementById('list-container').addEventListener('click', function () {
    console.log('list container click');
 });