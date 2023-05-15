const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body
    const totalMoney = numWeeks * weeklyRevenue
    if (!totalMoney || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
        res.status(400).send()
    } else {
        next()
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;






  