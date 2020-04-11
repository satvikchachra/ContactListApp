// To get input element
let filterInput = document.querySelector('#filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get input text
    let text = filterInput.value.toLowerCase();

    // Get unordered list of names
    let ul = document.getElementById('names');

    // Get li from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through all names
    for (let i = 0; i < li.length; i++){
        let a = li[i].querySelector('a');
        
        // Check if name matches with search input text

        if(a.innerHTML.toLowerCase().indexOf(text) != -1){

            // Display if yes
            li[i].style.display = '';

        } else{

            // Hide if not
            li[i].style.display = 'none';
        }
    }
}
