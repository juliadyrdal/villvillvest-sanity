export default {
    name: 'concert',
    type: 'document',
    title: 'Konsert',
    fields: [ 
        {
            name: 'artist',
            type: 'reference',
            title: 'Artist',
            to: [{type: 'artist' }],
        },
        {
            name: 'festivalDay',
            type: 'reference',
            title: 'Festivaldag',
            to: [{type: 'festivalDay' }],
        },
        {
            name: 'venue',
            type: 'reference',
            title: 'Scene',
            to: [{type: 'venue' }],
        },
        {
            name: 'time',
            type: 'datetime',
            title: 'Tid',
        },
    ],
    preview: {
        select: {
          title: 'artist.name', // if the movie has a director, follow the relation and get the name
        },
    }
}