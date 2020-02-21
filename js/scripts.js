document.addEventListener('DOMContentLoaded', function() {
    var userInput = document.getElementById('search');

    userInput.addEventListener('keyup', findNames);

});

function findNames() {


    var searchInputValue = document.getElementById('search').value;

    var contacts = document.getElementById('contacts')
    var names = contacts.querySelectorAll('li.collection-item')

    for (var i = 0; i < names.length; i += 1) {
        if (names[i].innerHTML.toLowerCase().includes(searchInputValue)) {

            names[i].style.display = '';
        } else {
            names[i].style.display = 'none';
        };
    };

};

function appendNewContact() {
    var inputValue = document.getElementById('addContacts').value;
    alert(inputValue)
}