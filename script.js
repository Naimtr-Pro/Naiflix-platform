// Função para alternar entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');

    // Alterna a classe 'light-mode' no body
    body.classList.toggle('light-mode');

    // Atualiza o ícone do botão
    if (body.classList.contains('light-mode')) {
        button.textContent = '☀️'; // Sol para light mode
        localStorage.setItem('theme', 'light');
    } else {
        button.textContent = '🌙'; // Lua para dark mode
        localStorage.setItem('theme', 'dark');
    }
}

// Carrega o tema salvo no localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const button = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        button.textContent = '☀️';
    } else {
        button.textContent = '🌙';
    }

    // Carrega perfil selecionado
    const selectedProfile = localStorage.getItem('selectedProfile');
    if (selectedProfile) {
        const profiles = document.querySelectorAll('.profile-btn');
        profiles.forEach(btn => {
            if (btn.querySelector('figcaption').textContent === selectedProfile) {
                btn.classList.add('selected');
            }
        });
    }
}

// Adiciona evento ao botão
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    button.addEventListener('click', toggleTheme);
    loadTheme(); // Carrega tema ao carregar página

    // Adiciona eventos aos perfis
    const profileButtons = document.querySelectorAll('.profile-btn');
    profileButtons.forEach(btn => {
        btn.addEventListener('click', selectProfile);
    });

    // Adiciona evento ao botão Gerenciar perfis
    const manageButton = document.getElementById('manage-profiles');
    manageButton.addEventListener('click', manageProfiles);
});

// Função para selecionar perfil
function selectProfile(event) {
    // Remove classe 'selected' de todos os perfis
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    // Adiciona classe 'selected' ao perfil clicado
    event.currentTarget.classList.add('selected');
    // Salva o perfil selecionado no localStorage
    const profileName = event.currentTarget.querySelector('figcaption').textContent;
    const profileImage = event.currentTarget.querySelector('img').src;
    localStorage.setItem('selectedProfile', profileName);
    localStorage.setItem('perfilAtivoNome', profileName);
    localStorage.setItem('perfilAtivoImagem', profileImage);

    // Vai direto para o catálogo
    window.location.href = 'catalogo/catalogo.html';
}

// Função para gerenciar perfis
function manageProfiles() {
    alert('Funcionalidade de gerenciamento de perfis em desenvolvimento. Aqui você poderia editar, adicionar ou remover perfis.');
}

