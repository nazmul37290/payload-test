import { CollectionConfig } from 'payload'

const Menus: CollectionConfig = {
  slug: 'menus',
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'submenu',
      label: 'Submenu',
      type: 'array',

      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
}

export default Menus
