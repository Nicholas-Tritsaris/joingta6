const DEMO_USER = 'admin';
const DEMO_PASS = 'admin1';

const heistForm = document.getElementById('heistForm');
const heistUser = document.getElementById('heistUser');
const heistPass = document.getElementById('heistPass');
const demoBtn = document.getElementById('demoBtn');
const loginMsg = document.getElementById('loginMsg');
const heistContent = document.getElementById('heistContent');

// Fill demo credentials
demoBtn.addEventListener('click', () => {
  heistUser.value = DEMO_USER;
  heistPass.value = DEMO_PASS;
  loginMsg.style.color = '#bfe8c7';
  loginMsg.textContent = 'Demo credentials filled. Click Sign In.';
});

// Handle login
heistForm.addEventListener('submit', e => {
  e.preventDefault();
  const u = heistUser.value.trim();
  const p = heistPass.value.trim();

  if(u === DEMO_USER && p === DEMO_PASS){
    loginMsg.style.color = '#bfe8c7';
    loginMsg.textContent = 'Access granted! Unlocking the heist...';
    document.querySelector('.Container__container__k4t_f').style.display = 'none';
    heistContent.style.display = 'block';
  } else {
    loginMsg.style.color = '#f88';
    loginMsg.textContent = 'Invalid credentials. Try again.';
    heistPass.value = '';
    heistPass.focus();
  }
});
