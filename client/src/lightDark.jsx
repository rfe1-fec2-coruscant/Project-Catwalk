const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

if (toggleSwitch) {
  var switchTheme = function(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
}