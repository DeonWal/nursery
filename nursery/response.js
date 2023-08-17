window.onload = function () {
    "use strict";
    var url = new URL(window.location.href);
    //get and store name of user
    var name = url.searchParams.get("name");
    document.getElementById("name").innerText = name;
    //get and store user phone number
    var phone = url.searchParams.get("phone");
    document.getElementById("phone").innerText = phone;
    //get and store user email number
    var email = url.searchParams.get("email");
    document.getElementById("email").innerText = email;
    //get and store user home address
    var address = url.searchParams.get("address");
    document.getElementById("address").innerText = address;

    //flower order product 1 

    //Name of product
    var product = url.searchParams.get("product");
    document.getElementById("product").innerText = product;

    //Quantity and name of product
    var quantity = url.searchParams.get("quantity");
    document.getElementById("quantity").innerText = quantity;

    //Value of product
    var productValue = product.replace(/[^0-9\.]+/g, "");
    document.getElementById("productValue").textContent = productValue;

    //Total price of products 
    var totalPrice = (productValue * quantity);
    document.getElementById("totalPrice").textContent = totalPrice;

    //flower order product 2 

    //Name of product1
    var product1 = url.searchParams.get("product1");
    document.getElementById("product1").innerText = product1;

    //Quantity and name of product1
    var quantity1 = url.searchParams.get("quantity1");
    document.getElementById("quantity1").innerText = quantity1;

    var productValue1 = product1.replace(/[^0-9\.]+/g, "");
    document.getElementById("productValue1").textContent = productValue1;

    //Total price of products1
    var totalPrice1 = (productValue1 * quantity1);
    document.getElementById("totalPrice1").textContent = totalPrice1;

    //flower order product 2 

    //Name of product2
    var product2 = url.searchParams.get("product2");
    document.getElementById("product2").innerText = product2;

    //Quantity and name of product2
    var quantity2 = url.searchParams.get("quantity2");
    document.getElementById("quantity2").innerText = quantity2;

    //Price of product2
    var productValue2 = product2.replace(/[^0-9\.]+/g, "");
    document.getElementById("productValue2").textContent = productValue2;

    //Total price of products2
    var totalPrice2 = (productValue2 * quantity2);
    document.getElementById("totalPrice2").textContent = totalPrice2;


    //flower order product 3 

    //Name of product3
    var product3 = url.searchParams.get("product3");
    document.getElementById("product3").innerText = product3;

    //Quantity of product3
    var quantity3 = url.searchParams.get("quantity3");
    document.getElementById("quantity3").innerText = quantity3;
    //Price of product3
    var productValue3 = product3.replace(/[^0-9\.]+/g, "");
    document.getElementById("productValue3").textContent = productValue3;

    //Total price of products3
    var totalPrice3 = (productValue3 * quantity3);
    document.getElementById("totalPrice3").textContent = totalPrice3;

    //flower order product 4 

    //Name of product4
    var product4 = url.searchParams.get("product4");
    document.getElementById("product4").innerText = product4;

    //Quantity of product4
    var quantity4 = url.searchParams.get("quantity4");
    document.getElementById("quantity4").innerText = quantity4;
    //Price of product4
    var productValue4 = product4.replace(/[^0-9\.]+/g, "");
    document.getElementById("productValue4").textContent = productValue4;

    //Total price of products3
    var totalPrice4 = (productValue4 * quantity4);
    document.getElementById("totalPrice4").textContent = totalPrice4;


    // var totalPrice5 = (product5 * quantity5);
    var grandTotal = (totalPrice + totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4);
    document.getElementById("grandTotal").textContent = grandTotal;

    //Message of user
    var message = url.searchParams.get("message");
    document.getElementById("message").innerText = message;

    //Reply of user 
    var policyConfirm = url.searchParams.get("policyConfirm");
    document.getElementById("policyConfirm").innerText = (policyConfirm === null ? "No" : policyConfirm);
    //Contact type for order
    var contactType = url.searchParams.get("contact");
    document.getElementById('contactResult').innerHTML = contactType;
};

//Opens a flower content tab by default
document.getElementById("default-open").click();

//function to open specified tab on a button click
function plantTabs(option, plantCategory) {
    //Variables to hold plantTabs and tab content
    var i, plantContent, plantLinks;

    //Hides all the elements that contain class "plainContent"  
    plantContent = document.getElementsByClassName("plantContent");
    for (i = 0; i < plantContent.length; i++) {
        plantContent[i].style.display = "none";
    }

    //Gets all elements with class "plantLinks" and removes the class"active"
    plantLinks = document.getElementsByClassName("plantLinks");
    for (i = 0; i < plantLinks.length; i++) {
        plantLinks[i].className = plantLinks[i].className.replace(" active", "");
    }
    //Shows the current tab open 
    //adds active to the button that was clicked
    document.getElementById(plantCategory).style.display = "block";
    option.currentTarget.className += " active";
}





 


