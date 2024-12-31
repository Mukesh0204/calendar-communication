export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^\+?[\d\s-()]{10,}$/;
  return re.test(phone);
};

export const validateLinkedInUrl = (url) => {
  const re = /^https:\/\/(www\.)?linkedin\.com\/company\/[\w-]+\/?$/;
  return re.test(url);
}; 