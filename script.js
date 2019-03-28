function changePDF(chapter) {
  var container = document.getElementById("pdfcontainer")
  container.innerHTML = "<embed src='https://lax18.github.io/StrayerChapters/"+chapter+".pdf#toolbar=0&navpanes=0&scrollbar=0' type='application/pdf' style='height:calc(100vh - 70px)' width='100%'></embed>"
  document.getElementById("chapter_name").innerHTML = chapter
}
