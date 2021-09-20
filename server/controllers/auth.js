exports.register = (req, res) => {
    console.log("register", req.body);
    res.json({
        data: "you hit register endpoint",
    });
};
