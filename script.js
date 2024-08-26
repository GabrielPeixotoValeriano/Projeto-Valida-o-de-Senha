function validarSenha() {
    const senha = document.getElementById('vSenha').value;
    const confirmarSenha = document.getElementById('cSenha').value;
    const mensagem = document.getElementById('mensagem');

    if (senha == 'Gabriel_35337435' || senha == 'gabriel_35337435' || senha == 'victor_33430101' || senha == 'Victor_33430101' && confirmarSenha == 'Gabriel_35337435' || confirmarSenha == 'Victor_33430101') {
        mensagem.textContent = 'Nome dos criadores OK!';
        return;
    }

    if (senha !== confirmarSenha) {
        mensagem.textContent = 'As duas senhas devem ser iguais.';
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = 'A senha deve conter no mínimo 6 dígitos.';
        return;
    }

    if (!/[_@#$%&*]/.test(senha)) {
        mensagem.textContent = 'A senha deve conter no mínimo um caractere especial(_, @, #, $, %, &, *).';
        return;
    }

    if (!/[A-Z]/.test(senha)) {
        mensagem.textContent = 'A senha deve conter no mínimo uma letra maiúscula.';
        return;
    }

    if (!/[a-z]/.test(senha)) {
        mensagem.textContent = 'A senha deve conter no mínimo uma letra minúscula';
        return;
    }

    if (!/\d/.test(senha)) {
        mensagem.textContent = 'A senha deve conter no mínimo um número.';
        return;
    }

    if (/(\w)\1\1/.test(senha)) {
        mensagem.textContent = 'A senha não pode conter 3 caracteres repetidos.';
        return;
    }

    if (/987|876|765|654|543|432|321|210/.test(senha)) {
        mensagem.textContent = 'A senha não pode conter sequência decrescente de números (ex: 321, 987).';
        return;
    }
    if (/012|123|234|345|456|567|678|789/.test(senha)) {
        mensagem.textContent = 'A senha não pode conter sequência crescente de números (ex: 123, 789).';
        return;
    }





    mensagem.textContent = 'Senha validada com sucesso!';
}