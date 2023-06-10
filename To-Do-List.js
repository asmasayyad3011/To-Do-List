function addItems()
{
    let addingItemDiv = document.getElementById("addingItemDiv");

    let inputValue = document.getElementById("myInput").value;

    // creating checkbox element 
    let checkbox = document.createElement('input');

    if (inputValue === '') {
        alert("Input is Empty!");
        return;
    } else {
        document.getElementById("myUL").appendChild(checkbox);
    }

    // Assigning the attributes to created checkbox 
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.classList.add("checkbox");

    // create label for checkbox 
    let label = document.createElement('label');

    // appending the checkbox and created text to the created label tag   
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(inputValue));

    // appending label to div
    addingItemDiv.appendChild(label);

    // Modified Code from here

    // create delete button element
    let addDeleteBtn = document.createElement('button');

    //appending button to label
    addDeleteBtn.innerHTML = 'Delete Item'
    label.appendChild(addDeleteBtn);

    //Assigning the attributes to button
    addDeleteBtn.id = ('deleteBtn1');
    addDeleteBtn.classList.add('deleteBtn1');
    addDeleteBtn.addEventListener('click', function ()
    {
        {
          label.remove();
        }
    });
    // Modified code ends here
    document.getElementById("myInput").value = "";


}
function removeItems()
{
    const checkboxes = document.querySelectorAll('.checkbox:checked');
    Array.prototype.forEach.call(checkboxes, function (checkbox)
    {
        checkbox.closest('label').remove();
    });
}

