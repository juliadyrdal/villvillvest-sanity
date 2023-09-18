export default {
    name: 'venue',
    type: 'document',
    title: 'Scene',
    fields: [ 
        {
            name: 'Name',
            type: 'string',
            title: 'Navn',
        },
        {
            name: 'streetAddress',
            type: 'string',
            title: 'Gateadresse',
            description: 'Gatenavn pluss husnummer'
        },
        {
            name: 'website',
            type: 'url',
            title: 'Nettside',
            description: 'Legg til nettside, så besøkende kan sjekke aldersgrense osv.'
        },
    ]
}