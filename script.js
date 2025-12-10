function flashMastery() {
    // 1. Get the elements
    const badgeContainer = document.getElementById('mastery-container');
    const statusText = document.getElementById('status-text');
    const btn = document.getElementById('mastery-btn');

    // 2. Check if the badge is currently hidden
    if (badgeContainer.classList.contains('hidden')) {
        // --- CASE: It is hidden, so SHOW it ---
        badgeContainer.classList.remove('hidden');
        
        // Update Status to Gold
        statusText.innerText = "Dominating the Cloud";
        statusText.style.color = "#d4af37"; 
        
        // Update Button Text to show what happens next
        btn.innerText = "Hide Mastery"; 
        
        console.log("Mastery SHOWN");

    } else {
        // --- CASE: It is showing, so HIDE it ---
        badgeContainer.classList.add('hidden');
        
        // Reset Status to normal
        statusText.innerText = "Online";
        statusText.style.color = "white"; 
        
        // Reset Button Text
        btn.innerText = "Flash Mastery (Ctrl+6)";
        
        console.log("Mastery HIDDEN");
    }
}
