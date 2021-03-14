

if (document.querySelector('body').classList.contains('page')) {
  // Services tabs

  const tabsBtn = document.querySelectorAll('.tab-panel__btn');
  const tabsItems = document.querySelectorAll('.tab-content__item')

  tabsBtn.forEach(tabsClick);

  function tabsClick(item) {
    item.addEventListener('click', function () {
      let activeBtn = item
      let tabId = activeBtn.getAttribute('data-tab')
      let activeTab = document.querySelector(tabId)

      if (!activeBtn.classList.contains('tab-panel__btn--active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('tab-panel__btn--active')
        })

        tabsItems.forEach(function (item) {
          item.classList.remove('tab-content__item--active')
        })

        activeBtn.classList.add('tab-panel__btn--active')
        activeTab.classList.add('tab-content__item--active')
      }
    })
  }

  if (document.querySelector('.tab-panel__btn')) {
    document.querySelector('.tab-panel__btn').click()
  }

  // Feedback modal

  const feedbackModal = document.querySelector('.modal-feedback');
  const openFeedbackButton = document.querySelector('.contacts__btn');
  const feedbackForm = document.querySelector('.modal-feedback__form');

  const modalClose = feedbackModal.querySelector('.modal-close');
  const emailInput = feedbackModal.querySelector('[name=feedback-email]');
  const userNameInput = feedbackModal.querySelector('[name=feedback-name]');
  const messageInput = feedbackModal.querySelector('[name=feedback-message]');

  let inStorageSupport = true;
  let userNameStorage;
  let emailStorage;
  let messageStorage;

  try {
    userNameStorage = localStorage.getItem('user-name')
    emailStorage = localStorage.getItem('user-email')
    messageStorage = localStorage.getItem('user-message')
  } catch (err) {
    inStorageSupport = false;
  }

  openFeedbackButton.addEventListener("click", (evt) => {
    feedbackModal.classList.add('modal--show')

    if (userNameStorage) {
      userNameInput.value = userNameStorage
      emailInput.focus()
    } else {
      userNameInput.focus()
    }
    if (emailStorage) {
      emailInput.value = emailStorage
      messageInput.focus()
    } else {
      emailInput.focus()
    }
    if (messageStorage) {
      messageInput.value = messageStorage
      userNameInput.focus()
    }
  });

  modalClose.addEventListener("click", () => {
    localStorage.setItem('user-name', userNameInput.value)
    localStorage.setItem('user-email', emailInput.value)
    localStorage.setItem('user-message', messageInput.value)

    feedbackModal.classList.remove('modal--show')
    feedbackModal.classList.remove('modal--error')
  });

  feedbackForm.addEventListener('submit', (evt) => {
    if (!userNameInput.value || !emailInput.value || !messageInput.value) {
      evt.preventDefault()
      feedbackModal.classList.remove('modal--error')
      feedbackModal.offsetWidth = feedbackModal.offsetWidth
      feedbackModal.classList.add('modal--error')
    }

    localStorage.removeItem('user-name')
    localStorage.removeItem('user-email')
    localStorage.removeItem('user-message')
  });

  window.addEventListener('keyup', (evt) => {
    if (evt.keyCode === 27) {
      if (feedbackModal.classList.contains('modal--show')) {
        evt.preventDefault()
        feedbackModal.classList.remove('modal--show')
      }
    }
  });

// Modal map

  const mapModal = document.querySelector('.modal-map');
  const openMapButton = document.querySelector('.contacts__map');
  const modalCloseMap = mapModal.querySelector('.modal-close');

  openMapButton.addEventListener('click', () => {
    mapModal.classList.add('modal--show')
  });

  modalCloseMap.addEventListener('click', () => {
    mapModal.classList.remove('modal--show')
  });

// Map

  ymaps.ready(init);

  function init() {
    const map = new ymaps.Map('map', {
      center: [59.940163930035936, 30.314802652053764],
      zoom: 16,
      controls: ['zoomControl']
    });

    const placemark = new ymaps.Placemark([59.93863506417266, 30.323117499999945], {
      iconLayout: 'default#image'
    });

    map.geoObjects.add(placemark);
  }
}

// Bookmark active

const productBookmarkBtn = document.querySelectorAll('.product__bookmark');
const bookmarkCount = document.querySelector('.header-menu__link--bookmarks');
const productOrderBtn = document.querySelectorAll('.product__order');
const cartCount = document.querySelector('.header-menu__link--cart');

productBookmarkBtn.forEach(function (item) {
  item.addEventListener('click', () => {
    if (!bookmarkCount.classList.contains('header-menu__link--current')) {
      bookmarkCount.classList.add('header-menu__link--current')
    } else {
      bookmarkCount.classList.remove('header-menu__link--current')
    }
  })
});

productOrderBtn.forEach(function (item) {
  item.addEventListener('click', () => {
    if (!cartCount.classList.contains('header-menu__link--current')) {
      cartCount.classList.add('header-menu__link--current')
    } else {
      cartCount.classList.remove('header-menu__link--current')
    }
  })
});

// Notice modal


const modalNotice = document.querySelector('.add-cart');
const modalCloseNotice = modalNotice.querySelector('.modal-close');
const continueBtn = modalNotice.querySelector('.add-cart__btn--continue');

productOrderBtn.forEach(function (item) {
  item.addEventListener('click', () => {
    modalNotice.classList.add('modal--show')
  })
});

modalCloseNotice.addEventListener('click', () => {
  modalNotice.classList.remove('modal--show')
});

continueBtn.addEventListener('click', () => {
  modalNotice.classList.remove('modal--show')
});




