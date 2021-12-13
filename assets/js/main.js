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

        /* ========== NAVIGATION THROUGH SECTION ========== */
        // console.log(item.id);
        // clearSectionActive();
        // switch(item.id)
        // {
        //     case 'dashboard__button':
        //         setSectionActive(sections[0]);
        //         break;
        //     case 'achats__button':
        //         setSectionActive(sections[1]);
        //         break;
        //     case 'stock__button':
        //         setSectionActive(sections[2]);
        //         break;
        //     case 'settings__button':
        //         setSectionActive(sections[3]);
        //         break;
        // }
    });
});






