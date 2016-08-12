class Googleplay
  
  parse: ->
    document.getElementById('material-app-bar').style.display = 'none'
    document.querySelector('#main-content-container .header.track').style.display = 'none'
    titles = document.querySelectorAll('#main-content-container .title')
    i = 0
    while i < titles.length
      titles[i].style.display = 'none'
      i++
    attribution = document.querySelector(".attribution-container")
    attribution.style.display = "none"
    container = document.querySelector('#main-content-container .content-container.lyrics')
    container.style.margin = '0px'
    container.style.maxWidth = '100%'
    container.style.padding = '15px'
    lyricBlocks = document.querySelectorAll('#main-content-container .content-container.lyrics p')
    i = 0
    while i < lyricBlocks.length
      p = lyricBlocks[i]
      p.style.display = 'block'
      p.style.fontSize = '18px'
      p.style.padding = '0px'
      p.style.margin = '0 0 10px'
      p.style.position = 'relative'
      html = p.innerHTML.replace(/<br>/g, '&nbsp;&mdash;&nbsp;')
      p.innerHTML = html 
      node = document.createElement('SPAN')
      textNode = document.createTextNode(i + 1)
      i++

