export default {
    name: 'speaker',
    type: 'document',
    title: 'Konferanse-speaker',
    groups: [
        {
          name: 'viktigst',
          title: 'Viktigst',
        },
        {
          name: 'english',
          title: 'English',
        },
        {
          name: 'social',
          title: 'Social media',
        },
      ],
    fields: [ 
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
            description: 'Skriv tittel på foredrag her',
            group: 'viktigst',
        },
        {
            name: 'name',
            type: 'string',
            title: 'name',
            description: 'Skriv navn på foredragsholder her',
            group: 'viktigst',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
              },
            group: 'viktigst',
        },
        {
            name: 'festivalEdition',
            type: 'reference',
            title: 'Festivalutgave',
            to: [{type: 'festivalEdition' }],
            group: 'viktigst',
        },
        {
            name: 'cover',
            type: 'image',
            title: 'Portrett av foredragsholder',
            description: 'NB! Ikke last opp bilde med tekst på',
            group: 'viktigst',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            type: 'array',
            title: 'Kort tekst om foredraget',
            group: 'viktigst',
            of: [
                {
                    type: 'block'
                },
            ]
        },
        {
            name: 'bioEng',
            type: 'array',
            title: 'Engelsk oversettelse',
            group: 'english',
            of: [
                {
                    type: 'block'
                },
            ]
        },
        {
            name: 'instagram',
            type: 'url',
            title: 'Instagram',
            description: 'Url til foredragsholders instagramkonto',
            group: 'social',
        },
        {
            name: 'youtube',
            type: 'url',
            title: 'YouTube',
            description: 'Url til foredragsholders YouTube-konto',
            group: 'social',
        },  
        {
            name: 'website',
            type: 'url',
            title: 'Nettside',
            description: 'Url til foredragsholders nettside',
            group: 'social',
        },    
    ]
}