const calHandler = (req, res) => {
  console.log("Inside sum handler:", req.url);
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("Received chunk:", chunk.toString());
  });

  req.on("end", () => {
    const bodyObject = Buffer.concat(body).toString();
    console.log("Complete body:", bodyObject);

    const urlparams = new URLSearchParams(bodyObject);
    const jSONobj = Object.fromEntries(urlparams);
    console.log("Parsed object:", jSONobj);

    const result = Number(jSONobj.first) + Number(jSONobj.second);
    console.log("Calculation result:", result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Result</title>
      </head>
      <body>
        <h1>The sum of the two number is : ${result}</h1>
        <a href="/calculator">Go back to Calculator</a>
        <br>
        <a href="/">Go to Home section</a>
      </body>
      </html>
    `);
    return res.end();
  });
};

exports.calHandler = calHandler;
