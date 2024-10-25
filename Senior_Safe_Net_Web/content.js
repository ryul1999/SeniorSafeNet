const suspiciousWebsites = [
    "example.com",
];

const currentUrl = window.location.href;

suspiciousWebsites.forEach((site) => {
    if (currentUrl.includes(site)) {
        alert(`Warning: You are about to visit a suspicious website: ${site}. Do you really want to proceed?`);
    }
});
