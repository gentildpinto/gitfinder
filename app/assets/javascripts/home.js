import { callToast } from "./helpers/swal_functions";

jQuery(() => {
    if($("#not_found_user").data('session')) {
        callToast({
            type: 'error',
            message: 'Usuário não encontrado!'
        });
    }
});
