document.addEventListener('DOMContentLoaded', () => {

    const btnReserva = document.querySelector('.btn-abrir-modal');
    const modalRserva = document.querySelector('.modal-reserva');
    const btnFecharReserva = document.querySelector('.fechar-modal-reserva');

    if (btnReserva) {
        btnReserva.addEventListener('click', (e) => {
            e.preventDefault();
            modalRserva.style.display = 'flex';
        });
    }

    if (btnFecharReserva) {
        btnFecharReserva.addEventListener('click', (e) => {
            e.preventDefault();
            modalRserva.style.display = 'none';
        })
    }

    const btnLogin = document.querySelector('.fa-arrow-right-to-bracket');
    const modalLogin = document.querySelector('.modal-login');
    const btnFecharLogin = document.querySelector('.fechar-modal-login');

    if (btnLogin) {
        btnLogin.addEventListener('click', () => {
            modalLogin.style.display = 'flex';
        });
    }

    if (btnFecharLogin) {
        btnFecharLogin.addEventListener('click', (e) => {
            e.preventDefault();
            modalLogin.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modalRserva) {
            modalRserva.style.display = 'none';
        }
        if (e.target == modalLogin) {
            modalLogin.style.display = 'none';
        }
    });

    window.addEventListener("scroll", function() {
        let header = this.document.querySelector('header');
        header.classList.toggle('rolagem', this.window.scrollY > 0);
    });
});