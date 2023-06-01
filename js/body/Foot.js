let htmlFoot = '';
FOOT.forEach(({ map, time1, time2, time3, adress, ostanovka, tel1, tel2 }) => {
    htmlFoot += `
    <div class="footer__map">
    <iframe
      src="${map}"
      width="100%" height="230" style="border: 0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="footer_info">
    <div class="footer_menu">
      <div class="footer_menu__container">
        <img src="https://i.yapx.ru/WGQV9.png" alt="" class="footer__foto">
      </div>
    </div>
    <div class="footer_time">
      <p>
        График работы:
      </p>
      <p>
        Пн.-Пт.
        <span>${time1}</span>
      </p>
      <p>
        Сб.
        <span>${time2}</span>
      </p>
      <p>
        Вс.
        <span class="otsup">${time3}</span>
      </p>
    </div>
    <div class="footer_graphic">
      <p>
        Адрес:
      </p>
      <span>
      ${adress}
      </span>
      <p>
      ${ostanovka}
      </p>
      <p class="footer_tel">
        Телефон:
      </p>
      <p><a class="footer__phone" href="tel:${tel1}">${tel2}</a></p>
    </div>
  </div>
            `;
});

let htmlFootNiz = '';
FOOT.forEach(({ opisanie1 }) => {
    htmlFootNiz += `
    <div class="copy_one">
    ${opisanie1}
  </div>
            `;
});


const html_footer = `
        <div class="footer__container">
            <div class="container">
                        ${htmlFoot}
            </div>
        </div>
        <div class="footer__copy">  
            <div class="container">
                 <div class="copy__text"> 
                         ${htmlFootNiz}
                 </div>  
             </div>  
        </div>  
`;
document.getElementById("footer").innerHTML = html_footer;