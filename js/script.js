if (!sessionStorage.getItem("username")){
  welcomeMessage();
}

function welcomeMessage(){
  let userResponse = prompt("Welcome to Starseeker! So, what's your name?");
  if (userResponse === null || userResponse.trim() === ""){
    userResponse = "Guest";
  }
  sessionStorage.setItem("username", userResponse)
  document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}!`;
}

document.getElementById("welcome-speech").innerText =`Hello, ${sessionStorage.getItem("username") || "Guest"}!`;

function submitMessage(event){
  event.preventDefault();
  
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const birthDate = document.getElementById('birth-date').value;
  const genderInput = document.querySelector('input[name="gender"]:checked');
    if (!genderInput) {
        alert('Please select a gender!');
        return;
    }
  const gender = genderInput.value;
  const message = document.getElementById('message').value;

  const dateObj = new Date(birthDate);
  const formattedDate = dateObj.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
  });

  const now = new Date();
  const currentTime = now.toLocaleString('id-ID', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Jakarta',
      timeZoneName: 'short'
  });

  document.getElementById('currentTime').textContent = currentTime;
  document.getElementById('resultName').textContent = name;
  document.getElementById('resultEmail').textContent = email;
  document.getElementById('resultDate').textContent = formattedDate;
  document.getElementById('resultGender').textContent = gender;
  document.getElementById('resultMessage').textContent = message;

  const resultContainer = document.getElementById('resultContainer');
  resultContainer.classList.remove('hidden');
}