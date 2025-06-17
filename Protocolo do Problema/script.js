function mostrarDetalhes(selectElement) {
    const descricaoCell = selectElement.parentElement.nextElementSibling;

    const descricaoText = {
        erro101: `
            <h4>Erro 101 - Falha ao Enviar Documento Digitalizado</h4>
            <p><strong>Mensagem:</strong> Não foi possível enviar o documento. Verifique o formato e tente novamente.</p>
            <p><strong>Possível causa:</strong> Documento com formato inválido ou muito grande.</p>
            <p><strong>Solução:</strong> Use arquivos <strong>PDF</strong> ou <strong>JPG</strong> com até <strong>5MB</strong>. Use ferramentas como <em>ilovePDF</em> ou <em>TinyJPG</em> para ajustar.</p>
        `,
        erro203: `
            <h4>Erro 203 - Acesso Negado ao Módulo Financeiro</h4>
            <p><strong>Mensagem:</strong> Você não possui permissão para acessar esta seção.</p>
            <p><strong>Possível causa:</strong> Seu usuário não tem acesso configurado.</p>
            <p><strong>Solução:</strong> Um administrador deve ir em <em>Configurações > Usuários > Permissões</em> e liberar o acesso ao módulo.</p>
        `,
        erro302: `
            <h4>Erro 302 - Sistema Offline ou Conexão Perdida</h4>
            <p><strong>Mensagem:</strong> Conexão com o servidor foi interrompida.</p>
            <p><strong>Possível causa:</strong> Internet instável ou servidor temporariamente fora do ar.</p>
            <p><strong>Solução:</strong> Verifique sua conexão. Se estiver estável, acesse o sistema após alguns minutos ou consulte <a href="https://status.acsiv.com.br" target="_blank">status.acsiv.com.br</a>.</p>
        `,
        erro410: `
            <h4>Erro 410 - Campo Obrigatório Não Preenchido</h4>
            <p><strong>Mensagem:</strong> Campo obrigatório não preenchido. Verifique os campos destacados.</p>
            <p><strong>Possível causa:</strong> Tentativa de envio sem preencher todos os campos obrigatórios.</p>
            <p><strong>Solução:</strong> Verifique e preencha os campos com <strong>*</strong> e tente novamente.</p>
        `,
        erro504: `
            <h4>Erro 504 - Sistema Travado ao Gerar Certidão</h4>
            <p><strong>Mensagem:</strong> O sistema encontrou um erro ao gerar a certidão.</p>
            <p><strong>Possível causa:</strong> Dados incompletos ou falha de sincronização.</p>
            <p><strong>Solução:</strong> Revise os dados do cadastro, clique em <em>Salvar</em>, limpe o cache ou tente outro navegador.</p>
        `
    };

    const problemaSelecionado = selectElement.value;
    descricaoCell.innerHTML = problemaSelecionado ? descricaoText[problemaSelecionado] : '';
}
