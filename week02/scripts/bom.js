const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
  if (input.value.trim() !== '' && list.children.length < 10) {
    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');

    deleteButton.setAttribute('aria-label', 'Close');
    deleteButton.setAttribute('id', 'close-button');
    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
    
    li.append(deleteButton);
    list.append(li);
  }
  else {
    input.focus();
  }
});
