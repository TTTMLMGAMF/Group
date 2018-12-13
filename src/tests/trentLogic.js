module.exports = {

    showModal(value) {
        return !value
    },

    addOrSub(value) {
        if (value === 'add') {
            return true
        } else if (value === 'sub') {
            return false
        }
    }

}

