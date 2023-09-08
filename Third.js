document.addEventListener("DOMContentLoaded", function() {
    // Get the button elements
    var button1 = document.getElementById("button1");
    var editDiv = document.getElementById("edit");
    var saveButton = document.getElementById("save");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var readDiv = document.getElementById("read");

    // Hide the "SAVE" button initially
    saveButton.style.display = "none";

    // Function to create a new editable list
    function createNewList() {
        // Clear the content of the editDiv
        editDiv.innerHTML = "";

        // Create a new editable element
        var newList = document.createElement("div");
        newList.className = "editable-div";
        newList.contentEditable = true;

        // Set the background color for the new list to white
        newList.style.backgroundColor = "white";

        // Insert the new list element into the editDiv
        editDiv.appendChild(newList);

        // Show the "SAVE" button
        saveButton.style.display = "inline";

        // Enable the "EDIT" and "DELETE" buttons
        button2.disabled = false;
        button3.disabled = false;
    }

    // Function to make content uneditable
    function makeUneditable() {
        // Make the editDiv uneditable
        editDiv.contentEditable = false;

        // Hide the "SAVE" button
        saveButton.style.display = "none";
    }

    // Function to disable "EDIT" and "DELETE" buttons
    function disableEditDeleteButtons() {
        button2.disabled = true;
        button3.disabled = true;
    }

    // Function to enable "EDIT" and "DELETE" buttons
    function enableEditDeleteButtons() {
        button2.disabled = false;
        button3.disabled = false;
    }

    // Add a click event listener to Button 1 (NEW) with a confirmation dialog
    button1.addEventListener("click", function() {
        // Display a confirmation dialog
        var confirmNewList = confirm("Do you want to create a new list?");
        if (confirmNewList) {
            // Call the createNewList function
            createNewList();
            
            // Enable "EDIT" and "DELETE" buttons
            enableEditDeleteButtons();
        }
    });

    // Add a click event listener to the "SAVE" button (Button 4)
    saveButton.addEventListener("click", function() {
        // Call the makeUneditable function
        makeUneditable();
    });

    // Add a click event listener to the editDiv to prevent interaction
    editDiv.addEventListener("click", function(e) {
        // Prevent any interaction with the uneditable div
        e.preventDefault();
    });

    // Add a click event listener to Button 2 (EDIT) to continue to edit the content
    button2.addEventListener("click", function() {
        // Continue to edit the content
        editDiv.contentEditable = true;

        // Show the "SAVE" button
        saveButton.style.display = "inline";

        // Remove the preventEdit event listener to allow interaction
        editDiv.removeEventListener("click", preventEdit);
    });

    // Add a click event listener to Button 3 (DELETE) to delete the content
    button3.addEventListener("click", function() {
        // Display a confirmation dialog
        var confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            // Clear the content of the editDiv
            editDiv.innerHTML = "";

            // Hide the "SAVE" button
            saveButton.style.display = "none";

            // Disable "EDIT" and "DELETE" buttons until "NEW" is pressed again
            disableEditDeleteButtons();
        }
    });

    // Add a click event listener to the uneditable content (readDiv) to show the "SAVE" button
    readDiv.addEventListener("click", function() {
        // Show the "SAVE" button
        saveButton.style.display = "inline";
    });
});
