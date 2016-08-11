getTextWidth = (text) ->
  canvas = getTextWidth.canvas or (getTextWidth.canvas = document.createElement('canvas'))
  context = canvas.getContext('2d')
  context.font = 'Helvetica 18px'
  metrics = context.measureText(text)
  metrics.width

getLongestLine = (textBlock) ->
  lines = textBlock.split('\n')
  line = lines.sort((a, b) ->
    b.length - (a.length)
  )
  line[0]

document.getElementById('material-app-bar').style.display = 'none'
document.querySelector('#main-content-container .header.track').style.display = 'none'
titles = document.querySelectorAll('#main-content-container .title')
i = 0
while i < titles.length
  titles[i].style.display = 'none'
  i++
container = document.querySelector('#main-content-container .content-container.lyrics')
container.style.margin = '0px'
lyricBlocks = document.querySelectorAll('#main-content-container .content-container.lyrics p')
i = 0
while i < lyricBlocks.length
  p = lyricBlocks[i]
  text = getLongestLine(p.innerText)
  width = getTextWidth(text)
  p.style.float = 'left'
  p.style.width = width + 'px'
  p.style.marginRight = '10px'
  p.style.padding = '10px'
  p.style.border = '1px solid #eeeeee'
  p.style.position = 'relative'
  node = document.createElement('SPAN')
  textNode = document.createTextNode(i + 1)
  node.appendChild textNode
  node.style.position = 'absolute'
  node.style.left = '1px'
  node.style.top = '1px'
  node.style.color = 'black'
  node.style.fontSize = '8px'
  p.appendChild node
  i++

