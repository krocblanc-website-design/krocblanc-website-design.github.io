window.addEventListener('DOMContentLoaded', function() {
    var hDoc = document.documentElement,
        hBody = document.body,
        hHeader = document.getElementsByClassName('DS_Header')[0],
        hWrapper = document.getElementsByClassName('DS_Header__Wrapper')[0],
        hImage = document.getElementsByClassName('DS_Lyrics__Image')[0],
        bSmall = hWrapper.className.indexOf(' --small') != -1;
        
    if( hImage ){
        hImage.getElementsByClassName('DS_Article')[0].style.top = 'calc(3.2rem + ' + hHeader.clientHeight + 'px)';
    }

    if( bSmall ){

        hBody.className += ' --header-fixed';
        hWrapper.style.top = 0;
        hWrapper.style.height = hHeader.clientHeight + 'px';
        document.getElementsByClassName('DS_Header__Placeholder')[0].style.height = hHeader.clientHeight + 'px';

    } else {

        window.addEventListener('scroll', function() {

            var bFixed = hBody.className.indexOf(' --header-fixed') != -1;

            if( hDoc.scrollTop + hHeader.clientHeight > hWrapper.clientHeight ){
                if( !bFixed ) {
                    hBody.className += ' --header-fixed';
                    hWrapper.style.bottom = 'calc(100% - ' + hHeader.clientHeight + 'px)';
                }
            } else {
                if( bFixed ){
                    hBody.className = hBody.className.replace(' --header-fixed', '');
                }
            }
        }, false );
    }
}, false);