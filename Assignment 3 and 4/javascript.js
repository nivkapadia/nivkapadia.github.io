function validate()
{
    var a = document.register.fname.value;
    var b = document.register.lname.value;
    var c = document.register.email.value;
    var d = document.register.contact.value;
    var e = document.register.password.value;

    if (a==""||b==""||c==""||d==""||e=="")
    {
        alert("Please fill the form");
        return false;
    }
    if (d.toString().length != 10)
    {
        alert("Phone number should be 10 digits");
        document.register.contact.focus()
        return false;
    }
    if (document.register.terms.checked)
    {
        alert("You are successfully registered")
        return true;
    }
    else{
        alert("please agree to our terms")
        return false;
    }

    alert("Submission successful")
    return false;
}
function validateLogin()
{
    var a = document.login.email.value;
    var b = document.login.password.value;

    if (a == "" || b == "")
    {
        alert("Cannot proceed without fields");
        return false;
    }
    return true;
}

function initializeStorefront() {
    // Show the "recomm" div by default
    var recommDiv = document.getElementById('recomm');
    if (recommDiv) {
        recommDiv.classList.remove('hidden');
    }

    // Attach the toggleDiv function to the onchange event of the select element
    var selectElement = document.getElementById('sortBy');
    selectElement.addEventListener('change', toggleDiv);
}

function toggleDiv() {
    var selectElement = document.getElementById('sortBy');
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;

    // Hide all book category divs
    var bookCategoryDivs = document.querySelectorAll('.shop');
    bookCategoryDivs.forEach(function (div) {
        div.classList.add('hidden');
    });

    // Show the selected book category div
    var selectedDiv = document.getElementById(selectedOption);
    if (selectedDiv) {
        selectedDiv.classList.remove('hidden');
    }
}

// Call the initializeStorefront function when the page loads
document.addEventListener('DOMContentLoaded', initializeStorefront);