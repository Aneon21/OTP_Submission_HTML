const warn = document.getElementById('warning');
const sbmtBtn = document.getElementById('submit');
const otpNum = document.getElementById('otp');

window.onload = function(){
    otpNum.value = "";
}

otpNum.addEventListener('keyup', (e)=> {

    const value = e.currentTarget.value;

    if(value!= ''){
        if(isNaN(value)){
            otpNum.value='';
            warn.hidden = false;
            warn.innerText = "Please your OTP number";
            sbmtBtn.disabled = true;
        }
        else{
            warn.hidden = true;
            sbmtBtn.disabled = false;
        }
    }
    else{
        warn.hidden = true;
        sbmtBtn.disabled = true;
    }
})