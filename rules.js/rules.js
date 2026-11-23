function checkRule(temp) {
  if (temp > 40) {
    return "ALERT: High Temperature!";
  }
  return "Normal";
}
console.log(checkRule(45));
