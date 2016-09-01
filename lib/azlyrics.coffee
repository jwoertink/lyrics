class Azlyrics
  
  parse: ->
    navs = document.querySelectorAll('nav.navbar')
    for nav in navs
      nav.parentNode.removeChild(nav)
    footer = document.querySelector('.footer-wrap')
    footer.parentNode.removeChild(footer)
    noprints = document.querySelectorAll('.noprint')
    for noprint in noprints
      noprint.parentNode.removeChild(noprint)
    ringtone = document.querySelector('.ringtone')
    ringtone.parentNode.removeChild(ringtone)
    divshares = document.querySelectorAll('.div-share')
    for divshare in divshares
      divshare.parentNode.removeChild(divshare)
    forms = document.querySelectorAll('form')
    for form in forms
      form.parentNode.removeChild(form)
    hidden = document.querySelectorAll('.hidden')
    for h in hidden
      h.parentNode.removeChild(h)
    more_crap = document.querySelectorAll('.smt')
    for m in more_crap
      m.parentNode.removeChild(m)
    title = document.querySelector('.lyricsh')
    title.parentNode.removeChild(title)
    container = document.querySelector('.main-page > .row > .col-xs-12')
    b = container.querySelector('b')
    b.parentNode.removeChild(b)
    container.className = ""
    text = document.querySelector(".main-page .row div div").innerHTML
    html = text.replace(/<br>/g, '&nbsp;&mdash;&nbsp;')
    document.querySelector(".main-page .row div div").innerHTML = html
    container_divs = document.querySelectorAll('.container')
    for cont in container_divs
      cont.style.width = "100%"
      cont.style.padding = "0 40px"
    #$container.children('br:first').remove()
    br1 = container.querySelect('br:first')
    br1.parentNode.removeChild(br1)
    br2 = container.querySelect('br:first')
    br2.parentNode.removeChild(br2)
