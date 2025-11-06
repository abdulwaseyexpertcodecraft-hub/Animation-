document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const insideCard = document.getElementById('inside-card');
    const greetingText = document.getElementById('greeting-text');

    // 1. URL se naam nikalna (For personalization)
    // Agar link aisa ho: yourlink.com?name=Ali
    const urlParams = new URLSearchParams(window.location.search);
    const recipientName = urlParams.get('name');

    // 2. Greeting/Wishes ko customize karna
    let nameForMessage = "Mehboob"; // Default name
    
    if (recipientName) {
        // Agar URL mein naam diya gaya hai
        nameForMessage = recipientName.replace(/\+/g, ' '); // Plus signs ko space se replace karein
        greetingText.textContent = `Aapko Bohat Mubarak, ${nameForMessage}!`; 
        
        // Best Wishes message mein bhi naam dal sakte hain
        const wishesMessage = document.querySelector('.wishes-message');
        wishesMessage.innerHTML = `**${nameForMessage}**, Aapki zindagi khushiyon aur kamyabi se bharpur ho. <br> Hamesha muskurate rahen!`;
    } else {
        // Agar URL mein koi naam nahi hai
        greetingText.textContent = `Aapke Liye Salam!`;
    }


    // 3. Card ko click par kholna
    cardContainer.addEventListener('click', () => {
        cardContainer.classList.toggle('open');
    });
});
