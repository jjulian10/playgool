const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');mobileNav.hidden=true;}
menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?'Abrir menu':'Fechar menu');mobileNav.hidden=expanded;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){closeMenu();menuButton.focus();}});
window.matchMedia('(min-width: 801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
document.querySelector('#year').textContent=new Date().getFullYear();
const icons={flame:'<path d="M12 3c1 5-3 6-3 9 0 2 1 3 3 3 3 0 4-3 3-5 3 2 5 4 5 7a8 8 0 0 1-16 0C4 11 10 10 12 3Z"/>',glass:'<path d="M6 3h12l-1 7a5 5 0 0 1-10 0L6 3ZM12 15v6M8 21h8M7 7h10"/>',shirt:'<path d="m8 3-5 3 3 5 2-1v11h8V10l2 1 3-5-5-3c0 4-8 4-8 0Z"/>',car:'<path d="m5 7 2-4h10l2 4 2 3v8H3v-8l2-3ZM5 7h14M7 12h.01M17 12h.01M5 18v3M19 18v3"/>',ball:'<circle cx="12" cy="12" r="9"/><path d="m12 8 4 3-2 5h-4l-2-5 4-3ZM12 3v5M21 9l-5 2M18 19l-4-3M6 19l4-3M3 9l5 2"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'};
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icons[el.dataset.icon]+'</svg>';});
