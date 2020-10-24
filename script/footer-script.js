document.querySelector('body').addEventListener('onload',LoginCreate(),Data());
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