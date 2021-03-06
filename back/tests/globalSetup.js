const knex = require('./getKnexTestInstance')
const knexCleaner = require('knex-cleaner') // eslint-disable-line
const DeclarationMonth = require('../models/DeclarationMonth')
const { Model } = require('objection')

Model.knex(knex)

// Initial setup : Empty db (except potential migrations data)
// Then add a month in declaration months (will avoid putting it everywhere in the tests)
module.exports = () =>
  knex.migrate
    .latest()
    .then(() => knexCleaner.clean(knex, { ignoreTables: ['knex_migrations'] }))
    .then(() =>
      DeclarationMonth.query().insert([
        {
          month: new Date('2019-01-01T00:00:00.000Z'),
          startDate: new Date('2019-01-28T00:00:00.000Z'),
          endDate: new Date('2019-02-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-02-01T00:00:00.000Z'),
          startDate: new Date('2019-02-28T00:00:00.000Z'),
          endDate: new Date('2019-03-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-03-01T00:00:00.000Z'),
          startDate: new Date('2019-03-28T00:00:00.000Z'),
          endDate: new Date('2019-04-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-04-01T00:00:00.000Z'),
          startDate: new Date('2019-04-28T00:00:00.000Z'),
          endDate: new Date('2019-05-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-05-01T00:00:00.000Z'),
          startDate: new Date('2019-05-28T00:00:00.000Z'),
          endDate: new Date('2019-06-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-06-01T00:00:00.000Z'),
          startDate: new Date('2019-06-28T00:00:00.000Z'),
          endDate: new Date('2019-07-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-07-01T00:00:00.000Z'),
          startDate: new Date('2019-07-28T00:00:00.000Z'),
          endDate: new Date('2019-08-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-08-01T00:00:00.000Z'),
          startDate: new Date('2019-08-28T00:00:00.000Z'),
          endDate: new Date('2019-09-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-09-01T00:00:00.000Z'),
          startDate: new Date('2019-09-28T00:00:00.000Z'),
          endDate: new Date('2019-10-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-10-01T00:00:00.000Z'),
          startDate: new Date('2019-10-28T00:00:00.000Z'),
          endDate: new Date('2019-11-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-11-01T00:00:00.000Z'),
          startDate: new Date('2019-11-28T00:00:00.000Z'),
          endDate: new Date('2019-12-16T00:00:00.000Z'),
        },
        {
          month: new Date('2019-12-01T00:00:00.000Z'),
          startDate: new Date('2019-12-28T00:00:00.000Z'),
          endDate: new Date('2020-01-16T00:00:00.000Z'),
        },
      ]),
    )
