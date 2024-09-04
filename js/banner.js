(function ($) {
  var texts = [
    'Seja Bem-vindo ao meu site.',
    'Me chamo Rodrigo, sou Analista de dados / Desenvolvedor RPA.',
    'Formado em Análise e Desenvolvimento de Sistemas.',
    'Experiência com Marketing Digital e Designer UX',
    'Mais informações acesse meu Linkedin ou Github.'
  ],
    row = 0,
    textPos = 0,
    content = '';

  function typeWriter() {
    if (row === texts.length) {
      return;
    }
    $('#textTyping').html(content + texts[row].substring(0, textPos) + '_');
    textPos += 1;
    if (texts[row].length + 1 === textPos) {
      // sentence ends
      content += texts[row] + '<br />';
      row += 1;
      textPos = 0;
      setTimeout(() => {
        typeWriter();
      }, 50);
    } else {
      setTimeout(() => {
        typeWriter();
      }, 50);
    }
  }
  typeWriter();
})(jQuery);
