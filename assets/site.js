const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>nav.classList.toggle('show'));}
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
const form=document.querySelector('#leadForm');
if(form){form.addEventListener('submit',(e)=>{e.preventDefault();const note=document.querySelector('#formNotice');note.textContent='Thank you. This demo form is ready to be connected to your email, Microsoft Forms, SharePoint, CRM or other backend once you provide the preferred destination.';note.style.display='block';form.reset();});}
