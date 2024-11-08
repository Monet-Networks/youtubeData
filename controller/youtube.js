const { google } = require("googleapis");
require("dotenv").config();

const youtube = google.youtube({
  version: "v3",
  auth: "AIzaSyAkWxSRg-pS9sQ0cvbchbqxPXylINz6Qh4",
});

async function main(query, maxResults = 10) {
  try {
    const response = await youtube.search.list({
      part: "snippet",
      q: query,
      maxResults: maxResults,
      type: "video",
    });
    return response.data.items;
  } catch (error) {
    console.log(error);
    // res.status(500).json({
    //   msg: "Something went wrong",
    //   err: error,
    // });
    return error;
  }
}

exports.youtubeApi = async (req, res) => {
  try {
    const query = req.query.search;
    const searchResults = await main(query, 5);
    return res.status(200).json({
      code: 200,
      error: false,
      message: "Successfully",
      data: { searchResults },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something went wrong",
      err: error,
    });
  }
};
