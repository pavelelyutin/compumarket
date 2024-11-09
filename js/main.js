document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.querySelector(".footer__up");

  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");

  // Открыте и закрытие бургер-меню
  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("open");
    document.body.classList.toggle("body-hidden");
  });

  // Скрытие меню при нажатии на пункт меню
  nav.addEventListener("click", function (event) {
    if (event.target) {
      burger.classList.remove("active");
      nav.classList.remove("open");
      document.body.classList.remove("body-hidden");
    }
  });

  // Яндекс карта
  initMap();

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
    const { YMapDefaultMarker } = await ymaps3.import(
      "@yandex/ymaps3-markers@0.0.1"
    );

    const map = new YMap(document.getElementById("map"), {
      location: {
        center: [45.05438, 53.21558],
        zoom: 16,
      },
    });

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    const marker = new YMapDefaultMarker({ coordinates: [45.05438, 53.21558] });

    map.addChild(marker);
  }
});
