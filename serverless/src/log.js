module.exports = async (event) => {

  try {
    event.Records.forEach( record => {
      console.log({record});
      const body = JSON.parse(record.body);
      console.log({body});
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'processed content successfully',
        input: event,
      }, null, 2),
    };
  } catch(err) {
    console.log({err});
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'failed to iterate over event.Records',
        input: event,
      }, null, 2),
    };
  }
  

  
};