module.exports = function(error, req, res, next) {
    const { status, message } = error;
    return res.status(status | 500).json({
        error: true,
        message: message | 'Algo salió mal'
    });
}