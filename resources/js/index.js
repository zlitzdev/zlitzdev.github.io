function openTab(event, tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabLinks = document.querySelectorAll('.tab-link');

  tabContents.forEach(content => content.classList.remove('active'));
  tabLinks.forEach(link => link.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`#tb__${tabId}.tab-link`).classList.add('active');
}