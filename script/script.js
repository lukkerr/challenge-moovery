Data = () => {
    fetch('https://api.randomuser.me/?results=10').then(res => res.json()).then(data => {
        data.results.map(dataItem => {
            const Content = 
            `<tr class='animate__fadeInLeft'>
                <td>${dataItem.name.first}</td>
                <td>${dataItem.name.last}</td>
                <td>${dataItem.dob.age}</td>
                <td>${dataItem.location.city}</td>
                <td class='AlignCenter'>
                    <img src='${dataItem.picture.medium}'>
                </td>
                <td class='ReloadIcon' onclick='ReloadItem(this.parentElement)'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" class="svg-inline--fa fa-sync-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path>
                    </svg>
                </td>
            </tr>`
            document.querySelector('table.BoxData tbody').insertAdjacentHTML('beforeend',Content)
        });
        document.querySelector('.ReloadIconAll').setAttribute('onclick','ReloadAll(this)');
    });
}

ReloadItem = (clickedRow) => {
    clickedRow.classList.remove('animate__fadeInLeft');
    clickedRow.classList.add('animate__fadeOutRight');
    fetch('https://api.randomuser.me/?results=10').then(res => res.json()).then(data => {
        let dataItem = data.results[0]
            const Content = 
            `
                <td class='first-data'>${dataItem.name.first}</td>
                <td class='second-data'>${dataItem.name.last}</td>
                <td class='third-data'>${dataItem.dob.age}</td>
                <td class='fourth-data'>${dataItem.location.city}</td>
                <td class='AlignCenter'>
                    <img src='${dataItem.picture.medium}'>
                </td>
                <td class='ReloadIcon' onclick='ReloadItem(this.parentElement)'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" class="svg-inline--fa fa-sync-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path>
                    </svg>
                </td>
            `
            clickedRow.onanimationend = () => {
                clickedRow.classList.add("animate__fadeInLeft")
                clickedRow.classList.remove('animate__fadeOutRight');
            };
            clickedRow.innerHTML = Content;
        });
};

ReloadAll = (self) => {
    self.removeAttribute('onclick');
    let Rows = Array.from(document.querySelectorAll('tbody tr'));
    Rows.map(row => {
        row.classList.remove('animate__fadeInLeft');
        row.classList.add('animate__fadeOutRight');
    });
    Rows[Rows.length - 1].onanimationend = () => {
        document.querySelector('table.BoxData tbody').innerHTML = '';
        Data();
    }
}

LoginCreate = () => {
    fetch('https://api.randomuser.me/?results=10').then(res => res.json()).then(data => {
        const Content = 
        `<div class='LoginData'>
            <h3><b>Email:</b> <span id='EmailAuth'>${data.results[0].email}</span></h3>
            <h3><b>Senha:</b> <span id='PasswordAuth'>${data.results[0].login.password}</span></h3>
        </div>`
        document.querySelector('.BoxLogo').insertAdjacentHTML('beforeend',Content);
    });
}