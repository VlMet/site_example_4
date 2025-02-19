const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings);
  };

  const checker = function () {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) {
        swiper.destroy(true, true);
      }
      return;
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
};

const init = {
  Selectinfo: function () {
    const clickableList = $('.select-info');

    clickableList.each(function () {
      const clickBlock = $(this);
      const clickItems = clickBlock.find('.select-info__control .btn');

      clickItems.on('click', function () {
        const clickItem = $(this);
        if (!clickItem.hasClass('active')) {
          const otherActive = clickBlock.find('.active');
          otherActive.removeClass('active');
          clickBlock.removeClass(`opened-${otherActive.index() + 1}`);
          clickItem.addClass('active');
          clickBlock.addClass(`opened-${clickItem.index() + 1}`);
        }
      });
    });
  },

  Selectquest: function () {
    const clickableList = $('.select-quest_clickable .select-quest__control');

    clickableList.each(function () {
      const clickBlock = $(this);
      const clickItems = clickBlock.find('.select-quest__btn');

      clickItems.on('mouseover', function () {
        const clickItem = $(this);
        if (!clickItem.hasClass('active')) {
          const otherActive = clickBlock.find('.active');
          otherActive.removeClass('active');
          clickBlock.parent().removeClass(`opened-${otherActive.index() + 1}`);
          clickItem.addClass('active');
          clickBlock.parent().addClass(`opened-${clickItem.index() + 1}`);
        }
      });
    });
  },

  MobileMenu: function () {
    const clickableList = $('.mobile-menu > nav > ul');

    clickableList.each(function () {
      const clickBlock = $(this);
      const clickItems = clickBlock.find('> li');

      clickItems.on('click', function () {
        const clickItem = $(this);
        if (!clickItem.hasClass('active')) {
          const otherActive = clickBlock.find('.active');
          otherActive.removeClass('active');
          clickItem.addClass('active');
        } else {
          clickItem.toggleClass('active');
        }
      });
    });
  },

  ClickList: function () {
    const clickableList = $('.clickable-list');

    clickableList.each(function () {
      const clickBlock = $(this);
      const clickItems = clickBlock.find('.clickable');

      clickItems.on('click', function () {
        const clickItem = $(this);
        if (!clickItem.hasClass('active')) {
          const otherActive = clickBlock.find('.active');
          otherActive.removeClass('active');
          clickItem.addClass('active');
        } else {
          clickItem.toggleClass('active');
        }
      });
    });
  },

  ClickSolo: function () {
    const clickableListSolo = $('.clickable-solo');
  
    clickableListSolo.each(function () {
      const clickElement = $(this);
      let activeTimer;
  
      clickElement.on('click', function (e) {
        e.stopPropagation();
        clickElement.toggleClass('active');
  
        if (clickElement.hasClass('header__burger')) {
          $('html').toggleClass('menu-opened');
        }
  
        $('.closed-window').on('click', function () {
          $('.clickable-solo.active').removeClass('active');
          $('html').removeClass('menu-opened');
        });
      });
    })
  },

  Table: function () {
    const closeBtn = $('.table .table__bottom > .table__btn');
    const tableParent = $('.table');
    closeBtn.on('click', function () {
      if (tableParent.hasClass('closed')) {
        tableParent.removeClass('closed');
        closeBtn.find('span').text('Свернуть');
      } else {
        $('html, body').animate(
          {
            scrollTop: $('#table-anchor').offset().top,
          },
          600
        );
        tableParent.addClass('closed');
        closeBtn.find('span').text('Развернуть');
      }
    });
    const clickableList = $('.table .table__control');
    clickableList.each(function () {
      const clickBlock = $(this);
      const clickItems = clickBlock.find('.table__btn');

      clickItems.on('click', function () {
        const clickItem = $(this);
        if (!clickItem.hasClass('active')) {
          const otherActive = clickBlock.find('.active');
          otherActive.removeClass('active');
          clickBlock.parent().removeClass(`opened-${otherActive.index() + 1}`);
          clickItem.addClass('active');
          clickBlock.parent().addClass(`opened-${clickItem.index() + 1}`);
        }
      });
    });
  },

  FAQ: function () {
    $('.faq > .faq__block > .faq__content').hide();

    $('.faq > .faq__block > .faq__trigger').click(function (e) {
      e.preventDefault();
      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active').find('.faq__content').slideUp();
      } else {
        $('.faq > .faq__block.active > .faq__content').slideUp();
        $('.faq > .faq__block.active').removeClass('active');
        $(this).parent().addClass('active').find('.faq__content').slideDown();
      }
      return false;
    });
  },

  Details: function () {
    $('.details > .details__item > .details__answer').hide();

    $('.details > .details__item > .details__quest').click(function (e) {
      e.preventDefault();
      if ($(this).parent().hasClass('active')) {
        $(this)
          .parent()
          .removeClass('active')
          .find('.details__answer')
          .slideUp();
      } else {
        $('.details > .details__item.active .details__answer').slideUp();
        $('.details > .details__item.active').removeClass('active');
        $(this)
          .parent()
          .addClass('active')
          .find('.details__answer')
          .slideDown();
      }
      return false;
    });
  },

  Opendetails: function () {
    $('.open-details > .open-details__item .open-details__bottom').click(
      function (e) {
        if ($(this).parent().parent().hasClass('active')) {
          $(this).parent().parent().removeClass('active');
        } else {
          $(this).parent().parent().addClass('active').find('.details__text');
        }
        return false;
      }
    );
  },

  Swipers: function () {
    resizableSwiper('(max-width: 767px)', '.cardSliderMobile', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      // speed: 1000,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    resizableSwiper('(max-width: 767px)', '.mySwiperMobile', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      //slidesPerGroupSkip: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
    });

    var swiper = new Swiper('.mySwiper', {
      direction: 'horizontal',
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      loopAddBlankSlides: true,
      slidesPerView: 'auto',
      speed: 5000,
      loopAdditionalSlides: 3,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
        1280: {
          spaceBetween: 32,
        },
      },
    });
  },
};

document.addEventListener('DOMContentLoaded', function () {
  init.ClickList();
  init.ClickSolo();
  init.Selectinfo();
  init.Selectquest();
  init.Details();
  init.Opendetails();
  init.Table();
  init.FAQ();
  init.Swipers();
  init.MobileMenu();

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  $(window).resize(
    debounce(function () {
      const window_width = $(window).width();
      if (window_width > 1280) {
        $('html').removeClass('menu-opened');
      }
    }, 250)
  );

  $('nav > ul > li > a').on('click', function (e) {
    e.preventDefault();
  });
});
