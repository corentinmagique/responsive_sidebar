/* ========== SELECTING ITEM IN NAV MENU ========== */
let nav =  document.querySelectorAll('.nav li');
let sections =  document.querySelectorAll('.section');

function clearActive()
{
    nav.forEach((item) =>
    {
        item.classList.remove('active');
    });
}

function clearSectionActive()
{
    sections.forEach((item) => {
        item.classList.remove('active');
    });
}

function setSectionActive(item)
{
    item.classList.add('active');
}

nav.forEach((item) =>
{
    item.addEventListener('click',() => {
        clearActive();
        item.classList.add('active');

    });
});










