import { GlobalConfig } from 'payload'

const SiteSetting: GlobalConfig = {
  slug: 'site-setting',
  access: {
    read: () => true,
    //  create: () => true,
  },
  fields: [
    {
      name: 'logo',
      label: 'Website Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'websiteTitle',
      label: 'Website Title',
      type: 'text',
    },
    {
      name: 'showTitle',
      type: 'checkbox',
      label: 'Show website title in navbar',
    },
  ],
}

export default SiteSetting
