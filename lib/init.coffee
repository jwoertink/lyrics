window.onload = ->
  if window.location.href.match(/play\.google/)
    parser = new Googleplay

  if window.location.href.match(/azlyrics/)
    parser = new Azlyrics

  parser.parse()

