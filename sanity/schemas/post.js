export default {
    name: 'post',
    type: 'document',
    title: 'Nyhet',
    groups: [
        {
            name: 'viktigst',
            title: 'Viktigst',
          },
      ],
    fields: [ 
        {
            name: 'title',
            type: 'string',
            title: 'Tittel',
            group: 'viktigst',
            validation: Rule => Rule.required(),
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
            validation: Rule => Rule.required(),
        },
        {
            name: 'cover',
            type: 'image',
            title: 'Featured image',
            description: 'NB! Ikke last opp bilde med tekst på',
            group: 'viktigst',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true,
            },
        },
        {
            name: 'content',
            type: 'array',
            title: 'Tekst',
            group: 'viktigst',
            of: [
                {
                    type: 'block'
                },
            ]
        },      
    ]
}