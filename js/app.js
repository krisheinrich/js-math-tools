(function(){

  // load default home view
  function loadDefaultView() {
    var template = document.querySelector('#home-temp');
    // Populate the main view
    var row = document.importNode(template.content, true);
    document.querySelector('#main-content').appendChild(row);
  }
  loadDefaultView();

  // Attach view changes to navbar links
  var navLinkIds = ['#brand', '#calc-link', '#number-link', '#prob-stats-link', '#functions-link'];
  var templateIds = ["#home-temp", "#calc-temp", "#numtheory-temp", "#prob-stats-temp", "#functions-temp"];

  navLinkIds.forEach(function (id, index) {
    var el = document.querySelector(id);
    el.onclick = function() {
      var currTemplateContent = document.querySelector('.full-view');
      var newTemplate = document.querySelector(templateIds[index]);
      // Populate the main view
      var newTemplateContent = document.importNode(newTemplate.content, true);
      currTemplate = document.querySelector('#main-content').replaceChild(newTemplateContent, currTemplateContent);
      return false;
    }
  });

})();
