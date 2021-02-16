const search_form  = require("./components/search_form.js").render();
const profile_card = require("./components/github_profile_card.js");

jQuery(() => {

    $("#app").append(
        search_form
    );

    $("#search-button").click(() => {
        let data = {
            username: $("#search_input").val()
        };

        $("#app")
            .empty()
            .append(
                profile_card.render(data)
            );
    });
});
