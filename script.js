function openWin(link) {
    let win = window.open();
    let iframe = win.document.createElement('iframe');
    win.document.write("<html><head><link href='style.css' rel='stylesheet' type='text/css' /><meta name='viewport' content='width=device-width'></head></html>")
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.margin = 'none';
    iframe.src = link;
    win.document.body.style.margin = '0px';
    win.document.body.appendChild(iframe);
    window.close()
  }
window.addEventListener('keydown',function(e){
    if (e.code==='Comma'){
        window.addEventListener('keydown',function(e) {
            if (e.code==='Period'){
                window.addEventListener('keydown',function(e){
                    switch (e.code){
                        case 'Digit1':
                            openWin('./balljump.html')
                            break;
                        case 'Digit2':
                            openWin('./balljump2.html')
                            break;
                        case 'Digit3':
                            openWin('./balljump3.html')
                            break;
                    }
                })
            }
        })
    }
}
)

