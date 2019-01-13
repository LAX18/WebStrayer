function changePDF(chapter) {
  var container = document.getElementById("pdfcontainer")
  container.innerHTML = "<embed src='"+chapter+".pdf'></embed>"
}