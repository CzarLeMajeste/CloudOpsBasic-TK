function flashMastery() {
    // 1. Get the hidden container element
    const badgeContainer = document.getElementById('mastery-container');
    const statusText = document.getElementById('status-text');

    // 2. Remove the 'hidden' class to show it
    badgeContainer.classList.remove('hidden');

    // 3. Update the text status
    statusText.innerText = "Dominating the Cloud";
    statusText.style.color = "#d4af37"; // Turn status gold

    // 4. Log to console (Operator View)
    console.log("Mastery flashed! Operator: Czar (Tuem Kieth Cabasan)");
}
