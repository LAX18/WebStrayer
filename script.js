function changePDF(chapter) {
  var container = document.getElementById("pdfcontainer")
  container.innerHTML = "<embed src='https://lax18.github.io/StrayerChapters/"+chapter+".pdf#toolbar=1&navpanes=0' type='application/pdf' style='height:calc(100vh - 70px)' width='100%'></embed>"
  document.getElementById("chapter_name").innerHTML = chapter
}
function onLoad() {
  if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope:',  registration.scope);
  }).catch(function(error) {
    console.log('ServiceWorker registration failed:', error);
  });
}
}
