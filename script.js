// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin' && password === '1234') {
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials! Use admin / 1234');
        }
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Voice Messages
const voiceMessages = {
    medicine: 'Reminder. Please take your medicine now.',
    wakeup: 'Good morning. Time to wake up and start your day.',
    water: 'Reminder. Please drink water to stay hydrated.',
    emergency: 'Emergency help reminder. Press the emergency button if you need assistance.'
};

// Play Voice Function for Landing Page
function playVoice(type) {
    const message = voiceMessages[type];
    showPopup(type, message);
    speak(message);
}

// Play Voice Function for Dashboard
function playDashboardVoice(type) {
    const message = voiceMessages[type];
    showPopup(type, message);
    speak(message);
}

// Speech Synthesis
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        speechSynthesis.speak(utterance);
    }
}

// Show Popup
function showPopup(type, message) {
    const popup = document.getElementById('voicePopup');
    const title = document.getElementById('popupTitle');
    const msg = document.getElementById('popupMessage');
    
    const titles = {
        medicine: '💊 Medicine Reminder',
        wakeup: '⏰ Wake-up Reminder',
        water: '💧 Water Reminder',
        emergency: '🆘 Emergency Help'
    };
    
    title.textContent = titles[type];
    msg.textContent = message;
    popup.style.display = 'flex';
    
    setTimeout(() => {
        closePopup();
    }, 4000);
}

// Close Popup
function closePopup() {
    const popup = document.getElementById('voicePopup');
    popup.style.display = 'none';
}

// Door Simulation
function simulateDoorOpen() {
    const doorStatus = document.getElementById('doorStatus');
    const patientStatus = document.getElementById('patientStatus');
    const exitTime = document.getElementById('exitTime');
    const alertMessage = document.getElementById('alertMessage');
    const caregiverNotif = document.getElementById('caregiverNotif');
    
    const statusSafe = document.getElementById('statusSafe');
    const statusOutside = document.getElementById('statusOutside');
    const statusAlert = document.getElementById('statusAlert');
    
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    
    doorStatus.textContent = 'OPEN';
    doorStatus.style.color = '#EF4444';
    
    patientStatus.textContent = 'OUTSIDE';
    patientStatus.style.color = '#EF4444';
    
    exitTime.textContent = timeString;
    exitTime.style.color = '#F59E0B';
    
    alertMessage.textContent = 'Patient has left home';
    alertMessage.style.color = '#EF4444';
    
    caregiverNotif.textContent = 'SENT';
    caregiverNotif.style.color = '#22C55E';
    
    statusSafe.style.display = 'none';
    statusOutside.style.display = 'inline-block';
    statusAlert.style.display = 'inline-block';
    
    speak('Alert. Patient has left the house.');
    
    showPopup('emergency', 'Alert! Patient has left the house. Caregiver has been notified.');
}