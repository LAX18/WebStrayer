function changePDF(chapter) {
  var container = document.getElementById("pdfcontainer")
  container.innerHTML = "<embed src='https://lax18.github.io/StrayerChapters/"+chapter+".pdf' type='application/pdf'></embed>"
}