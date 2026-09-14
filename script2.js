function orderFood() {
    // 🌟 This automatically grabs the exact button that was clicked
    const element = event.currentTarget;
    
    if (element) {
        element.textContent = "✓ Added!";
        element.style.backgroundColor = "#2ecc71"; 
        element.style.color = "white";
        
        setTimeout(() => {
            element.textContent = "Order";
            element.style.backgroundColor = ""; 
            element.style.color = "";
        }, 2000);
    }
}
