document.addEventListener("DOMContentLoaded", () => {
    const carouselImage = document.getElementById("carouselImage");
    const carouselButton = document.getElementById("carouselButton");
    const bmiContainer = document.getElementById("bmiContainer");
    const quoteContainer = document.getElementById("quoteContainer");
    let currentImage = '';

    const quotes = [
        "Stay Fit, Stay Healthy!",
        "Your body is your most priceless possession. Take care of it.",
        "Fitness is not about being better than someone else. It’s about being better than you used to be.",
        "The only bad workout is the one that didn’t happen.",
        "Fitness is like a relationship. You can’t cheat and expect it to work.",
        "The pain you feel today will be the strength you feel tomorrow.",
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
        "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        "Your health is an investment, not an expense.",
        "Motivation is what gets you started. Habit is what keeps you going.",
        "The best way to predict the future is to create it.",
        "Don’t watch the clock; do what it does. Keep going.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Dream it. Believe it. Build it.",
        "Fitness is not about being better than someone else. It’s about being better than you used to be.",
        "Your only limit is you.",
        "Be stronger than your strongest excuse.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "Success doesn’t come from what you do occasionally. It comes from what you do consistently."
    ];
    

    let quoteInterval; 

    function loadRandomImage() {
        const randomIndex = Math.floor(Math.random() * 13) + 1; 
        const imageUrl = `img/${randomIndex}.jpg`;
        carouselImage.src = imageUrl;
        currentImage = imageUrl;
    }

    function showBMICalculator() {
        bmiContainer.style.display = 'block';
        carouselButton.style.display = 'none';
        quoteContainer.style.display = 'none'; 
        document.body.style.backgroundImage = `url(${currentImage})`;
        setInterval(loadRandomImage, 5000); 

        if (quoteInterval) {
            clearInterval(quoteInterval);
        }
    }

    function showQuote() {
        quoteContainer.style.display = 'block'; 
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        quoteContainer.textContent = quotes[randomQuoteIndex];
    }

    loadRandomImage();
    showQuote(); 

    quoteInterval = setInterval(showQuote, 5000); 

    carouselButton.addEventListener("click", showBMICalculator);
});


function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 

    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('result').innerHTML = "Please enter valid weight and height.";
        return;
    }

    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}
