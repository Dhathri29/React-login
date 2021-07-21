const db = require("../config/db");

const addDetails = async (req, res) => {
    const { userName, password } = req.body;

    await db.query(
        `insert into login(userName,password) values('${userName}','${password}')`
    );
    res.status(201).json({ success: true, data: req.body });
};

module.exports = {
    addDetails,
};
