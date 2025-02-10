// app.test.js
const { exec } = require("child_process");

test("debe imprimir 'Hola Mundo'", (done) => {
  exec("node index.js", (error, stdout, stderr) => {
    expect(stdout.trim()).toBe("Hola Mundo");
    done();
  });
});
