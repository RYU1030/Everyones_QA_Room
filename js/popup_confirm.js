function editPopup() {
  const popup = document.getElementById('edit-popup');
  if (!popup) return;

  const blackBg = document.getElementById('edit-popup-black-bg');
  const closeBtn = document.getElementById('edit-popup-close-btn');
  const showBtn = document.getElementById('edit-btn');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if (!elem) return;
    elem.addEventListener('click', function () {
      popup.classList.toggle('is-show');
    });
  }
}

function deletePopup() {
  const popup = document.getElementById('delete-popup');
  if (!popup) return;

  const blackBg = document.getElementById('delete-popup-black-bg');
  const closeBtn = document.getElementById('delete-popup-close-btn');
  const showBtn = document.getElementById('delete-btn');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if (!elem) return;
    elem.addEventListener('click', function () {
      popup.classList.toggle('is-show');
    });
  }
}

function sendAnswerPopup() {
  const popup = document.getElementById('send-answer-popup');
  if (!popup) return;

  const blackBg = document.getElementById('send-answer-popup-black-bg');
  const closeBtn = document.getElementById('send-answer-popup-close-btn');
  const showBtn = document.getElementById('send-answer-btn');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if (!elem) return;
    elem.addEventListener('click', function () {
      popup.classList.toggle('is-show');
    });
  }
}


editPopup();
deletePopup();
sendAnswerPopup();
