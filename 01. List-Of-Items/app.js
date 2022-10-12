function addItem() {
    const content = document.getElementById('newItemText').value;
    const ulElements = document.querySelector('ul#items');
    let liElement = document.createElement('li');
    liElement.textContent = content;
    ulElements.appendChild(liElement);
    document.getElementById('newItemText').value = '';
}