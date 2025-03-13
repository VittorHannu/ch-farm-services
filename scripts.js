document.addEventListener('DOMContentLoaded', () => {
    // Dados dinâmicos
    const servicos = [
        { nome: "Cercas", icon: "bolt" },
        { nome: "Cercas Convencionais", icon: "draw-polygon" },
        { nome: "Currais", icon: "warehouse" },
        { nome: "Bebedouros", icon: "faucet" },
        { nome: "Pastejos", icon: "leaf" },
        { nome: "Divisões de Pastagem", icon: "vector-square" },
        { nome: "Instalação", icon: "hammer" }
    ];

    const diferenciais = [
        { icon: "tractor", title: "Especialista Rural", text: "Mais de 10 anos de experiÊncia com Agronegócio" },
        { icon: "clock", title: "Execução Rápida", text: "Instalação rápida e eficiente" },
        { icon: "map-marker-alt", title: "Atendimento Regional", text: "Cobertura em toda região de Palmas e entorno" },
        { icon: "certificate", title: "Qualidade Garantida", text: "Materiais de qualidade e duráveis" }
    ];

    // Popular serviços
    const servicosGrid = document.querySelector('.servicos-grid');
    servicos.forEach(servico => {
        servicosGrid.innerHTML += `
            <div class="servico-item animate-on-scroll">
                <i class="fas fa-${servico.icon}"></i>
                <h3>${servico.nome}</h3>
                <p>Soluções profissionais para gestão eficiente</p>
            </div>
        `;
    });

    // Popular diferenciais
    const diferenciaisGrid = document.querySelector('.diferenciais-grid');
    diferenciais.forEach(dif => {
        diferenciaisGrid.innerHTML += `
            <div class="diferencial-item animate-on-scroll">
                <i class="fas fa-${dif.icon}"></i>
                <h3>${dif.title}</h3>
                <p>${dif.text}</p>
            </div>
        `;
    });

    // Popular select de serviços
    const selectServicos = document.querySelector('#servico');
    servicos.forEach(servico => {
        selectServicos.innerHTML += `<option value="${servico.nome}">${servico.nome}</option>`;
    });

    // Contador animado
    const countElements = document.querySelectorAll('.count');
    countElements.forEach(element => {
        const target = parseInt(element.dataset.target);
        let count = 0;
        const increment = target / 100;

        const updateCount = () => {
            if (count < target) {
                count += increment;
                element.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
            }
        }
        updateCount();
    });

    // Observador de scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Form submit
    document.getElementById('formContato').addEventListener('submit', (e) => {
        e.preventDefault();
        // Adicionar lógica de envio aqui
        alert('Solicitação enviada com sucesso! Entraremos em contato em até 1 dia útil.');
    });
});