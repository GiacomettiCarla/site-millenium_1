<?php
declare(strict_types=1);

ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

const LEAD_EMAIL = 'Millenium.desp@uol.com.br';
const COPY_EMAIL = 'carlalaisstudy@gmail.com';
const THANK_YOU_PAGE = 'obrigado.html';

function clean_text(string $value): string
{
    $value = trim(strip_tags($value));
    return preg_replace('/\s+/', ' ', $value) ?? '';
}

function field(string $name): string
{
    $value = $_POST[$name] ?? '';
    if (is_array($value)) {
        return '';
    }

    return clean_text((string)$value);
}

function render_error(string $type = 'send'): never
{
    if (!headers_sent()) {
        http_response_code($type === 'validation' ? 422 : 500);
    }

    $title = $type === 'validation'
        ? 'Revise as informações do formulário.'
        : 'Não conseguimos concluir o envio agora.';
    $message = $type === 'validation'
        ? 'Algum campo obrigatório não foi preenchido corretamente. Volte ao formulário e confira as informações destacadas antes de enviar.'
        : 'O formulário foi preenchido, mas o servidor não conseguiu disparar o e-mail neste momento. Tente novamente em alguns minutos ou entre em contato pelo e-mail da Millenium.';

    echo '<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Erro no envio</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#160f65;color:#fff;font-family:Arial,sans-serif;padding:24px}main{max-width:560px;text-align:center}h1{font-size:clamp(28px,6vw,40px);line-height:1.12}p{color:rgba(255,255,255,.78);line-height:1.7}a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;margin-top:18px;padding:0 22px;background:#fff;color:#160f65;text-decoration:none;font-weight:800;text-transform:uppercase;font-size:13px;letter-spacing:.08em}</style></head><body><main><h1>' . $title . '</h1><p>' . $message . '</p><a href="index.html#contato">Voltar ao formulário</a></main></body></html>';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html#contato', true, 303);
    exit;
}

if (field('_honey') !== '') {
    header('Location: ' . THANK_YOU_PAGE, true, 303);
    exit;
}

$name = field('nome');
$company = field('empresa');
$email = filter_var(field('email'), FILTER_VALIDATE_EMAIL);
$phone = field('telefone');
$operation = field('tipo_de_operacao');
$deadline = field('prazo');
$privacy = field('privacidade');
$rawMessage = $_POST['mensagem'] ?? '';
$message = is_array($rawMessage) ? '' : trim(strip_tags((string)$rawMessage));

if ($name === '' || $email === false || $message === '' || $privacy !== 'ciente') {
    render_error('validation');
}

$host = preg_replace('/:\d+$/', '', (string)($_SERVER['HTTP_HOST'] ?? ''));
$host = preg_replace('/[^a-z0-9.-]/i', '', $host ?? '');
$fromDomain = $host !== '' ? $host : 'milleniumdespachos.com.br';
$fromEmail = 'no-reply@' . $fromDomain;

$subject = 'Novo lead! Novo formulário preenchido no site';
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$body = implode("\n", [
    'Novo formulário preenchido no site da Millenium.',
    '',
    'Nome: ' . $name,
    'Empresa: ' . ($company !== '' ? $company : 'Não informado'),
    'E-mail: ' . $email,
    'Telefone: ' . ($phone !== '' ? $phone : 'Não informado'),
    'Tipo de operação: ' . ($operation !== '' ? $operation : 'Não informado'),
    'Previsão ou urgência: ' . ($deadline !== '' ? $deadline : 'Não informado'),
    '',
    'Mensagem:',
    $message,
    '',
    'Enviado em: ' . date('d/m/Y H:i:s'),
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: Millenium Site <' . $fromEmail . '>',
    'Reply-To: ' . $email,
    'Cc: ' . COPY_EMAIL,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail(LEAD_EMAIL, $encodedSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    render_error('send');
}

header('Location: ' . THANK_YOU_PAGE, true, 303);
exit;
