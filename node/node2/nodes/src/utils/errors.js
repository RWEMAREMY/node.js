const errorFunc = (res, message, status, data) => {
    return res.status(status).json({
        deliver: message,
        status: status,
        data: data
    });
};

export default errorFunc;