export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const FAIL_CATEGORIES = 'FAIL_CATEGORIES'

export const selectCategory = category => ({
    type: SELECT_CATEGORY,
    category: category
})

export const requestCategories = () => ({
    type: REQUEST_CATEGORIES
})

export const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories: categories
})

export const failCategories = (err) => ({
    type: FAIL_CATEGORIES,
    err
})

