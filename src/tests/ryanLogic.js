module.exports = {
    handleCancel: (value) => {
        return !value
      },

    shortRandStr: (str) => {
        return str.substring(0,4);
    }
}