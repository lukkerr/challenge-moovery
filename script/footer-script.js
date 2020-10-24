document.querySelector('body').addEventListener('onload',Data());
document.querySelector('.ReloadIconAll').addEventListener('click',() => {
    document.querySelector('table.BoxData tbody').innerHTML = '';
    Data();
});