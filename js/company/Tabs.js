let htmlTubsText = '';
TUBSTEXT.forEach(({text}) => {
    htmlTubsText += `
    <p>${text}</p>
            `;
});
let htmlTubsBTN = '';
TUBS.forEach(({name}) => {
    htmlTubsBTN += `
    <button class="tabs__btn">${name}</button>
            `;
});
let htmlTubs = '';
TUBS.forEach(({opisanie}) => {
    htmlTubs += `
    <div class="tabs__pane">
    ${opisanie}
    </div>
            `;
});
const html_tabs = `
                <div class="container_tab">
                ${htmlTubsText}
                </div> 
                <div class="tabs">
                    <div class="tabs__nav">  
                    <button class="tabs__btn tabs__btn_active">Про цены</button>         
                        ${htmlTubsBTN}
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__pane tabs__pane_show">
                        Больше нет необходимости обзванивать десятки турагентств. Мы уже собрали на одном сайте самые выгодные предложения.
                        Если вы найдете готовый тур дешевле, чем у нас, при одинаковых условиях бронирования, мы предложим его вам по той же или более выгодной цене.
                        </div>
                        ${htmlTubs}
                    </div>
                </div>        
`;

document.getElementById("tubs").innerHTML = html_tabs;