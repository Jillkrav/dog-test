export const capitalizeFirstLetter = (string) => {
  return string.split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
};