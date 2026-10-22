// DATA
const PROFILE = {
  github: 'https://github.com/khushir11',
  linkedin: 'https://www.linkedin.com/in/khushi-rai-2653192aa',
  email: 'raikhushi9652@gmail.com'
};

const EMAILJS_CONFIG = {
  serviceId: '',
  templateId: '',
  publicKey: ''
};

const PROJECTS = [
  {id:1,title:'Sleep360',subtitle:'AI Smart Sleep Monitoring System',desc:'An ML-powered platform that analyzes sleep quality, predicts attendance risk, and provides personalized health recommendations using behavioral data.',tech:['Python','Flask','Scikit-learn','Pandas','NumPy','JavaScript'],features:['Sleep quality analysis','Attendance risk prediction','ML prediction engine','Health analytics dashboard','Personalized recommendations','Interactive charts'],github:'https://github.com/khushir11/Sleep360',demo:null,images:['assets/project-ss-1.jpeg','assets/project-ss-2.jpeg'],caseStudy:'Designed as a practical ML workflow: collect sleep inputs, process them into meaningful signals, run prediction logic, and present the results through a clear dashboard for students.'},
  {id:2,title:'CareerConnect',subtitle:'MERN Stack Job Portal',desc:'A full-stack job portal connecting candidates and recruiters with job posting, resume upload, application tracking, and role-based dashboards.',tech:['MongoDB','Express.js','React.js','Node.js','JavaScript'],features:['User authentication','Job listings','Recruiter dashboard','Candidate dashboard','Resume upload','Application tracking'],github:'https://github.com/khushir11/CareerConnect',demo:null,images:['assets/project-ss-3.jpeg','assets/project-ss-4.jpeg'],caseStudy:'Built around two user journeys: recruiters manage postings and candidates manage applications. The project emphasizes reusable MERN components and API-driven state.'},
  {id:3,title:'StudyNotion',subtitle:'Learning Management System',desc:'A full-featured LMS built with the MERN stack, offering course creation, video lectures, progress tracking, and separate instructor/student dashboards.',tech:['MongoDB','Express.js','React.js','Node.js','REST APIs'],features:['Authentication','Course management','Video learning','Instructor dashboard','Student dashboard','Progress tracking'],github:'https://github.com/khushir11/StudyNotion',demo:'https://studynotion-frontend.vercel.app/',images:['assets/project-ss-5.jpeg','assets/project-ss-6.jpeg'],caseStudy:'Focused on a complete product flow from course creation to student learning progress, with separated dashboard experiences for instructors and learners.'},
  {id:4,title:'RecallIQ',subtitle:'AI Customer Re-engagement Agent',desc:'An AI-native CRM platform that identifies at-risk customers and generates personalized re-engagement campaigns using AI APIs.',tech:['JavaScript','Node.js','AI APIs'],features:['Churn prediction','AI campaign generation','Customer analytics','CRM dashboard'],github:'https://github.com/khushir11/RecallIQ---Customer-Re-Engagement-Agent',demo:null,images:['assets/project-ss-1.jpeg','assets/project-ss-4.jpeg'],caseStudy:'Explores how AI can support CRM workflows by turning customer signals into recommended engagement actions and campaign copy.'},
  {id:5,title:'Railway Management System',subtitle:'Java Desktop Application',desc:'A complete desktop application for managing train schedules, ticket booking, passenger databases, and seat allocation.',tech:['Java','SQL','Swing'],features:['Train scheduling','Ticket booking','Passenger database','Seat management'],github:'https://github.com/khushir11',demo:null,images:['assets/project-ss-2.jpeg','assets/project-ss-3.jpeg'],caseStudy:'Implemented as a database-backed desktop workflow for core railway operations, with emphasis on CRUD screens and reliable booking state.'},
  {id:6,title:'Real-Time Chat App',subtitle:'Java Socket Programming',desc:'A multi-client real-time chat application using Java socket programming and multithreading for direct and group conversations.',tech:['Java','Socket Programming','Multithreading'],features:['One-to-one messaging','Group chat','Multiple clients','Real-time communication'],github:'https://github.com/khushir11',demo:null,images:['assets/project-ss-4.jpeg','assets/project-ss-5.jpeg'],caseStudy:'Built to understand networking fundamentals: persistent socket connections, threaded clients, and message routing across sessions.'},
  {id:7,title:'Mental Health Chatbot',subtitle:'ML Desktop Application',desc:'An NLP-driven desktop chatbot that analyzes symptom descriptions to predict potential mental health conditions and suggest support resources.',tech:['Python','Machine Learning','NLP'],features:['NLP symptom analysis','Condition prediction','Treatment recommendation','Desktop UI'],github:'https://github.com/khushir11',demo:null,images:['assets/project-ss-6.jpeg','assets/project-ss-1.jpeg'],caseStudy:'A learning-focused ML application that combines text processing, classification logic, and a simple user-facing conversation interface.'}
];

