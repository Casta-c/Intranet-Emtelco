document.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.process-filters .filter-btn');
    const documentList = document.querySelector('.document-list');
    const originalDocumentsHTML = documentList.innerHTML;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterCategory = button.textContent.trim();

            if (documentList) {
                documentList.innerHTML = `<p style="text-align: center; padding: 40px; color: #007bff; font-weight: bold;">
                                            Cargando documentos para: ${filterCategory}...
                                          </p>`;

                setTimeout(() => {
                    if (filterCategory === "Todos los Procesos") {
                        documentList.innerHTML = originalDocumentsHTML;
                    } else {
                        let professionalContent = '';

                        switch(filterCategory) {
                            case 'Recursos Humanos':
                                professionalContent = `
                                    <article class="document-card">
                                        <h2>Políticas y Procedimientos de RRHH</h2>
                                        <p class="doc-meta">Última actualización: 01/12/2025 | Categoría: Recursos Humanos</p>
                                        <ul>
                                            <li>Guía completa de solicitud de vacaciones y permisos</li>
                                            <li>Procedimiento de evaluación de desempeño</li>
                                            <li>Protocolos de bienestar y salud laboral</li>
                                        </ul>
                                        <a href="#" class="download-link">Descargar Documentos</a>
                                    </article>
                                `;
                                break;

                            case 'Finanzas':
                                professionalContent = `
                                    <article class="document-card">
                                        <h2>Protocolo Financiero y Control de Gastos</h2>
                                        <p class="doc-meta">Última actualización: 02/12/2025 | Categoría: Finanzas</p>
                                        <ul>
                                            <li>Procedimiento de ingreso y aprobación de facturas</li>
                                            <li>Control y conciliación de pagos</li>
                                            <li>Registros contables y reportes internos</li>
                                        </ul>
                                        <a href="#" class="download-link">Ver Documentos</a>
                                    </article>
                                `;
                                break;

                            case 'Operaciones Call Center':
                                professionalContent = `
                                    <article class="document-card">
                                        <h2>Manual Operativo Call Center</h2>
                                        <p class="doc-meta">Última actualización: 03/12/2025 | Categoría: Operaciones</p>
                                        <ul>
                                            <li>Flujos de atención a clientes</li>
                                            <li>Protocolos de escalamiento de casos</li>
                                            <li>Guía de manejo de situaciones críticas</li>
                                        </ul>
                                        <a href="#" class="download-link">Descargar Manual</a>
                                    </article>
                                `;
                                break;

                            case 'Protocolos':
                                professionalContent = `
                                    <article class="document-card">
                                        <h2>Protocolos de Salud y Seguridad</h2>
                                        <p class="doc-meta">Última actualización: 04/12/2025 | Categoría: Salud Total</p>
                                        <ul>
                                            <li>Protocolos de prevención y control de riesgos</li>
                                            <li>Procedimientos de atención médica interna</li>
                                            <li>Guía de manejo de situaciones de emergencia sanitaria</li>
                                        </ul>
                                        <a href="#" class="download-link">Ver Protocolos</a>
                                    </article>
                                `;
                                break;

                            default:
                                professionalContent = `<p style="text-align:center; padding:20px; color:#555;">No hay documentos disponibles para esta categoría.</p>`;
                        }

                        documentList.innerHTML = professionalContent;
                    }
                }, 800);
            }
        });
    });

    // ----------------------------------------------------------------------
    // VOTACIÓN
    // ----------------------------------------------------------------------

    const submitButton = document.querySelector('.survey-widget .submit-btn');
    const pollOptions = document.querySelector('.survey-widget .poll-options');

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const selectedOption = pollOptions.querySelector('input[name="claridad"]:checked');
            if (selectedOption) {
                const voteValue = selectedOption.value;
                console.log(`Voto enviado: ${voteValue}`);
                submitButton.textContent = '¡Voto Registrado!';
                submitButton.disabled = true;
                submitButton.style.backgroundColor = '#28a745';
                pollOptions.querySelectorAll('input').forEach(input => input.disabled = true);
                alert(`¡Gracias por tu voto! Se registró: ${voteValue}`);
            } else {
                alert('Por favor, selecciona una opción antes de votar.');
            }
        });
    }

    // ----------------------------------------------------------------------
    // BÚSQUEDA SIMULADA
    // ----------------------------------------------------------------------

    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                alert(`Buscando: "${query}"... En un proyecto real, esto redirigiría a la página de resultados.`);
            } else {
                alert('Por favor, ingresa un término de búsqueda.');
            }
        });
    }

});


