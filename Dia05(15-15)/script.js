    function mostrarSecao(id) {
      document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
      document.getElementById(id).classList.add("active");
    }

    function buscarPorId() {
      const id = document.getElementById("idBusca").value;
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => resp.json())
        .then(dado => {
          document.getElementById("respostaBuscaId").innerHTML = `
            <br><span class='campo'>ID:</span> ${dado.id}
            <br><span class='campo'>User ID:</span> ${dado.userId}
            <br><span class='campo'>Título:</span> ${dado.title}
            <br><span class='campo'>Corpo:</span> ${dado.body}
          `;
        });
    }

    function buscarTodos() {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(resp => resp.json())
        .then(dados => {
          let mensagem = "";
          dados.forEach(dado => {
            mensagem += `
              <hr>
              <span class='campo'>ID:</span> ${dado.id}
              <br><span class='campo'>User ID:</span> ${dado.userId}
              <br><span class='campo'>Título:</span> ${dado.title}
              <br><span class='campo'>Corpo:</span> ${dado.body}<br>
            `;
          });
          document.getElementById("respostaTodos").innerHTML = mensagem;
        });
    }

    function criarPostagem() {
      const titulo = document.getElementById("tituloCriar").value;
      const corpo = document.getElementById("corpoCriar").value;
      const userId = document.getElementById("userIdCriar").value;

      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify({ title: titulo, body: corpo, userId: userId }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then(resp => resp.json())
        .then(dado => {
          document.getElementById("respostaCriar").innerHTML = `
            <br><span class='campo'>Postagem criada com sucesso!</span>
            <br><span class='campo'>ID:</span> ${dado.id}
            <br><span class='campo'>Título:</span> ${dado.title}
            <br><span class='campo'>Corpo:</span> ${dado.body}
            <br><span class='campo'>User ID:</span> ${dado.userId}
          `;
        });
    }

    function atualizarPostagem() {
      const titulo = document.getElementById("tituloAtualizar").value;
      const corpo = document.getElementById("corpoAtualizar").value;
      const userId = document.getElementById("userIdAtualizar").value;

      fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method: "PUT",
        body: JSON.stringify({ id: 1, title: titulo, body: corpo, userId: userId }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then(resp => resp.json())
        .then(dado => {
          document.getElementById("respostaAtualizar").innerHTML = `
            <br><span class='campo'>Postagem atualizada:</span>
            <br><span class='campo'>ID:</span> ${dado.id}
            <br><span class='campo'>Título:</span> ${dado.title}
            <br><span class='campo'>Corpo:</span> ${dado.body}
            <br><span class='campo'>User ID:</span> ${dado.userId}
          `;
        });
    }

    function deletarPostagem() {
      const id = document.getElementById("idDeletar").value;
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
    })
        .then(resp => {
        if (resp.ok) {
            document.getElementById("respostaDeletar").innerHTML = `<br><span class='campo'>Postagem ${id} deletada com sucesso!</span>`;
        } else {
            document.getElementById("respostaDeletar").innerHTML = `<br><span class='campo'>Erro ao deletar postagem.</span>`;
        }
        });
    }