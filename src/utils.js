export function copyEmail() {
    const email = 'adrian.resendezx@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert(`Email ${email} copied to clipboard`);
    }).catch(err => {
      console.error('Could not copy email to clipboard: ', err);
    });
  }
  
  export function sendEmail() {
    const email = 'adrian.resendezx@gmail.com';
    window.location.href = `mailto:${email}`;
  }
  