const CERTS = [
  {org:'Amazon Web Services',logo:'fab fa-aws',title:'AWS Certified Cloud Practitioner',credentialId:'AWS-CCP-LOCAL',date:'2024',image:'assets/aws-cloud-practitioner.png',verifyUrl:'assets/aws-cloud-practitioner.pdf',viewUrl:'assets/aws-cloud-practitioner.pdf'},
  {org:'Amazon Web Services',logo:'fab fa-aws',title:'AWS Certified AI Practitioner',credentialId:'AWS-AI-LOCAL',date:'2024',image:'assets/aws-ai-practitioner.png',verifyUrl:'assets/aws-ai-practitioner.pdf',viewUrl:'assets/aws-ai-practitioner.pdf'},
  {org:'Salesforce',logo:'fab fa-salesforce',title:'Agentforce Specialist',credentialId:'Cert7320030',date:'Dec 2025',image:'assets/salesforce-agentforce-specialist.png',verifyUrl:'assets/salesforce-agentforce-specialist.pdf',viewUrl:'assets/salesforce-agentforce-specialist.pdf'},
  {org:'Cisco',logo:'fas fa-network-wired',title:'Networking Basics',credentialId:'CISCO-NB-LOCAL',date:'2025',image:'assets/cisco-networking-basics.png',verifyUrl:'assets/cisco-networking-basics.pdf',viewUrl:'assets/cisco-networking-basics.pdf'}
];

function escapeHtml(value){
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map((p,i)=>`
    <article class="project-card reveal" tabindex="0" role="button" aria-label="View details for ${escapeHtml(p.title)}" style="animation-delay:${i*0.08}s" onclick="openProjectModal(${p.id})" onkeydown="handleCardKey(event,${p.id})">
      <div class="project-body">
        <div class="project-tags">${p.tech.slice(0,4).map(t=>`<span class="project-tag">${escapeHtml(t)}</span>`).join('')}${p.tech.length>4?`<span class="project-tag">+${p.tech.length-4}</span>`:''}</div>
        <div class="project-title">${escapeHtml(p.title)}</div>
        <div class="project-desc">${escapeHtml(p.desc)}</div>
        <div class="project-btns">
          <a href="${p.github}" target="_blank" rel="noopener" class="project-btn pbtn-gh" onclick="event.stopPropagation()" aria-label="Open ${escapeHtml(p.title)} GitHub repository"><i class="fab fa-github"></i> GitHub</a>
          ${p.demo?`<a href="${p.demo}" target="_blank" rel="noopener" class="project-btn pbtn-demo" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> Live Demo</a>`:`<button type="button" class="project-btn pbtn-demo disabled" disabled aria-disabled="true" onclick="event.stopPropagation()"><i class="fas fa-ban"></i> No Demo</button>`}
          <button type="button" class="project-btn pbtn-details" onclick="event.stopPropagation();openProjectModal(${p.id})"><i class="fas fa-info-circle"></i> View Details</button>
        </div>
      </div>
    </article>
  `).join('');
}
function handleCardKey(event,id){
  if(event.key === 'Enter' || event.key === ' '){
    event.preventDefault();
    openProjectModal(id);
  }
}

