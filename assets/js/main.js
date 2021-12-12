let nav =  document.querySelectorAll('.nav li');

function clearActive()
{
    nav.forEach((item) =>
    {
        item.classList.remove('active');
    });
}

nav.forEach((item) =>
{
    item.addEventListener('click',() => {
        clearActive();
        item.classList.add('active');
        console.log('Clicked !');
    });
});

