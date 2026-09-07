const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("twice-theme");
if(savedTheme === "dark"){body.classList.add("dark"); themeBtn.textContent="☀";}

themeBtn.addEventListener("click",()=>{
  body.classList.toggle("dark");
  const dark=body.classList.contains("dark");
  themeBtn.textContent=dark?"☀":"☾";
  localStorage.setItem("twice-theme",dark?"dark":"light");
});

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",(e)=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

const modal=document.getElementById("memberModal");
const modalName=document.getElementById("modalName");
const modalRole=document.getElementById("modalRole");
const modalFact=document.getElementById("modalFact");

document.querySelectorAll(".member-card").forEach(card=>{
  card.addEventListener("click",()=>{
    modalName.textContent=card.dataset.name;
    modalRole.textContent=card.dataset.role;
    modalFact.textContent=card.dataset.fact;
    modal.classList.add("show");
  });
});
document.getElementById("closeModal").addEventListener("click",()=>modal.classList.remove("show"));
modal.addEventListener("click",(e)=>{if(e.target===modal)modal.classList.remove("show")});
document.addEventListener("keydown",(e)=>{if(e.key==="Escape")modal.classList.remove("show")});

const title=document.getElementById("songTitle");
const year=document.getElementById("songYear");
document.querySelectorAll(".music-card").forEach(card=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".music-card").forEach(c=>c.classList.remove("active"));
    card.classList.add("active");
    title.textContent=card.dataset.song;
    year.textContent=card.dataset.year;
  });
});

// Small reveal animation
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
    }
  });
},{threshold:.08});

document.querySelectorAll(".section-heading,.member-card,.timeline-item,.music-card").forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(20px)";
  el.style.transition="opacity .6s ease, transform .6s ease";
  observer.observe(el);
});
