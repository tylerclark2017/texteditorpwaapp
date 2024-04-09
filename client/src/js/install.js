const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // const windowPrompt = windowPrompt.deferredPrompt;
    // event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const windowPrompt = window.deferredPrompt;
    if (windowPrompt) {
       windowPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the installation prompt');
          } else {
            console.log('User dismissed the installation prompt');
          }
          window.deferredPrompt = null;
          butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully');
    window.deferredPrompt = null;
});
