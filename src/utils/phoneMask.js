export const phoneMask = value => {
  var r = value.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    // 11+ digits. Format as 5+4.
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    // 6..10 digits. Format as 4+4
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    // 3..5 digits. Add (0..)
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    // 0..2 digits. Just add (0
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}