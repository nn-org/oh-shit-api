const { scan } = require("./aws/dynamoDB");

 module.exports = async(event) => {
  try {
    const response = await scan();
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };

   } catch(err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "failed to scan data from the DB",
        input: event,
      }, null, 2),
    };
  }
}
