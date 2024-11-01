const suspiciousWebsites = [
    "phishingtest.com",
    "example.com",
];

let previousURL = document.referrer || '';

const currentUrl = window.location.href;
suspiciousWebsites.forEach((site) => {
    if (currentUrl.includes(site)) {
        const proceed = confirm(`Warning: You are about to visit a suspicious website: ${site}. Do you really want to proceed? (Yes or No)`);
        if (!proceed) {
            if (previousURL) {
                window.location.href = previousURL;
            } else {
                window.history.back();
            }
        }
    }
});
