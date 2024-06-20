
        document.getElementById('form1').addEventListener('submit', function(event) {
            var nomeInput = document.getElementById('nome');
            var nomeError = document.getElementById('nomeError');
            if (nomeInput.value.length < 5) {
                nomeError.textContent = 'Insira um nome com no mínimo 5 caracteres.';
                event.preventDefault(); 
            } else {
                nomeError.textContent = ''
            }

           

            var sexoInputMasc = document.getElementById('Masc');
            var sexoInputFem = document.getElementById('Fem');
            var sexoError = document.getElementById('sexoError');

            if (!sexoInputMasc.checked && !sexoInputFem.checked) {
                sexoError.textContent = 'Selecione uma opção de sexo.';
                event.preventDefault(); 
            } else {
                sexoError.textContent = ''; 
            }

            var estadoInput = document.getElementById('estado');
            var estadoError = document.getElementById('estadoError');

            if (estadoInput.value === '') {
                estadoError.textContent = 'Selecione um estado.';
                event.preventDefault(); 
            } else {
                estadoError.textContent = ''; 
            }

            var comentarioInput = document.getElementById('comentario');
            var comentarioError = document.getElementById('comentarioError');
            var palavras = comentarioInput.value.split.length;

            if (palavras < 10) {
                comentarioError.textContent = 'Insira pelo menos 10 palavras.';
                event.preventDefault();
            } else {
                comentarioError.textContent = ''
            }
        });

     