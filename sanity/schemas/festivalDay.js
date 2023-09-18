export default {
    name: 'festivalDay',
    type: 'document',
    title: 'Festivaldag',
    fields: [ 
        {
            name: 'date',
            type: 'date',
            title: 'Dato',
        },
        {
            name: 'weekDay',
            type: 'string',
            title: 'Ukedag',
        },
        {
            name: 'weekDayEng',
            type: 'string',
            title: 'Ukedag engelsk oversettelse',
        },
        {
            name: 'festivalEdition',
            type: 'reference',
            title: 'Festivalutgave',
            to: [{type: 'festivalEdition' }],
        },
    ]
}