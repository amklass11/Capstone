const menBtn = document.querySelector('.hamburger');
const navbar = document.querySelector('.mobile-menu');
const Closer = document.querySelector('.close-button');
const rep = document.getElementById('pop');

menBtn.addEventListener('click', () => {
  menBtn.classList.toggle('nmobile-menu');
  navbar.classList.toggle('activate');
  navbar.classList.toggle('mobile-menu');
  Closer.classList.toggle('visible');
  rep.classList.toggle('activate');
});
Closer.addEventListener('click', () => {
  menBtn.classList.toggle('navblur');
  navbar.classList.toggle('activate');
  navbar.classList.toggle('mobile-menu');
  Closer.classList.toggle('visible');
});

// speakers section

const dataProjects = [
  {
    name: 'Masashi ',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
        'The truly creative mind in any field is no more than this: A human creature born abnormally, inhumanly sensitive. To him... a touch is a blow, a sound is a noise, a misfortune is a tragedy, a joy is an ecstasy, a friend is a lover, a lover is a god',
    image: './img/d1.jpeg',
  },
  {
    name: 'Elon',
    description:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionPopup:
        'The truly creative mind in any field is no more than this: A human creature born abnormally, inhumanly sensitive. To him... a touch is a blow, a sound is a noise, a misfortune is a tragedy, a joy is an ecstasy, a friend is a lover, a lover is a god',

    image: './img/d2.jpeg',
  },
  {
    name: 'Casper',
    description:
          'A man of God and a man of the pple a genius across multiple fields',
    descriptionPopup:
          'The truly creative mind in any field is no more than this: A human creature born abnormally, inhumanly sensitive. To him... a touch is a blow, a sound is a noise, a misfortune is a tragedy, a joy is an ecstasy, a friend is a lover, a lover is a god',

    image: './img/d3.jpeg',
  },
  {
    name: 'Kratos',
    description:
              'A man of God and a man of the pple a genius across multiple fields',
    descriptionPopup:
              'The truly creative mind in any field is no more than this: A human creature born abnormally, inhumanly sensitive. To him... a touch is a blow, a sound is a noise, a misfortune is a tragedy, a joy is an ecstasy, a friend is a lover, a lover is a god',

    image: './img/d4.jpeg',
  },
  {
    name: 'Phastos',
    description:
                  'A man of God and a man of the pple a genius across multiple fields',
    descriptionPopup:
                  'The true genius shudders at incompleteness — imperfection — and usually prefers silence to saying the something which is not everything that should be said.',
    image: './img/d5.jpeg',
  },
  {
    name: 'Mandem',
    description:
                      'A man of God and a man of the pple a genius across multiple fields',
    descriptionPopup:
                      'Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius — and a lot of courage to move in the opposite direction',
    image: './img/d6.jpeg',
  }];
function createCard(el) {
  return `
    <div class="col-md-6">
    <div class="col-md-3">
        <img src="${el.image}" class="img-circle" alt="card image">
    </div>
    <div class="col-md-4 " id="card-pic">
        <h3>${el.name}</h3>
        <p class="mb-1">${el.description}</p>
        <p>${el.descriptionPopup}</p>
    </div>
</div>
  `;
}

const myProjects = dataProjects.map((el) => {
  const div = document.createElement('div');
  div.innerHTML = createCard(el);
  return div;
});

const worksSection = document.getElementById('speakers');

for (let i = 0; i < myProjects.length; i += 1) {
  worksSection.appendChild(myProjects[i]);
}