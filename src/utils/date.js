import dateFormat from 'dateformat';

function short(dateString) {
  const date = new Date(dateString);
  return dateFormat(date, 'm/d/yy').toString();
}
function medium(dateString) {
  const date = new Date(dateString);
  return dateFormat(date, 'mm dd, yyyy').toString();
}
function long(dateString) {
  const date = new Date(dateString);
  return dateFormat(date, 'mmm ddd yyyy').toString();
}

export default { short, medium, long };
