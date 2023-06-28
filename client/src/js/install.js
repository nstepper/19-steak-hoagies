const butInstall = document.getElementById('buttonInstall');

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  
  // Update UI notify the user they can add to home screen
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  // hide our user interface that shows our A2HS button
  butInstall.style.display = 'none';
  
  // Show the prompt
  deferredPrompt.prompt();
  
  // Wait for the user to respond to the prompt
  const choiceResult = await deferredPrompt.userChoice;
  
  // Dispose the user choice prompt
  deferredPrompt = null;
  
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
});
