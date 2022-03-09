const sbmtBtn = document.getElementById('submit');
const inpNmb = document.getElementById('number');
const warn = document.getElementById('warning');

window.onload = function(){
    inpNmb.value = "";
}

inpNmb.addEventListener('keyup', (e)=> {

    const value = e.currentTarget.value;

    if(value!= ''){
        if(isNaN(value)){
            inpNmb.value='';
            warn.hidden = false;
            warn.innerText = "Please enter a mobile number";
            sbmtBtn.disabled = true;
        }
        else if(value.length > 10 || value.length < 10){
            warn.hidden = false;
            warn.innerText = "Please enter a 10 digit mobile number";
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