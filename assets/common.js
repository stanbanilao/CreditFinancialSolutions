document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-phone]').forEach(el=>el.setAttribute('href','tel:+27673319427'));
  document.querySelectorAll('[data-whatsapp]').forEach(el=>{
    el.setAttribute('href','https://wa.me/27673319427');
    el.setAttribute('target','_blank');
    el.setAttribute('rel','noopener');
  });
});
