let htmlChack = '';
CHACK.forEach(({ name, opisanie }) => {
    htmlChack += `
    <div class="advantages-item">
    <div class="advantages__title">
    ${name}
    </div>
    <div class="advantages__text">
    ${opisanie}
    </div>
  </div>
            `;
});

const html_chack = `
            <div class="advantages">
                <div id="advantages" class="container">
                    <div class="advantages__inner">
                        ${htmlChack}
                    </div>
                </div>
            </div>      
`;

let htmlProc = '';
PROC.forEach(({ nomer, name, opisanie, img }) => {
    htmlProc += `
    <div class="item__card">
    <img class="item__img" src="${img}" alt="">
    <div class="item__card__text">
      <h1>
        <span>${nomer}</span>
        ${name}
      </h1>
      <p>
      ${opisanie}
      </p>
    </div>
    </div>
            `;
});

const html_proc = `
                <div class="container">
                    <div class="items__card">
                        ${htmlProc}
                    </div>
                </div>    
`;
let htmlHeadTOP = '';

HEAD.forEach(({ nomerone, nomertwo, adressone, adresstwo}) => {
    htmlHeadTOP += `
    <a class="header__phone" href="tel:${nomerone}">${nomertwo}</a>
    <a class="header__email" href="${adressone}">${adresstwo}</a>
            `;
});
let htmlHeadMEN = '';

HEAD.forEach(({ logo, href1, href2, href3, m1, m2, m3 }) => {
    htmlHeadMEN += `
    <div class="header__logo">
    <a href="http://127.0.0.1:5503/index.html">
      <img src="${logo}" alt="">
    </a>
  </div>
  <nav class="menu">
    <div class="header__btn-menu">
      <span class="icon-menu"></span>
    </div>
    <ul>
      <li><a href="${href1}">${m1}</a></li>
      <li><a href="${href2}">${m2}</a></li>
      <li><a href="${href3}">${m3}</a></li>
    </ul>
  </nav>
            `;
});

const html_head = `
        <div class="header__top">
            <div class="container">
                <div class="header__contacts">
                        ${htmlHeadTOP}
                        <a data-fancybox data-src="#modal" href="javascript:;" class="header__btn" href="#">ОСТАВИТЬ ЗАЯВКУ</a>
                    </div>
                </div>
            </div>    
        <div class="header__content"> 
            <div class="container"> 
                <div class="header_content-inner">
                ${htmlHeadMEN}
                </div>
            </div>
        </div> 
`;


document.getElementById("header").innerHTML = html_head;
document.getElementById("chack").innerHTML = html_chack;
document.getElementById("proc").innerHTML = html_proc;

