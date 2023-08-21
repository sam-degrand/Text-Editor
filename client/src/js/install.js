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
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Show the browser's install prompt
      deferredPrompt.prompt();
      
      // Wait for the user's response
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the installation');
      } else {
        console.log('User declined the installation');
      }
      
      // Reset the deferredPrompt variable
      deferredPrompt = null;
      
      // Hide the install button
      butInstall.style.display = 'none';
    }
  });
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully');
  });
