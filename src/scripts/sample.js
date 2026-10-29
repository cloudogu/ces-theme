(function(){
  $(window).scroll(function () {
      var top = $(document).scrollTop();
      $('.splash').css({
        'background-position': '0px -'+(top/3).toFixed(2)+'px'
      });
      if(top > 50)
        $('#home > .navbar').removeClass('navbar-transparent');
      else
        $('#home > .navbar').addClass('navbar-transparent');
  });

  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });

  var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
    var html = cleanSource($(this).parent());
    $("#source-modal pre").text(html);
    $("#source-modal").modal();
  });

  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  $(".bs-component").hover(function(){
    $(this).append($button);
    $button.show();
  }, function(){
    $button.hide();
  });

  function cleanSource($container) {
    var lines = [];

    $container.contents().each(function(){
      formatNode(this, "", lines);
    });

    return lines.join("\n")
                .replace(/×/g, "&times;")
                .replace(/«/g, "&laquo;")
                .replace(/»/g, "&raquo;")
                .replace(/←/g, "&larr;")
                .replace(/→/g, "&rarr;");
  }

  function formatNode(node, indent, lines) {
    if (node.nodeType === Node.TEXT_NODE) {
      var text = collapseWhitespace($("<div>").text(node.nodeValue).html());
      if (text) {
        lines.push(indent + text);
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE || node.id === "source-button") {
      return;
    }

    var tag = node.cloneNode(false).outerHTML,
        closeTag = "</" + node.localName + ">";

    if (tag.slice(-closeTag.length) !== closeTag) {
      lines.push(indent + tag);
      return;
    }

    var openTag = tag.slice(0, -closeTag.length),
        hasText = $(node).contents().filter(function(){
          return this.nodeType === Node.TEXT_NODE && this.nodeValue.trim();
        }).length;

    if (hasText || !node.children.length) {
      lines.push(indent + openTag + collapseWhitespace(node.innerHTML) + closeTag);
      return;
    }

    lines.push(indent + openTag);
    $(node).contents().each(function(){
      formatNode(this, indent + "    ", lines);
    });
    lines.push(indent + closeTag);
  }

  function collapseWhitespace(html) {
    return html.replace(/\s+/g, " ").trim();
  }

})();
