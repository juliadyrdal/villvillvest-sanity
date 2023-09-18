export default {
    name: 'artist',
    type: 'document',
    title: 'Artist',
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
            name: 'name',
            type: 'string',
            title: 'Name',
            description: 'Skriv artistnavn her',
            group: 'viktigst',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
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
            title: 'Artist portrait',
            description: 'NB! Ikke last opp bilde med tekst på',
            group: 'viktigst',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            type: 'array',
            title: 'Artistbio',
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
            title: 'Engelsk artistbio',
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
            description: 'Url til artistens instagramkonto',
            group: 'social',
        },
        {
            name: 'spotify',
            type: 'url',
            title: 'Spotify',
            description: 'Url til artistens Spotify-profil',
            group: 'social',
        },
        {
            name: 'soundcloud',
            type: 'url',
            title: 'SoundCloud',
            description: 'Url til artistens SoundCloud-profil',
            group: 'social',
        },
        {
            name: 'youtube',
            type: 'url',
            title: 'YouTube',
            description: 'Url til artistens YouTube-konto',
            group: 'social',
        },      
    ]
}