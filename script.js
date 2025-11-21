// Password rules:
// - at least one number
// - at least one special char from !@#$%^&*()
// - min 8, max 32 chars

const select = (id)=> document.getElementById(id);

// UI toggles
select('showSignup').addEventListener('click', ()=>{
  document.querySelectorAll('.card').forEach(c=>c.classList.add('hidden'));
  select('signupCard').classList.remove('hidden');
});

select('showLogin')?.addEventListener('click', ()=>{
  document.querySelectorAll('.card').forEach(c=>c.classList.add('hidden'));
  select('loginCard').classList.remove('hidden');
});

// forgot modal
select('forgotLink').addEventListener('click', ()=>{
  select('forgotModal').setAttribute('aria-hidden','false');
});
select('cancelForgot').addEventListener('click', ()=>{
  select('forgotModal').setAttribute('aria-hidden','true');
});
select('submitForgot').addEventListener('click', ()=>{
  const email = select('forgotEmail').value.trim();
  if(!email) return alert('Please enter your email');
  // integrate with backend here
  alert('If this email exists, we sent password reset instructions.');
  select('forgotModal').setAttribute('aria-hidden','true');
});

// Signup validation
select('signupBtn').addEventListener('click', ()=>{
  const email = select('signupEmail').value.trim();
  const pass = select('signupPassword').value;
  const repass = select('signupRePassword').value;
  const err = select('signupError');

  if (!isValidEmail(email)) {
    err.textContent = 'Enter a valid email address.';
    return;
  }

  const rule = /^(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,32}$/;

  if(!rule.test(pass)){
    err.textContent = 'Password must have a number, a special char and be 8–32 chars long.';
    return;
  }
  if(pass !== repass){ 
    err.textContent = 'Passwords do not match.'; 
    return; 
  }

  err.textContent = '';
  alert('Signup success — integrate with your backend.');
});


// Login button (placeholder)
select('loginBtn').addEventListener('click', ()=>{
  const email = select('loginEmail').value.trim();
  const pass = select('loginPassword').value;

  if (!email || !pass) return alert('Enter email and password');

  if (!isValidEmail(email)) {
    return alert('Enter a valid email address');
  }

  alert('Login clicked — connect to backend authentication.');
});


function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}


function togglePass(id, btn) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Hide";
  } else {
    input.type = "password";
    btn.textContent = "Show";
  }
}
