function addItem() {
    const result = document.getElementById('newItemText').value;
    let ulElements = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = result;
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]'
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);
    ulElements.appendChild(liElement);
    document.getElementById('newItemText').value = '';
    deleteBtn.addEventListener('click', onDelete);

    function onDelete(ev) {
        ev.target.parentElement.remove();
    }
}