function openProjectModal(id){
  const p = PROJECTS.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('modalTitle').textContent=p.title;
  document.getElementById('modalBody').innerHTML=`
    <p style="color:var(--accent);font-weight:600;margin-bottom:0.5rem">${escapeHtml(p.subtitle)}</p>
    <p style="color:var(--text2);line-height:1.7;margin-bottom:1.5rem">${escapeHtml(p.desc)}</p>
    <div class="modal-grid">
      <div>
        <h4 style="font-family:'Space Grotesk',sans-serif;margin-bottom:0.75rem">Tech Stack</h4>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.5rem">${p.tech.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      </div>
      <div>
        <h4 style="font-family:'Space Grotesk',sans-serif;margin-bottom:0.75rem">Features</h4>
        <ul class="modal-list">${p.features.map(f=>`<li>${escapeHtml(f)}</li>`).join('')}</ul>
      </div>
    </div>
    <h4 style="font-family:'Space Grotesk',sans-serif;margin:1.5rem 0 0.75rem">Case Study</h4>
    <p style="color:var(--text2);line-height:1.7;margin-bottom:1.5rem">${escapeHtml(p.caseStudy)}</p>
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
      <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline"><i class="fab fa-github"></i> View Code</a>
      ${p.demo?`<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>`:`<button class="btn btn-ghost" type="button" disabled aria-disabled="true"><i class="fas fa-ban"></i> Demo Not Available</button>`}
    </div>
  `;
  openModal();
}
function renderCerts(){
  const grid = document.getElementById('certsGrid');
  grid.innerHTML = CERTS.map((c,i)=>`
    <article class="cert-card reveal" style="animation-delay:${i*0.1}s">
      <div class="cert-org-icon" aria-hidden="true"><i class="${c.logo}" style="color:var(--accent)"></i></div>
      <div class="cert-org">${escapeHtml(c.org)}</div>
      <div class="cert-title">${escapeHtml(c.title)}</div>
      <div class="cert-meta">
        <span><i class="fas fa-id-badge"></i> Credential ID: ${escapeHtml(c.credentialId)}</span>
        <span><i class="fas fa-calendar-check"></i> Issue Date: ${escapeHtml(c.date)}</span>
      </div>
      <div class="cert-btns">
        <a href="${c.verifyUrl}" target="_blank" rel="noopener" class="cert-btn cert-verify"><i class="fas fa-check-circle"></i> Verify Certificate</a>
        <a href="${c.viewUrl}" target="_blank" rel="noopener" class="cert-btn cert-view"><i class="fas fa-eye"></i> View Certificate</a>
      </div>
    </article>
  `).join('');
}

