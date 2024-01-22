document.addEventListener('DOMContentLoaded', function() {
    var addForm = document.getElementById('addForm');
    var fruitList = document.getElementById('fruitList');

    
    addForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        var fruitToAdd = document.getElementById('fruit-to-add').value;

        
        var newListItem = document.createElement('li');
        newListItem.classList.add('fruit');
        newListItem.innerHTML = `${fruitToAdd}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;

        
        fruitList.appendChild(newListItem);

        
        document.getElementById('fruit-to-add').value = '';
    });

    
    fruitList.addEventListener('click', function(event) {
        var target = event.target;

        
        if (target.classList.contains('delete-btn')) {
            var listItem = target.closest('.fruit');
            if (listItem) {
                listItem.remove();
            }
        }

        
        if (target.classList.contains('edit-btn')) {
            
            console.log('Edit button clicked');
        }
    });
});