const setTab = (hash) => {
    const active = document.querySelector('a.active');
    if(active){
        active.classList.remove('active')
    }
    const link = document.querySelector(`a[href="${hash}"]`);
    link.classList.add('active)')
}

window.addEventListener('hashchange', ()=> {
    setTab(window.location.hash);
});

if(!window.location.hash){
    window.location.hash = '#products';
} else {
    setTab(window.location.hash);
}


const loadData = ()=> {
    axios.get('https://acme-users-api-rev.herokuapp.com/api/products')
        .then(response => response.data)
        .then(data => {
            const products = document.querySelector('#products')
            const html = data.map(item => {
                return `
                    <div class='product>
                        <h3>${item.name}</h3>
                    </div>
                `
            }).join('');

            products.innerHTML = html;
        })
}

loadData();