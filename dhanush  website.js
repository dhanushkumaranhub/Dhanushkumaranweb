document.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

document.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};


const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

document.onscroll = () => {
    navbar.classList.remove('show');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

document.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};




function initMap() {

    // The location of Geeksforgeeks office
    const gfg_office = {
        lat: 13.177673,
        lng: 80.294969
    };

    // Create the map, centered at gfg_office
    const map = new google.maps.Map(
        document.getElementById("map"), {

            // Set the zoom of the map
            zoom: 17.56,
            center: gfg_office,
        });
}






function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the clicked section
    document.getElementById(sectionId).classList.add('active');
}










// Random math question generator
function generateMathQuestion() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    return {
        question: `${num1} + ${num2}`,
        answer: num1 + num2
    };
}

// Handle form submission
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Generate math question
    var math = generateMathQuestion();

    // Show the math question in the popup
    document.getElementById('mathQuestion').textContent = math.question;
    document.getElementById('mathPopup').style.display = 'flex';

    // Store the correct answer in the form's data (will be checked later)
    document.getElementById('verifyAnswerBtn').onclick = function() {
        var userAnswer = document.getElementById('mathAnswer').value;
        if (parseInt(userAnswer) === math.answer) {
            alert("Form submitted successfully!");
            // Here, you can proceed with form submission (you can add your actual form submit logic here).
            // For example: window.location.href = 'thank-you.html';
        } else {
            alert("Incorrect answer. Please try again.");
        }

        // Close the popup
        document.getElementById('mathPopup').style.display = 'none';
    };
});
