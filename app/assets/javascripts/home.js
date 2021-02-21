import { callToast } from "./helpers/swal_functions";

jQuery(() => {
    $("#search-button").click(() => {
        callToast({
            type: 'error',
            message: 'Usuário não encontrado!'
        });
    });
});
