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
    "wooribank.com",
    "rmggiv.com",
    "mail.synfurures.com",
    "migration-tsuka.com",
    "usuaimoney.com",
    "votefax.com",
    "events-sonic.com",
    "synfrutures.com",
    "airdrop-pooledeth.com",
    "defilolwe.com",
    "defiluanhem.com",
    "get-nodepay.com",
    "checkermantra.com",
    "coinmovebot.com",
    "dappsweb3node.com",
    "coinblock-us.com",
    "launch-earnnetwork.com",
    "tge-nodepay.com",
    "claim-nodepay.com",
    "devilmoodeng.com",
    "claimdropse.com",
    "farmsophonfnd.com",
    "axiaarts.com",
    "alpiraex.com",
    "korbited.com",
    "stakedotlink.com",
    "pushddecent.com",
    "qdabr.com",
    "jgxyl.com",
    "dextscreeneer.com",
    "haggisthehippo.com",
    "pnutsonsol.com",
    "cryptoiin.com",
    "mumubullsolana.com",
    "landxfinance.com",
    "moodengonsol.com",
    "uponlysolana.com",
    "morphogov.com",
    "summerfifoundation.com",
    "overlordsxvz.com",
    "claimmagacoin.com",
    "reactedhq.com",
    "votemex.com",
    "amlbut.com",
    "test123air.com",
    "klnzaftnance.com",
    "fantasytopfoundation.com",
    "basevent.com",
    "conakahi.com",
    "miladyculterc.com",
    "clonesairdrop.com",
    "element280.com",
    "newtrumpera.com",
    "defiethussss.com",
    "symbioticgovernance.com",
    "thelastplaysol.com",
    "onchainvalidator.com",
    "votinex.com",
    "tpmarta.com",
    "metenx.com",
    "decredo.com",
    "stketh.com",
    "wcrldlibcrtyfinancial.com",
    "altdentfy.com",
    "poiyrnarket.com",
    "jimmyonape.com",
    "dexnodeexplorer.com",
    "votifex.com",
    "miesedaap.com",
    "biggestbomboclat.com",
    "tokenswapprocessing.com",
    "pnutsoi.com",
    "thebcrt.com"

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


