// Supabase setup
const SUPABASE_URL = "https://phzpkiwozlbejnuyozmd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoenBraXdvemxiZWpueXVvem1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzOTc1MTAsImV4cCI6MjA0ODk3MzUxMH0.ykAh1PC8Q4x0j6r3OHOShb1UmtdVTWkuLU2FrmLN8SA";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// DOM Elements
const loginForm = document.getElementById('login-form');
const uploadSection = document.getElementById('upload-section');
const videoInput = document.getElementById('video-input');
const uploadBtn = document.getElementById('upload-btn');
const videoList = document.getElementById('video-list');

// User Authentication
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    alert("Login failed: " + error.message);
    return;
  }
  alert("Login successful!");
  loginForm.style.display = "none";
  uploadSection.style.display = "block";
  fetchVideos();
});

// Video Upload
uploadBtn.addEventListener('click', async () => {
  const file = videoInput.files[0];
  if (!file) {
    alert("Please select a video to upload.");
    return;
  }

  const { data, error } = await supabase.storage.from('Videos').upload(`public/${file.name}`, file);
  if (error) {
    alert("Upload failed: " + error.message);
    return;
  }
  alert("Upload successful!");
  fetchVideos();
});

// Fetch Videos
async function fetchVideos() {
  const { data, error } = await supabase.storage.from('Videos').list('public');
  if (error) {
    alert("Failed to fetch videos: " + error.message);
    return;
  }

  videoList.innerHTML = "";
  data.forEach(file => {
    const videoUrl = `${SUPABASE_URL}/storage/v1/object/public/Videos/public/${file.name}`;
    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoList.appendChild(videoElement);
  });
}
