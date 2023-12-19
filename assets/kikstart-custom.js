/*
Header
*/  
/*
 This function is for DISCOUT CODE 
*/
  setTimeout(() => {

  const ticketContainer = document.querySelector('.ticket');
  const discountCodeSpan = ticketContainer.querySelector('.discount_code');

    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    document.body.appendChild(alertBox);

    ticketContainer.addEventListener('click', () => {
      // Copy the discount code to the clipboard
      const textArea = document.createElement('textarea');
      textArea.value = discountCodeSpan.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      // Display the alert message
      alertBox.innerHTML = '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span> Discount Code Copied Successfully: ' + discountCodeSpan.innerHTML;
      alertBox.style.opacity = 1;

      // Add CSS transitions for fade-in and fade-out
      alertBox.style.transition = 'opacity 0.5s';
      alertBox.style.transition = 'display none';
      setTimeout(() => {
        alertBox.style.opacity = 0;
        alertBox.style.display = 'none';
      }, 5000);
      
    });

}, 2000);
/*
 This function is for DISCOUT CODE END 
*/


