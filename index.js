// hamburger menu open
const open = () => {
  document.querySelector('#mobile').style.display = 'block';
};
document.querySelectorAll('.menuBar')[0].addEventListener('click', open);

// hamburger menu close

const close = () => {
  document.getElementById('mobile').style.display = 'none';
};
document.getElementById('close-menu').addEventListener('click', close);

// menu close when Items are clicked

document.querySelectorAll('.menuItems').forEach((item) => {
  item.addEventListener('click', close);
});

// featured speakers section

const guests = [
  {
    Name: 'Kumar Kannaiyan',
    Title: 'CEO AT DUMWALA',
    Description: 'Explorer of different cuisine With years of practical food knowledge and hands-on cooking experience,',
    Img: 'assets/0.jpg',
    Alt: 'speaker1',
  },

  {
    Name: 'David Chang',
    Title: 'FOOD REVOLUTIONIST',
    Description: 'David oversees a wide array of establishments, including 13 restaurants, in New York, Sydney,Toronto.',
    Img: 'assets/speaker2 (2).jpg',
    Alt: 'speaker2',
  },

  {
    Name: 'Tyler Florence',
    Title: 'CELEBRITY CHEF',
    Description: 'Host of  the Food Networks The Great Food Truck Race, founder of Sprout, an organic baby food company.',
    Img: 'assets/speaker3.jpg',
    Alt: 'speaker3',
  },

  {
    Name: ' Mario Batali',
    Title: 'FOOD SCIENTIST',
    Description: 'Mario develop and test different ingredients and foods, making sure they are safe for humans to consume.',
    Img: 'assets/speaker4.jpg',
    Alt: 'speaker4',
  },

  {
    Name: 'Amrita Raichand',
    Title: 'INDIAN CHEF',
    Description: 'An influential figure in food industry who gave a super hit show where she shares nutritional recipes for adults and children.',
    Img: 'assets/speaker5.jpg',
    Alt: 'speaker5',
  },

  {
    Name: 'Giada De Laurentiis',
    Title: 'RESTAURATEUR',
    Description: 'The founder of a catering business called GDL Foods, she has been an influential figure in the American culinary business.',
    Img: 'assets/speaker6.jpg',
    Alt: 'speaker6',
  },
];

// first speaker

const feature0 = document.querySelector('.f-speakers');

for (let i = 0; i <= 0; i += 1) {
  const card = `<div class="guest gu1" id="guest1">
<img src="${guests[i].Img}" alt="${guests[i].Alt}">
<div class="fttxt-div">
<h3 class="ft-name">
${guests[i].Name}
</h3>
<p class="p1">
${guests[i].Title}
</p>
<p class="p2">
${guests[i].Description}
</p>
</div>
</div>`;

  feature0.innerHTML += card;
}

// second speaker

const feature1 = document.querySelector('.f-speakers');

for (let i = 1; i <= 1; i += 1) {
  const card = `<div class="guest gu2" id="guest2">
<img src="${guests[i].Img}" alt="${guests[i].Alt}">
<div class="fttxt-div">
<h3 class="ft-name">
${guests[i].Name}
</h3>
<p class="p1">
${guests[i].Title}
</p>
<p class="p2">
${guests[i].Description}
</p>
</div>
</div>`;

  feature1.innerHTML += card;
}

// third speaker

const feature2 = document.querySelector('.f-speakers');

for (let i = 2; i <= 2; i += 1) {
  const card = `<div class="guest gu3" id="guest3">
<img src="${guests[i].Img}" alt="${guests[i].Alt}">
<div class="fttxt-div">
<h3 class="ft-name">
${guests[i].Name}
</h3>
<p class="p1">
${guests[i].Title}
</p>
<p class="p2">
${guests[i].Description}
</p>
</div>
</div>`;

  feature2.innerHTML += card;
}

// fourth speaker

const feature3 = document.querySelector('.f-speakers');

for (let i = 3; i <= 3; i += 1) {
  const card = `<div class="guest gu4" id="guest4">
<img src="${guests[i].Img}" alt="${guests[i].Alt}">
<div class="fttxt-div">
<h3 class="ft-name">
${guests[i].Name}
</h3>
<p class="p1">
${guests[i].Title}
</p>
<p class="p2">
${guests[i].Description}
</p>
</div>
</div>`;

  feature3.innerHTML += card;
}

// fifth speaker

const feature4 = document.querySelector('.f-speakers');

for (let i = 4; i <= 4; i += 1) {
  const card = `<div class="guest gu5" id="guest5">
<img src="${guests[i].Img}" alt="${guests[i].Alt}">
<div class="fttxt-div">
<h3 class="ft-name">
${guests[i].Name}
</h3>
<p class="p1">
${guests[i].Title}
</p>
<p class="p2">
${guests[i].Description}
</p>
</div>
</div>`;

  feature4.innerHTML += card;
}

// sixth speaker

const feature5 = document.querySelector('.f-speakers');

for (let i = 5; i <= 5; i += 1) {
  const card = `<div class="guest gu6" id="guest6">
<img src="${guests[i].Img}" alt="${guests[i].Alt}">
<div class="fttxt-div">
<h3 class="ft-name">
${guests[i].Name}
</h3>
<p class="p1">
${guests[i].Title}
</p>
<p class="p2">
${guests[i].Description}
</p>
</div>
</div>`;

  feature5.innerHTML += card;
}

// load more button to display speaker number 3,4,5 & 6

const more = () => {
  document.getElementById('guest3').style.display = 'flex';
  document.getElementById('guest4').style.display = 'flex';
  document.getElementById('guest5').style.display = 'flex';
  document.getElementById('guest6').style.display = 'flex';
};
document.getElementById('more-btn').addEventListener('click', more);