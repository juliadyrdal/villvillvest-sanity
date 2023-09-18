export default {
    name: 'festivalEdition',
    type: 'document',
    title: 'Festivalutgave',
    fields: [ 
        {
            name: 'festivalYear',
            type: 'number',
            title: 'Festivalår',
            validation: Rule => Rule.required().min(2000).max(2050),
        },    
    ]
}