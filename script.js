function changePDF(chapter) {
  var container = document.getElementById("pdfcontainer")
  container.innerHTML = "<embed src='http://lax18.github.io/StrayerChapters/"+chapter+".pdf'></embed>"
}