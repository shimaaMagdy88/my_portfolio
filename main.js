frontCols = document.querySelectorAll('.front');
odooCols = document.querySelectorAll('.odoo');
allBtn = document.querySelector('.all-projects');
frontBtn = document.querySelector('.front-projects');
odooBtn = document.querySelector('.odoo-projects');

allBtn.addEventListener('click', (e)=>{
    allBtn.style.color = '#d30747';
    odooBtn.style.color = '#ffffff';
    frontBtn.style.color = '#ffffff';
    odooCols.forEach(element => {
        element.style.display = 'flex';
    });
    frontCols.forEach(element => {
        element.style.display = 'flex';
    });
});

frontBtn.addEventListener('click', (e)=>{
    frontBtn.style.color = '#d30747';
    allBtn.style.color = '#ffffff';
    odooBtn.style.color = '#ffffff';
    odooCols.forEach(element => {
        element.style.display = 'none';
    });
    frontCols.forEach(element => {
        element.style.display = 'flex';
    });
});

odooBtn.addEventListener('click', (e)=>{
    odooBtn.style.color = '#d30747';
    allBtn.style.color = '#ffffff';
    frontBtn.style.color = '#ffffff';
    odooCols.forEach(element => {
        element.style.display = 'flex';
    });
    frontCols.forEach(element => {
        element.style.display = 'none';
    });
});