let htmlForm = '';
FORM.forEach(() => {
    htmlForm += `
    <div class="input-box message-box">
    <textarea class="form__input" placeholder="Сообщение" name="message"></textarea>
  </div>
  <div class="form__item">
    <div id="check" class="checkbox">
      <input id="formAgreement" checked type="checkbox" name="agreement" class="checkbox__input _error">
      <label for="formAgreement" class="checkbox__label"><span>Я даю свое соглсаие на обработку персональных
          данных в
          соотвествии с Пользовательским соглашением*</a></span></label>
    </div>
  </div>
  <div class="button">
    <input class="form__button" type="submit" id="button" value="Отправить" />
  </div>
  `;

});
const html_formt = `
${htmlForm}
`;
document.getElementById("formt").innerHTML = html_formt;