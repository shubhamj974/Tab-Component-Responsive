let cl = console.log;

const Allheading = [...document.querySelectorAll('.heading li')];
const Tabtext = [...document.querySelectorAll('.Tab-Content')];

const OnClick = (e) => {
    let getAtt = e.target.getAttribute('data-id');
    cl(getAtt);
    Tabtext.forEach(div => div.classList.remove('active'));
    document.getElementById(getAtt).classList.add('active');
    Allheading.forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');
}


Allheading.forEach(li => li.addEventListener('click' , OnClick))

