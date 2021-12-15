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

let addB =  document.querySelectorAll('.add');
let removeB =  document.querySelectorAll('.remove');

addB.forEach((item) =>
{
    item.addEventListener('click',() => {
        var valeur = parseInt(item.parentElement.children[1].value);
        valeur++;
        item.parentElement.children[1].value = valeur;

    });
});

removeB.forEach((item) =>
{
    item.addEventListener('click',() => {
        var valeur = parseInt(item.parentElement.children[1].value);
        if(valeur>0)valeur--;
        item.parentElement.children[1].value = valeur;

    });
});










