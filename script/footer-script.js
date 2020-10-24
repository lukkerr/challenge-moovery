document.getElementById('formLogin').addEventListener('submit',(event) => {
    event.preventDefault();
    let TestEmail = document.getElementById('Email').value === document.getElementById('EmailAuth').textContent;
    let TestPassword = document.getElementById('Password').value == document.getElementById('PasswordAuth').textContent;
    if(TestEmail && TestPassword){
        document.querySelector('.BoxLogo').classList.remove('animate__fadeInLeft');
        document.querySelector('.BoxLogo').classList.add('animate__fadeOutLeft');
        document.querySelector('#formLogin').classList.remove('animate__fadeInRight');
        document.querySelector('#formLogin').classList.add('animate__fadeOutRight');
        document.querySelector('#formLogin').onanimationend = () => {
            document.querySelector('.ApresentationScreen').style.display = 'none';
            document.querySelector('#Content').style.display = 'flex';
        }
    }else{
        window.alert('Email/Senha Incorretos');
    }
});

document.getElementById('formControlRange').addEventListener('change',() => {
    let TBody = document.querySelector('tbody');
    let Add = document.getElementById('formControlRange').value - 
        Array.from(TBody.children).length;
    if(Add >= 0){
        Data(Add);
        console.log(document.getElementById('formControlRange').value);
        console.log(Array.from(TBody.children).length);
    }else{
        for(Add; Add < 0 ; Add++){
            TBody.removeChild(TBody.lastElementChild);
        }
        document.getElementById('RangePrint').textContent = document.getElementById('formControlRange').value;
        console.log(document.getElementById('formControlRange').value);
        console.log(Array.from(TBody.children).length);
    }
});
