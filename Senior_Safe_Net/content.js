let arrSuspiciousWord = [
    'free', 
    'urgent', 
    'click here', 
    'limited time', 
    'confirm your account', 
    'congratulations', 
    'bank', 
    'password'
];

let arrSuspiciousWebSite = [
    "phishingtest.com",
    "example.com",
    "wooribank.com"
];

window.addEventListener('load', () => {
    $('.zA .bog').each(function(idx, elem) {
        let emailTitle = $(elem).text();
        let foundWords = arrSuspiciousWord.filter(w => emailTitle.includes(w));

        let objIcon = $(elem).find('.flag-icon');
        if (objIcon.length == 0) { 
            objIcon = $('<span>', { class: 'flag-icon' })
                .css({
                    fontSize: '18px',
                    marginRight: '5px'
                });
            $(elem).prepend(objIcon); 
        }

        if (foundWords.length >= 5) $(elem).text('🚩');
        else if (foundWords.length >= 1) $(elem).text('⚠');
        else $(elem).text('✅');
    });


    $(document).on('click', 'a', function(e) {
        let url = new URL($(this).attr('href'));        
        let isSuspicious = arrSuspiciousWebSite.some(s => url.toString().includes(s));
        
        if (isSuspicious) {
            e.preventDefault();
            let result = confirm("This website is suspicious. Do you really want to proceed?");                
            if (result) {
                window.open(url, '_blank');
            } else {
                return;
            }
        }
    });

});


