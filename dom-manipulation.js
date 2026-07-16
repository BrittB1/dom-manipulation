// SAMPLE MENU DATA STRUCTURE
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// ============================
// |          PART 1          |
// ============================

// 1. Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';

// 3.Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// 4.Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

// ============================
// |          PART 2          |
// ============================

// Next, create a blank menu bar that we can use to later add some interactivity to the page:
//1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');

// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// ============================
// |          PART 3          |
// ============================

// runs function once per item in the array
menuLinks.forEach(function (link) {

const linkEl = document.createElement('a');

linkEl.setAttribute('href',link.href);

linkEl.textContent = link.text;

topMenuEl.appendChild(linkEl);
});

// ============================
// |          PART 3.2         |
// ============================

const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';


// ============================
// |          PART 4.2         |
// ============================

const topMenuLinks = topMenuEl.querySelectorAll('a');


// 'when this element gets clicked, run this function.
topMenuEl, addEventListener('click', function (evt) {
  evt.preventDeafult();

  if (evt.target.tagName !== 'A') return;
  console.log(evt.target.textContent);
});

const isActive = evt.target.classList.contains('active')

topMenuLinks.forEach(function (link) {
  link.classList.remove('active');
});

if (!isActive) {
  evt.target.classList.add('active');
}
