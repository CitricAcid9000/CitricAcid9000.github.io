/*
 Java Script for the website
*/

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fey.png") {
    myImage.setAttribute("src", "images/fey2.png");
  } else {
    myImage.setAttribute("src", "images/fey.png");
  }
});

function openCity(evt, cityName) {

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// click one tab at the start
window.onload = function () {
    document.getElementById("defaultOpen").click();
};

let myButton = document.getElementById('change');
let myHeading = document.querySelector("h1");
 

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome ${myName} to the Ivy's Adventuring Shop`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome ${storedName} to the Ivy's Adventuring Shop`;
}


myButton.addEventListener("click", () => {
  setUserName();
});


function startInstance() {
        fetch('https://your-api-id.execute-api.region.amazonaws.com/prod/start-ec2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('EC2 Instance started!');
        })
        .catch(error => {
            alert('Error starting EC2 Instance: ' + error);
        });
    }
