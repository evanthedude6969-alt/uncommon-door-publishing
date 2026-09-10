document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav-links');
  const menu=document.querySelector('.menu');
  const closeMenu=()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')};
  if(menu&&nav){
    menu.removeAttribute('onclick');
    menu.setAttribute('aria-expanded','false');
    menu.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen))});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
    window.addEventListener('resize',()=>{if(window.innerWidth>800)closeMenu()});
  }
  const targets=document.querySelectorAll('.section,.card');
  if(!('IntersectionObserver'in window)){targets.forEach(target=>target.classList.add('reveal'));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target)}}),{threshold:.08});
  targets.forEach(target=>observer.observe(target));
});
