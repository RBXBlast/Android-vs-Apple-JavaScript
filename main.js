'use strict';

document.getElementById('android-btn').addEventListener('click', setAndroid);
document.getElementById('apple-btn').addEventListener('click', setApple);

function setAndroid(){
    document.getElementById('main').src="images/Android-Logo.jpg";
    document.getElementById('explore').innerHTML="Android Home";
    document.getElementById('explore').href="https://www.android.com/";
    document.body.style.backgroundColor = '#a4c93b';
    document.getElementById('explore').style.backgroundColor= '#a4c93b';
}
function setApple(){
    document.getElementById('main').src="images/Apple-Logo.jpg";
    document.getElementById('explore').innerHTML="Apple Home";
    document.getElementById('explore').href="https://www.apple.com/";
    document.body.style.backgroundColor = '#b6bcca';
    document.getElementById('explore').style.backgroundColor= '#b6bcca';
}