async function loadGitHub(){
  const username='khushir11';
  try{
    const [userRes,reposRes]=await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
    ]);
    if(!userRes.ok||!reposRes.ok) throw new Error('GitHub API unavailable');
    const user=await userRes.json();
    const repos=await reposRes.json();

    const langCount={};
    repos.forEach(r=>{if(r.language)langCount[r.language]=(langCount[r.language]||0)+1});
    const topLang=Object.entries(langCount).sort((a,b)=>b[1]-a[1])[0];
    const pinnedNames=['Sleep360','StudyNotion','RecallIQ---Customer-Re-Engagement-Agent'];
    const pinnedRepos=pinnedNames.map(n=>repos.find(r=>r.name.toLowerCase()===n.toLowerCase())).filter(Boolean);
    const showRepos=pinnedRepos;
    const latestRepo=repos[0];

    document.getElementById('ghRepos').textContent=user.public_repos ?? repos.length;
    document.getElementById('ghLang').textContent=topLang?topLang[0]:'N/A';
    document.getElementById('ghPinned').textContent=showRepos.length;
    document.getElementById('ghCommit').textContent=latestRepo?.updated_at ? new Date(latestRepo.updated_at).toLocaleDateString(undefined,{month:'short',day:'numeric'}) : 'N/A';

    document.getElementById('ghReposList').innerHTML=showRepos.map(r=>`
      <a href="${r.html_url}" target="_blank" rel="noopener" class="gh-repo-card" aria-label="Open ${escapeHtml(r.name)} on GitHub">
        <div class="gh-repo-name"><i class="fas fa-code-branch"></i>${escapeHtml(r.name)}</div>
        <div class="gh-repo-desc">${escapeHtml(r.description||'Repository details available on GitHub.')}</div>
        <div class="gh-repo-meta">
          ${r.language?`<span>${escapeHtml(r.language)}</span>`:''}
          <span>${r.stargazers_count || 0} stars</span>
          <span>${r.forks_count || 0} forks</span>
        </div>
      </a>
    `).join('');
  }catch(e){
    ['ghRepos','ghLang','ghPinned','ghCommit'].forEach(id=>{
      const labels={ghRepos:'Public',ghLang:'JavaScript',ghPinned:'3',ghCommit:'API limited'};
      document.getElementById(id).textContent=labels[id];
    });
    const featuredFallback=['Sleep360','StudyNotion','RecallIQ'];
    document.getElementById('ghReposList').innerHTML=featuredFallback.map(name=>PROJECTS.find(p=>p.title===name)).filter(Boolean).map(p=>`
      <a href="${p.github}" target="_blank" rel="noopener" class="gh-repo-card">
        <div class="gh-repo-name"><i class="fas fa-code-branch"></i>${escapeHtml(p.title)}</div>
        <div class="gh-repo-desc">${escapeHtml(p.subtitle)}</div>
        <div class="gh-repo-meta"><span>${escapeHtml(p.tech[0])}</span><span>Portfolio fallback</span></div>
      </a>
    `).join('');
  }
}
// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit',async function(e){
  e.preventDefault();
  const btn=document.getElementById('submitBtn');
  const status=document.getElementById('formStatus');
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const msg=document.getElementById('message').value.trim();

  status.className='form-status';
  status.style.display='';

  if(!name||!email||!msg){
    status.textContent='Please fill in all fields.';status.className='form-status error';status.style.display='block';return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    status.textContent='Please enter a valid email address.';status.className='form-status error';status.style.display='block';return;
  }

  btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';

  try{
    const hasEmailJsConfig = EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey;
    if(typeof emailjs!=='undefined' && hasEmailJsConfig){
      await emailjs.send(EMAILJS_CONFIG.serviceId,EMAILJS_CONFIG.templateId,{from_name:name,from_email:email,reply_to:email,message:msg,to_name:'Khushi'},EMAILJS_CONFIG.publicKey);
      status.textContent='Message sent! I\'ll get back to you soon.';
      status.className='form-status success';
      status.style.display='block';
      this.reset();
    }else{
      window.location.href=`mailto:raikhushi9652@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`)}`;
      status.textContent='Your mail client has been opened with the message pre-filled.';
      status.className='form-status success';
      status.style.display='block';
    }
  }catch(err){
    status.textContent='Failed to send. Please email raikhushi9652@gmail.com directly.';
    status.className='form-status error';
    status.style.display='block';
  }
  btn.disabled=false;btn.innerHTML='<i class="fas fa-paper-plane"></i> Send Message';
});

// HELPERS
function scrollToSection(id){
  const el=document.getElementById(id);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
}
function openModal(){
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('modalOverlay').addEventListener('click',function(e){if(e.target===this)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// CURSOR
const cursor=document.getElementById('cursor');
const cursorGlow=document.getElementById('cursorGlow');
document.addEventListener('mousemove',e=>{
  cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';
  cursorGlow.style.left=e.clientX+'px';cursorGlow.style.top=e.clientY+'px';
});
document.querySelectorAll('a,button,.project-card,.cert-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.transform='translate(-50%,-50%) scale(2.5)';cursor.style.opacity='0.5'});
  el.addEventListener('mouseleave',()=>{cursor.style.transform='translate(-50%,-50%) scale(1)';cursor.style.opacity='1'});
});

const canAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.matchMedia('(pointer:fine)').matches;
if(canAnimate){
  document.querySelectorAll('.magnetic').forEach(el=>{
    el.addEventListener('mousemove',e=>{
      const rect=el.getBoundingClientRect();
      const x=(e.clientX-rect.left-rect.width/2)*0.18;
      const y=(e.clientY-rect.top-rect.height/2)*0.18;
      el.style.transform=`translate(${x}px,${y}px)`;
    });
    el.addEventListener('mouseleave',()=>{el.style.transform=''});
  });

  document.querySelectorAll('.project-card,.cert-card,.skill-category,.stat-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const rect=card.getBoundingClientRect();
      const rx=((e.clientY-rect.top)/rect.height-0.5)*-6;
      const ry=((e.clientX-rect.left)/rect.width-0.5)*6;
      card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave',()=>{card.style.transform=''});
  });

  const photo=document.querySelector('.photo-ring');
  document.querySelector('.hero-photo-wrap')?.addEventListener('mousemove',e=>{
    const rect=e.currentTarget.getBoundingClientRect();
    const x=((e.clientX-rect.left)/rect.width-0.5)*18;
    const y=((e.clientY-rect.top)/rect.height-0.5)*18;
    photo.style.transform=`translate3d(${x}px,${y}px,0) rotateX(${-y/4}deg) rotateY(${x/4}deg)`;
  });
  document.querySelector('.hero-photo-wrap')?.addEventListener('mouseleave',()=>{photo.style.transform=''});
}

// SCROLL BAR
window.addEventListener('scroll',()=>{
  const pct=(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight))*100;
  document.getElementById('scrollBar').style.width=pct+'%';

  // Nav active
  const nav=document.getElementById('navbar');
  nav.classList.toggle('scrolled',window.scrollY>50);

  // Active link
  const sections=['hero','about','skills','experience','projects','github','certifications','achievements','education','contact'];
  let active='';
  sections.forEach(id=>{
    const el=document.getElementById(id);
    if(el&&el.getBoundingClientRect().top<120)active=id;
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+active);
  });

  // Reveal
  document.querySelectorAll('.reveal').forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-80)el.classList.add('visible');
  });
});

// NAV SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const target=document.querySelector(this.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});

// HAMBURGER
document.getElementById('hamburger').addEventListener('click',()=>{
  document.getElementById('mobileNav').classList.toggle('open');
});
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open')}

// THEME
const themeBtn=document.getElementById('themeBtn');
let dark=true;
themeBtn.addEventListener('click',()=>{
  dark=!dark;
  document.documentElement.setAttribute('data-theme',dark?'':'light');
  themeBtn.innerHTML=dark?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>';
});

// TYPED
const roles=['Software Engineer','Full Stack MERN Developer','Machine Learning Enthusiast','AI Application Developer'];
let ri=0,ci=0,del=false;
function type(){
  const el=document.getElementById('typed');
  const cur=roles[ri];
  el.textContent=del?cur.substring(0,ci--):`${cur.substring(0,ci++)}`;
  if(!del&&ci>cur.length){setTimeout(()=>{del=true},1400);setTimeout(type,80);return}
  if(del&&ci<0){del=false;ri=(ri+1)%roles.length;ci=0;setTimeout(type,400);return}
  setTimeout(type,del?45:80);
}
type();

// PARTICLES
function createParticles(){
  const container=document.getElementById('particles');
  for(let i=0;i<25;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=Math.random()*3+1;
    p.style.cssText=`width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${['#6366f1','#8b5cf6','#06b6d4','#ec4899'][Math.floor(Math.random()*4)]};animation-duration:${15+Math.random()*25}s;animation-delay:${Math.random()*20}s`;
    container.appendChild(p);
  }
}
createParticles();

// LOADER
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hidden');
    document.querySelectorAll('.reveal').forEach(el=>{
      if(el.getBoundingClientRect().top<window.innerHeight)el.classList.add('visible');
    });
  },1600);
});

// INIT
renderProjects();
renderCerts();
loadGitHub();
