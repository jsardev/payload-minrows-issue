import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await payload.create({
    collection: 'users',
    data: {
      email: 'test@test.com',
      password: 'test',
      cart: {
        items: [],
      },
    },
  })
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Migration code
}
