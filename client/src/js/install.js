const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // This will hold the beforeinstallprompt event

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior to show the browser's install prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;
  
  // Enable the install button to be visible to the user
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
