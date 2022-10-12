function deleteByEmail() {
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const value = document.querySelector('input[name="email"]').value;
    let found = false;
    for (let row of rows) {
        if (row.children[1].textContent == value) {
            const parent = row.parentElement;
            parent.removeChild(row);
            document.getElementById('result').textContent = 'Deleted';
            found = true;
        }
    }
    if (found == false) {
        document.getElementById('result').textContent = 'Not found.';
    }
}