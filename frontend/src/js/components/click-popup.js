//ChatListPopup
document.addEventListener("click", (e) => {
    const popup = document.getElementById("popup_container");
    const btn = document.getElementById("hamburger-btn");

    if (!popup || !btn) return;
    const isClickOnButton = btn.contains(e.target);
    const isClickInsidePopup = popup.contains(e.target); 
  
    if (isClickOnButton) {
        popup.classList.toggle("open");
        return; 
    }

    if (popup.classList.contains("open") && !isClickInsidePopup) {
        popup.classList.remove("open");
    }
});


//ChatPopup
document.addEventListener("click", (e) => {
    const popup = document.getElementById("popup_chat_container");
    const btn = document.getElementById("click-popup");

    if (!popup || !btn) return;
    const isClickOnButton = btn.contains(e.target);
    const isClickInsidePopup = popup.contains(e.target); 
  
    if (isClickOnButton) {
        popup.classList.toggle("open");
        return; 
    }

    if (popup.classList.contains("open") && !isClickInsidePopup) {
        popup.classList.remove("open");
    }
});