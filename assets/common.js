document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-phone]').forEach(el=>el.setAttribute('href','#contact-placeholder'));
  document.querySelectorAll('[data-whatsapp]').forEach(el=>el.setAttribute('href','#contact-placeholder'));
});
