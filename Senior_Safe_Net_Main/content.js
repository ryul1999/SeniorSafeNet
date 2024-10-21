const suspiciousWords = [
    'free', 
    'urgent', 
    'click here', 
    'limited time', 
    'confirm your account', 
    'congratulations', 
    'bank', 
    'password'
];

const suspiciousWebsites = [
    "phishingtest.com",
    "example.com",
];

function scanEmailContent() {
    const subjectElement = document.querySelector('h1.hP'); 
    const bodyElement = document.querySelector('.ii.gt .a3s.aXjCH'); 

    if (!subjectElement || !bodyElement) return; 

    const emailTitle = subjectElement.innerText.toLowerCase(); 
    const emailContent = bodyElement.innerText.toLowerCase(); 

    const foundWordsTitle = suspiciousWords.filter(word => emailTitle.includes(word)); 
    const foundWordsBody = suspiciousWords.filter(word => emailContent.includes(word)); 
    
    const foundWords = [...new Set([...foundWordsTitle, ...foundWordsBody])];

    let flagColor = 'none';
    if (foundWords.length >= 5) {
        flagColor = 'red';
    } else if (foundWords.length >= 3) {
        flagColor = 'yellow';
    } else if (foundWords.length === 0) {
        flagColor = 'green';
    }

    let subjectIcon = subjectElement.querySelector('span.flag-icon'); 
    if (!subjectIcon) { 
        subjectIcon = document.createElement('span');
        subjectIcon.className = 'flag-icon'; 
        subjectIcon.style.fontSize = '18px'; 
        subjectIcon.style.marginRight = '10px'; 
        subjectElement.prepend(subjectIcon); 
    }

    if (flagColor === 'red') {
        subjectIcon.textContent = '🚩'; 
    } else if (flagColor === 'yellow') {
        subjectIcon.textContent = '⚠'; 
    } else if (flagColor === 'green') {
        subjectIcon.textContent = '✅'; 
    }
}

document.addEventListener('click', (event) => {
    const emailRow = event.target.closest('.zA'); 
    if (emailRow) {
        setTimeout(scanEmailContent, 1000); 
    }
});

function scanEmails() {
    const emailRows = document.querySelectorAll(".zA"); 
    emailRows.forEach(row => {
        const subjectElement = row.querySelector(".bog"); 
        if (!subjectElement) return; 
        const emailTitle = subjectElement.innerText.toLowerCase(); 

        const foundWords = suspiciousWords.filter(word => emailTitle.includes(word));
        
        let flagColor = 'none';
        if (foundWords.length >= 5) {
            flagColor = 'red';
        } else if (foundWords.length >= 3) {
            flagColor = 'yellow';
        } else if (foundWords.length === 0) {
            flagColor = 'green';
        }

        let subjectIcon = subjectElement.querySelector('span.flag-icon'); 
        if (!subjectIcon) { 
            subjectIcon = document.createElement('span');
            subjectIcon.className = 'flag-icon'; 
            subjectIcon.style.fontSize = '18px'; 
            subjectIcon.style.marginRight = '10px'; 
            subjectElement.prepend(subjectIcon); 
        }

        if (flagColor === 'red') {
            subjectIcon.textContent = '🚩'; 
        } else if (flagColor === 'yellow') {
            subjectIcon.textContent = '⚠'; 
        } else if (flagColor === 'green') {
            subjectIcon.textContent = '✅'; 
        }
    });
}

window.addEventListener('load', () => {
    setTimeout(scanEmails, 3000); 
});

document.addEventListener('click', (event) => {
    const link = event.target.closest('a'); 
    if (link) {
        const url = new URL(link.href); 
        const isSuspicious = suspiciousWebsites.some(site => url.hostname.includes(site)); 
        if (isSuspicious) {
            event.preventDefault(); 
            alert("This website is suspicious. Do you really want to proceed?"); 
        }
    }
});
