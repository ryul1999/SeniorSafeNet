const toggleButton = document.getElementById("toggleProtection");

toggleButton.addEventListener("click", () => {
    chrome.storage.local.get("protectionEnabled", (data) => {
        const newState = !data.protectionEnabled;
        chrome.storage.local.set({ protectionEnabled: newState }, () => {
            toggleButton.textContent = newState ? "Disable Protection" : "Enable Protection";
            alert(`Protection is now ${newState ? "enabled" : "disabled"}.`);
        });
    });
});

chrome.storage.local.get("protectionEnabled", (data) => {
    toggleButton.textContent = data.protectionEnabled ? "Disable Protection" : "Enable Protection";
});
