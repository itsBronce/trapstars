// Cargar el menú desde el archivo JSON
fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        const menu = document.getElementById('menu');
        const ul = document.createElement('ul');

        data.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.name;
            li.appendChild(a);
            ul.appendChild(li);
        });

        menu.appendChild(ul);
    })
    .catch(error => console.error('Error al cargar el menú:', error));
