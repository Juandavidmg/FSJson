document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('consulta').addEventListener('click', function() {
        const findID = document.getElementById('findID').value;
        const resultadoDIV = document.getElementById('resultado');

        resultadoDIV.innerHTML = '';

        if (findID) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${findID}/comments`)
                .then(response => response.json())
                .then(comments => {
                    if (comments.length > 0) {
                        comments.forEach(comment => {
                            const commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');
                            commentDiv.innerHTML = `
                                <h3>${comment.name}</h3>
                                <p><strong>Email:</strong> ${comment.email}</p>
                                <p>${comment.body}</p>
                            `;
                            resultadoDIV.appendChild(commentDiv);
                        });
                    } else {
                        resultadoDIV.innerHTML = `<p>No hay comentarios con el ID ${findID}</p>`;
                    }
                })
                .catch(error => {
                    console.error('Error al obtener los comentarios', error);
                    resultadoDIV.innerHTML = '<p>Error al obtener la información.</p>';
                });
        } else {
            resultadoDIV.innerHTML = '<p>Por favor ingresa un número de ID.</p>';
        }
    });
});
