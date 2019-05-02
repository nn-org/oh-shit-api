module.exports = async (event) => {
  const victim = {};

  event.Records.forEach( record => {
    const { body, messageAttributes } = record;
    console.log({record});
    console.log({body});
    console.log({messageAttributes});
    
    for(let key in messageAttributes) {
      victim[key] = messageAttributes[key].stringValue;
    }
    console.log({victim});
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'processed content successfully',
      input: event,
    }, null, 2),
  };
};