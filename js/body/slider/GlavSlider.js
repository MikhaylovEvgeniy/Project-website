let htmlSlider= '';
SLIDER.forEach(({name, opisanie, but}) => {

    htmlSlider += `
    <div class="slider__item">
    <div class="slider__item-content">
      <div class="slider__title">
      ${name}
      </div>
      <div class="slider__text">
      ${opisanie}
      </div>
      <a data-fancybox data-src="#modal" href="javascript:;" class="slider__btn default-btn">
      ${but}
      </a>
    </div>
  </div>
    
            `;
});
const html_s = `
            <div class="slider">
                <div class="container">
                    <div class="slider__inner">
                        ${htmlSlider}
                    </div>
                </div>
            </div>      
`;
document.getElementById("slider").innerHTML = html_s;