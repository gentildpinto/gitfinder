import { callToast } from "./helpers/swal_functions";
import { searchForm } from "./components/search_form";
import { profileCard } from "./components/github_profile_card";

jQuery(() => {
    $("#app")
        .append(
            searchForm()
        );

    $("#search-button").click(() => {
        let data = {
            username: $("#search_input").val()
        };

        if(data.username) {
            $("#app")
                .empty()
                .append(
                    profileCard(data)
                );
        } else {
            callToast({
                type: 'error',
                message: 'Usuário não encontrado!'
            });

            $("#app")
                .empty()
                .append(
                    searchForm()
                );
        }
    });
});
