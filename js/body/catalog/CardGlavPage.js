let htmlCard = '';
CARD.forEach(({ id, name, img, url }) => {
   if(id<4){
    htmlCard += `

    <div class="card card-vouchers">
    <a href="${url}">
      <div class="image-box_t">
        <img src="${img}" alt="" />
      </div>
      <div class="profile-details">
        <div class="name-country">
        <h3>
            ${name}
        </h3>
        </div>
    </a>
  </div>
  </div>
            `;
}});

const html = `
            <div class="container">
                <div class="card-container__vouchers"> 
                    <div class="card-wrapper__vouchers">
                        ${htmlCard}
                    </div>
                </div>
            </div>        
`;
document.getElementById("card").innerHTML = html;