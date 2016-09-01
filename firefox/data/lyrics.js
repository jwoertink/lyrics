(function() {
  var Azlyrics, Googleplay;

  Azlyrics = (function() {
    function Azlyrics() {}

    Azlyrics.prototype.parse = function() {
      var b, br1, br2, cont, container, container_divs, divshare, divshares, footer, form, forms, h, hidden, html, j, k, l, len, len1, len2, len3, len4, len5, len6, m, more_crap, n, nav, navs, noprint, noprints, o, q, r, ringtone, text, title;
      navs = document.querySelectorAll('nav.navbar');
      for (j = 0, len = navs.length; j < len; j++) {
        nav = navs[j];
        nav.parentNode.removeChild(nav);
      }
      footer = document.querySelector('.footer-wrap');
      footer.parentNode.removeChild(footer);
      noprints = document.querySelectorAll('.noprint');
      for (k = 0, len1 = noprints.length; k < len1; k++) {
        noprint = noprints[k];
        noprint.parentNode.removeChild(noprint);
      }
      ringtone = document.querySelector('.ringtone');
      ringtone.parentNode.removeChild(ringtone);
      divshares = document.querySelectorAll('.div-share');
      for (l = 0, len2 = divshares.length; l < len2; l++) {
        divshare = divshares[l];
        divshare.parentNode.removeChild(divshare);
      }
      forms = document.querySelectorAll('form');
      for (n = 0, len3 = forms.length; n < len3; n++) {
        form = forms[n];
        form.parentNode.removeChild(form);
      }
      hidden = document.querySelectorAll('.hidden');
      for (o = 0, len4 = hidden.length; o < len4; o++) {
        h = hidden[o];
        h.parentNode.removeChild(h);
      }
      more_crap = document.querySelectorAll('.smt');
      for (q = 0, len5 = more_crap.length; q < len5; q++) {
        m = more_crap[q];
        m.parentNode.removeChild(m);
      }
      title = document.querySelector('.lyricsh');
      title.parentNode.removeChild(title);
      container = document.querySelector('.main-page > .row > .col-xs-12');
      b = container.querySelector('b');
      b.parentNode.removeChild(b);
      container.className = "";
      text = document.querySelector(".main-page .row div div").innerHTML;
      html = text.replace(/<br>/g, '&nbsp;&mdash;&nbsp;');
      document.querySelector(".main-page .row div div").innerHTML = html;
      container_divs = document.querySelectorAll('.container');
      for (r = 0, len6 = container_divs.length; r < len6; r++) {
        cont = container_divs[r];
        cont.style.width = "100%";
        cont.style.padding = "0 40px";
      }
      br1 = container.querySelect('br:first');
      br1.parentNode.removeChild(br1);
      br2 = container.querySelect('br:first');
      return br2.parentNode.removeChild(br2);
    };

    return Azlyrics;

  })();

  Googleplay = (function() {
    function Googleplay() {}

    Googleplay.prototype.parse = function() {
      var attribution, container, html, i, lyricBlocks, node, p, results, textNode, titles;
      document.getElementById('material-app-bar').style.display = 'none';
      document.querySelector('#main-content-container .header.track').style.display = 'none';
      titles = document.querySelectorAll('#main-content-container .title');
      i = 0;
      while (i < titles.length) {
        titles[i].style.display = 'none';
        i++;
      }
      attribution = document.querySelector(".attribution-container");
      attribution.style.display = "none";
      container = document.querySelector('#main-content-container .content-container.lyrics');
      container.style.margin = '0px';
      container.style.maxWidth = '100%';
      container.style.padding = '15px';
      lyricBlocks = document.querySelectorAll('#main-content-container .content-container.lyrics p');
      i = 0;
      results = [];
      while (i < lyricBlocks.length) {
        p = lyricBlocks[i];
        p.style.display = 'block';
        p.style.fontSize = '18px';
        p.style.padding = '0px';
        p.style.margin = '0 0 10px';
        p.style.position = 'relative';
        html = p.innerHTML.replace(/<br>/g, '&nbsp;&mdash;&nbsp;');
        p.innerHTML = html;
        node = document.createElement('SPAN');
        textNode = document.createTextNode(i + 1);
        results.push(i++);
      }
      return results;
    };

    return Googleplay;

  })();

  window.onload = function() {
    var parser;
    if (window.location.href.match(/play\.google/)) {
      parser = new Googleplay;
    }
    if (window.location.href.match(/azlyrics/)) {
      parser = new Azlyrics;
    }
    return parser.parse();
  };

}).call(this);
