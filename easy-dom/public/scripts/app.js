$(function() {
    var btnBack = new E.Button('sa-btnBack', 'Back');
    btnBack.setClass('btn-info')
        .setIcon('left', 'icon-arrow-left')
        .onClick(function() {
            alert('Back');
        }
    );
    
    var btnNext = new E.Button('sa-btnNext', 'Next');
    btnNext.setClass('btn-success')
        .setIcon('right', 'icon-arrow-right')
        .onClick(function() {
            alert('Next');
        }
    );

    var btnFetch = new E.Button('sa-btnFetch', 'Fetch');
    btnFetch.setIcon('left', 'icon-calendar').onClick(function() {
        alert('Fetch');
    });

    var htmlLink = new E.Html("htmlLink", "<div id='htmlLink'><a href='#'>Testing it</a></div>");
    var btnHistory = new E.Button('sa-btnHistory', 'History');
    btnHistory.setIcon('left', 'icon-book')
        .onClick(function() {
            alert("History");
        }
    );
    
    var tbTop = new E.Toolbar('tbTop');
    tbTop.addElement('left', btnFetch);
    tbTop.addElement('left', btnHistory);
    tbTop.addElement('right', htmlLink);
    tbTop.render('#top');

    var tbFooter = new E.Toolbar('tbFooter');
    tbFooter.addElement('left', btnBack);
    tbFooter.addElement('right', btnNext);
    tbFooter.render('#footer');

    // to debug in firebug :)
    window.tbTop = tbTop;
    window.tbFooter = tbFooter;
});
