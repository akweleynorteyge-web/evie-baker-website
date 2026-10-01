const whatsappNumber = "233243366083";
const enquiryUrl = "https://tally.so/r/A7ON1N";

const whatsappMessage =
  "Hi Evie Baker! I'd like to enquire about a cake.%0A%0ACake size:%0AFlavour:%0AFilling:%0ADate needed:%0ADesign/reference:%0A%0APlease let me know the price. Thank you!";

function buildWhatsappLink(number, message) {
  return `https://wa.me/${number}?text=${message}`;
}

const whatsappLinks = document.querySelectorAll('[data-whatsapp="true"]');
whatsappLinks.forEach((link) => {
  link.href = buildWhatsappLink(whatsappNumber, whatsappMessage);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

const enquiryLinks = document.querySelectorAll('[data-enquiry="true"]');

enquiryLinks.forEach((link) => {
  link.href = enquiryUrl;
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});