const SearchQuery = require("../models/SearchQuery");

exports.getSearches = async (req, res) => {
    try {
        const searches = await SearchQuery.find();

        return res.status(200).json({
            success: true,
            count: searches.length,
            data: searches,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

exports.addSearch = async (req, res) => {
    try {
        const { text } = req.body;

        if (text === "") {
            return res.status(403).json({
                success: false,
                error: "Search query cannot be empty",
            });
        }

        const search = await SearchQuery.create(req.body);

        // status code 201 - Created
        return res.status(201).json({
            success: true,
            data: search,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};
