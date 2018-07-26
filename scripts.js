document.addEventListener('DOMContentLoaded', function() {
    var userInput = document.getElementById('search');

    userInput.addEventListener('keyup', findNames);

});

function findNames() {

    var inputValue = document.getElementById('search').value;

    var contacts = document.getElementById('contacts')
    var names = contacts.querySelectorAll('li.collection-item')

    for (var i = 0; i < names.length; i += 1) {
        if (names[i].innerHTML.toLowerCase().includes(inputValue)) {

            names[i].style.display = '';
        } else {
            names[i].style.display = 'none';
        };
        //     elems[i].style.display = 'block';
        // }
        //     names.forEach(function(name) {
        //         if (name.innerHTML.toLowerCase().includes(inputValue)) {
        //             var theName = name.innerHTML
        //             theName[0].style.display = '';
        //         } else {

        //         }
        //     })

        // for (i in names) {

        //     var namees = names[i]
        //     console.log(typeof namees.innerHTML)
        //     if (namees.innerHTML.includes(inputValue)) {

        //     } else {

        //     }
        // };
    };
};