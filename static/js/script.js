let center = [56.31419515414543, 43.98591273732507];
let football = [56.29284315745979, 43.97466955590287]
let theatre = [56.320434973297694, 44.00198861231475]
let djany = [56.32654901869941, 44.01207172305868]
let ricca = [56.29635660409398, 44.06510664621672]
let park = [56.27449167139395, 43.97336103781096]
let kremlin = [56.32843394013867, 44.00310993183528]

const categoriesData = {
  category1: [{
    lat: 56.29284315745979,
    lon: 43.97466955590287,
    name: 'Футбольное поле',
    description: 'Шикарный спортивный манеж с теннисными кортами и футбольными полями',
    rating: '9.3/10',
  },
  {
    lat: 56.320434973297694,
    lon: 44.00198861231475,
    name: 'Театр',
    description: 'Лучшее место для культурного отдыха и веселья',
    rating: '9.9/10',
  },
  ],
  category2: [{
    lat: 56.32654901869941,
    lon: 44.01207172305868,
    name: 'Грузинская кухня',
    description: 'Отличное место, для гастрономического удовольствия',
    rating: '9.4/10',
  },
  {
    lat: 56.29635660409398,
    lon: 44.06510664621672,
    name: 'Пицца',
    description: 'Можно долго защищать классику, но вы только попробуйте эту пиццу',
    rating: '10/10',
  },
  ],
  category3: [{
    lat: 56.27449167139395,
    lon: 43.97336103781096,
    name: 'Парк',
    description: 'Радуется все тело, кроме ног, настолько он большой и красивый',
    rating: '9.5/10',
  },
  {
    lat: 56.32843394013867,
    lon: 44.00310993183528,
    name: 'Кремль',
    description: 'Пожалуй самое тихое и душевное место во всем Нижнем Новгороде',
    rating: '9.6/10',
  },
  ],
};

const init = () => {
  const map = new ymaps.Map('map-nn', {
    center: center,
    zoom: 12
  });

  let activeCategory = null;

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');


  const showCategory = (category) => {
    map.geoObjects.removeAll();

    categoriesData[category].forEach((item) => {
      const placemark = new ymaps.Placemark([item.lat, item.lon], {
        hintContent: item.name,
        balloonContentHeader: item.name,
        balloonContentBody: item.description,
        balloonContentFooter: item.rating,
      },
      {
        preset: 'islands#dotIcon',
        iconColor: '#f87b15'
      });

      map.geoObjects.add(placemark);
    });

    activeCategory = category;
  }

  const categoryButtons = document.querySelectorAll('.category-button');
  categoryButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.category;
      showCategory(category);
    });
  });

  showCategory(activeCategory);
};

ymaps.ready(init);