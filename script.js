document.getElementById('form-rec').addEventListener('submit', function(e) {
    e.preventDefault();
    const newRec = document.getElementById('new-rec').value; // Changed from nodeValue to value
    if(newRec) {
        const listItem = document.createElement('li');
        listItem.textContent = newRec;
        document.getElementById('rec-list').appendChild(listItem);
        alert('Your recommendation has been added successfully!');
        document.getElementById('new-rec').value = '';
    }
});
