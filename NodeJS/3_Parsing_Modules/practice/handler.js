const { calHandler } = require("./calculator");

const RequestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
      </head>
      <body>
        <h1>Welcome to Home Page</h1>
        <a href="/calculator">Go to the calculator</a>
      </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator</title>
      </head>
      <body>
        <h1>This is your calculator</h1>
        <form action="/result-calculator" method="POST">
          <input type="text" placeholder="Enter a number" name="first" required>
          <br>
          <input type="text" placeholder="Enter another number" name="second" required>
          <br>
          <input type="submit" value="Submit">
          <br>
          <a href="/">Go to home</a>
        </form>
      </body>
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/result-calculator" && req.method === "POST") {
    return calHandler(req, res);
  } else {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - Not Found</title>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
        <a href="/">Go to home</a>
      </body>
      </html>
    `);
    return res.end();
  }
};

module.exports = RequestHandler;
