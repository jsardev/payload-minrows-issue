import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'cart',
      type: 'group',
      fields: [
        {
          name: 'items',
          type: 'array',
          required: true,
          minRows: 0,
          fields: [
            {
              name: 'name',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
