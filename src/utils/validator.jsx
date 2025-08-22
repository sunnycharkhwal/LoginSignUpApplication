/**
 * Validates the form data based on a set of rules.
 * @param {object} formData - The form data to validate.
 * @returns {object} - An object containing error messages for invalid fields.
 */
export const validateForm = formData => {
  const errors = {};
  if (!formData.name.trim()) {
    errors.name = 'Full Name is required.';
  }
  if (!formData.username.trim()) {
    errors.username = 'Username is required.';
  }
  if (!formData.email.trim()) {
    errors.email = 'Email is required.';
  }
  if (!formData.phone.trim()) {
    errors.phone = 'Phone Number is required.';
  }
  if (formData.phone && !/^\+\d{1,3}\s?\d{10}$/.test(formData.phone)) {
    errors.phone = 'Phone number must be in the format +XX XXXXXXXXXX.';
  }
  if (!formData.password) {
    errors.password = 'Password is required.';
  }
  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required.';
  }
  if (formData.name && !/^[a-zA-Z\s]+$/.test(formData.name)) {
    errors.name = 'Name can only contain alphabets and spaces.';
  }
  if (formData.username && !/^[a-zA-Z0-9_.-]+$/.test(formData.username)) {
    errors.username = 'Username can only contain letters, numbers, and (_ . -)';
  }
  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (formData.phone && !/^\+\d{1,3}\s?\d{10}$/.test(formData.phone)) {
    errors.phone = 'Phone number must be in the format +XX XXXXXXXXXX.';
  }
  if (
    formData.password &&
    formData.username &&
    formData.password === formData.username
  ) {
    errors.password = 'Password cannot be the same as the username.';
  }
  if (
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword
  ) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  return errors;
};
