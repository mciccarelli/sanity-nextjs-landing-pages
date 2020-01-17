export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e21ef0b54974601b274cde3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sb83toak',
                  apiId: '118599d6-a1fe-44ad-ae7f-0d8d30bb696c'
                },
                {
                  buildHookId: '5e21ef0ba9503e01a1f82dbe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fmoqrf66',
                  apiId: '89a56446-4ed0-4196-b43e-276889d6412e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mciccarelli/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fmoqrf66.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
