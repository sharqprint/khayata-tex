document.getElementById('copy-email').addEventListener('click', () => {
  navigator.clipboard.writeText('toopkhayata@gmail.com').then(() => {
    alert('تم نسخ البريد الإلكتروني!');
  });
});

document.getElementById('copy-phone').addEventListener('click', () => {
  navigator.clipboard.writeText('00963944305909').then(() => {
    alert('تم نسخ رقم الهاتف!');
  });
});