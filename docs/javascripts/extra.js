// Publication filter. Uses document$ so it re-binds after instant navigation.
document$.subscribe(function () {
  var input = document.getElementById("pub-filter")
  if (!input) return
  var cards = Array.prototype.slice.call(document.querySelectorAll(".pub-list .pub-card"))
  var groups = document.querySelectorAll(".year-group")
  var count = document.getElementById("pub-count")

  function apply() {
    var terms = input.value.toLowerCase().split(/\s+/).filter(Boolean)
    var shown = 0
    cards.forEach(function (card) {
      var text = card.getAttribute("data-search")
      var match = terms.every(function (t) { return text.indexOf(t) !== -1 })
      card.hidden = !match
      if (match) shown++
    })
    groups.forEach(function (g) {
      g.hidden = !g.querySelector(".pub-card:not([hidden])")
    })
    count.textContent = terms.length ? shown + " of " + cards.length + " publications" : cards.length + " publications"
  }

  input.addEventListener("input", apply)
  apply()
})
