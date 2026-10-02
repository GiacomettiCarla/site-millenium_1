# Publicacao no FTP

Suba estes itens para a pasta publica do site da cliente, normalmente `public_html`, `www` ou `htdocs`:

- `index.html`
- `obrigado.html`
- `politica-de-privacidade.html`
- `sobre-nos.html`
- todos os arquivos `servicos-*.html` (oito paginas de servicos)
- `enviar-formulario.php`
- pasta `public/`

Na revisao de 01/10/2026, os cards e a lista de servicos da abertura passaram a
abrir paginas individuais. Publique as paginas e os arquivos
`public/revision.css` e `public/millenium-logo-mda.jpeg` antes de atualizar
`index.html`. O parametro `servico` no link de retorno preenche a operacao
no formulario; nao altera o envio PHP.

O formulario do `index.html` envia os dados para `enviar-formulario.php`.

Destino principal:

- `Millenium.desp@uol.com.br`

Copia:

- `carlalaisstudy@gmail.com`

Depois do envio com sucesso, o visitante e redirecionado para `obrigado.html`.

Importante: esse envio usa a funcao `mail()` do PHP. Se a hospedagem bloquear `mail()` ou se o e-mail cair em spam, sera necessario configurar envio SMTP autenticado com os dados da hospedagem ou do provedor de e-mail.

Para testar:

1. Suba os arquivos no FTP.
2. Abra o site pelo dominio da cliente, nao pelo GitHub Pages.
3. Preencha o formulario.
4. Confira caixa de entrada e spam nos dois e-mails.
