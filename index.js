function myfun() {
    const meno=document.getElementById('meno');
    const priezvisko=document.getElementById('priezvisko');
    const email=document.getElementById('email');
    const heslo1=document.getElementById('heslo1');
    const heslo2=document.getElementById('heslo2');
    const message=document.getElementsByClassName('message');
    const sucess=document.getElementsByClassName('sucess');
    const error=document.getElementsByClassName('error');



    /*validacia pre meno*/
    if(meno.value==""){
        meno.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color='red';
        message[0].innerText="Meno nemôže byť prázdne";
        error[0].style.visibility = 'visible';
        error[0].style.color='red';
        u=0;
    }
    else if(meno.value.length<3&&meno.value.length>0){
        meno.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color='red';
        message[0].innerText="Meno musí obsahovať aspon 3 písmená";
        error[0].style.visibility = 'visible';
        error[0].style.color='red';
        u=0;
    }
    else if(meno.value.length>3&&(isNaN(parseFloat(meno.value)))){
        meno.style.borderColor = 'green';
        error[0].style.visibility = 'hidden';
        message[0].style.visibility = 'hidden';
        sucess[0].style.visibility = 'visible';
        sucess[0].style.color='green';
        u=1;
    }
    else{
        meno.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color='red';
        message[0].innerText="Čísla niesu povolené v mene";
        error[0].style.visibility = 'visible';
        error[0].style.color='red';
        u=0;
    }
    
    /* validacia pre priezvisko*/
    if(priezvisko.value==""){
        priezvisko.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color='red';
        message[0].innerText="Priezvisko nemôže byť prázdne";
        error[0].style.visibility = 'visible';
        error[0].style.color='red';
        u=0;
    }
    else if(priezvisko.value.length<3&&priezvisko.value.length>0){
        priezvisko.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color='red';
        message[0].innerText="Priezvisko musí obsahovať aspon 3 písmená";
        error[0].style.visibility = 'visible';
        error[0].style.color='red';
        u=0;
    }
    else if(priezvisko.value.length>3&&(isNaN(parseFloat(priezvisko.value)))){
        priezvisko.style.borderColor = 'green';
        error[0].style.visibility = 'hidden';
        message[0].style.visibility = 'hidden';
        sucess[0].style.visibility = 'visible';
        sucess[0].style.color='green';
        u=1;


    }
    else{
        priezvisko.style.borderColor = 'red';
        message[0].style.visibility = 'visible';
        message[0].style.color='red';
        message[0].innerText="Čísla niesu povolené v priezvisku";
        error[0].style.visibility = 'visible';
        error[0].style.color='red';
        u=0;

    }
    
    /*validacia pre email*/
    if(email.value==""){
        email.style.borderColor = 'red';
        message[1].style.visibility = 'visible';
        message[1].style.color='red';
        message[1].innerText="Email nemôže byť prázdny";
        error[1].style.visibility = 'visible';
        error[1].style.color='red';
        e=0;
    }
    else if(email.value.indexOf('@')<3||email.value.lastIndexOf('.')>=email.value.length-2){
        email.style.borderColor = 'red';
        message[1].style.visibility = 'visible';
        message[1].style.color='red';
        message[1].innerText="Invalid email";
        error[1].style.visibility = 'visible';
        error[1].style.color='red';
        e=0;
    }
    else{
        email.style.borderColor = 'green';
        error[1].style.visibility = 'hidden';
        message[1].style.visibility = 'hidden';
        sucess[1].style.visibility = 'visible';
        sucess[1].style.color='green';
        e=1;
    }
    
    

    return false;
}
