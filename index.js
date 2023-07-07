const fetch = require('node-fetch');

async function scrapeFestivals(region, domaine, departement, moisHabituelDeDebut) {
    try {
        let apiUrl = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=1000&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut';

        if (region) {
            apiUrl += `&refine.region=${encodeURIComponent(region)}`;
        }
        if (domaine) {
            apiUrl += `&refine.domaine=${encodeURIComponent(domaine)}`;
        }
        if (departement) {
            apiUrl += `&refine.departement=${encodeURIComponent(departement)}`;
        }
        if (moisHabituelDeDebut) {
            apiUrl += `&refine.mois_habituel_de_debut=${encodeURIComponent(moisHabituelDeDebut)}`;
    }

    const response = await fetch(apiUrl);

    if (response.ok) {
        const data = await response.json();
        const festivals = data.records;

        const extractedData = festivals.map((festival) => {
            const nom = festival.fields.nom_de_la_manifestation;
            const domaine = festival.fields.domaine;
            const commune = festival.fields.commune_principale;
            const siteWeb = festival.fields.site_web;
            const moisHabituelDeDebut = festival.fields.mois_habituel_de_debut;

        return {
            nom,
            domaine,
            commune,
            siteWeb,
            moisHabituelDeDebut,
        };
    });

    return extractedData;
    } else {
        console.error(response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

async function getFilteredFestivals() {
    return scrapeFestivals('Bourgogne-Franche-Comté', 'Danse', '21', '01 (janvier)');
}

module.exports = {
    getFilteredFestivals,
};
