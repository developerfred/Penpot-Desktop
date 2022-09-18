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

if(!localStorage.getItem("firstTime")){
  localStorage.setItem('customHostname', 'https://design.penpot.app/') // If not set, by default on first launch, the app will be blank (to fix issue #3)
  localStorage.setItem("firstTime","true");
}else{}