class Azlyrics
  
  parse: ->
    nav = document.querySelector('nav.navbar')
    nav.parentNode.removeChild(nav)
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
    #$container.children('br:first').remove()
    br1 = container.querySelect('br:first')
    br1.parentNode.removeChild(br1)
    br2 = container.querySelect('br:first')
    br2.parentNode.removeChild(br2)
    html = container.querySelector('div').innerHTML.replace(/<br>/g, '&nbsp;&mdash;&nbsp;')
    container.querySelector('div').innerHTML = html

