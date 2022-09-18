setTimeout(() => {
    const customHostname = document.querySelector('.appUsername');
    const textHN = document.querySelector('.setName');
    const buttonHN = document.querySelector('#cswU');
  
    customHostname.addEventListener('input', name => {
      textHN.textContent = name.target.value
    })
  
    const saveToLocal = () => {
      localStorage.setItem('customHostname', textHN.textContent)
    }
  
    buttonHN.addEventListener('click', saveToLocal)
  
    const hostname = localStorage.getItem('customHostname')
  
    if (customHostname) {
      textHN.textContent = hostname;
      document.querySelector('#penpot').setAttribute('src', hostname);
    }
}, 1000); // Wait a moment