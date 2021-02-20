import { callToast } from "./helpers/swal_functions";
import { profileCard } from "./components/github_profile_card";

jQuery(() => {
    $("#search-button").click(() => {
        callToast({
            type: 'error',
            message: 'Usuário não encontrado!'
        });
    });
});
