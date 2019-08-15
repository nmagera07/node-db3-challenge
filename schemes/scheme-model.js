const db = require('../data/db-config.js')

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id })
}

function add(scheme) {
    return db('schemes').insert(scheme)
}

function update(changes, id) {
    return db('schemes').where({ id }).update(changes)
}

function remove(id) {
    return db('schemes').where({ id }).del()
}

function findSteps(id) {
    return db('steps')
        .innerJoin('schemes', 'steps.scheme_id', 'schemes.id')
        .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .orderBy('steps.step_number')
        .where({ scheme_id: id })
        
}

function addStep(step, scheme_id) {
    return db('steps')
        .innerJoin('schemes', 'steps.scheme_id', 'schemes.id')
        .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .orderBy('steps.step_number')
        .where({ scheme_id })
        .insert(step)
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findSteps,
    addStep,

}