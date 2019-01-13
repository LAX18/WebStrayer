function changePDF(chapter) {
  var container = document.getElementById("pdfcontainer")
  container.innerHTML = "<embed src='https://lax18.github.io/StrayerChapters/"+chapter+".pdf' type='application/pdf' style='height:calc(100vh - 70px)' width='100%'></embed>"
}