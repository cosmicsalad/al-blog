export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e72e64aca566fe8d1d3687c',
                  title: 'Sanity Studio',
                  name: 'al-blog-studio',
                  apiId: '152f9116-dec3-4edd-b565-cc6bd1f71642'
                },
                {
                  buildHookId: '5e72e64a1444bb1319ca2628',
                  title: 'Blog Website',
                  name: 'al-blog',
                  apiId: '281970e1-7ac6-4901-b737-5ea4eda2f03b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cosmicsalad/al-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://al-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
