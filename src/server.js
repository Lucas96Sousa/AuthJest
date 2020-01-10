const app = require("./app");

const port = 4000;

app.listen(process.env.PORT || port, () => {
  console.log(`Porta de Acesso é ${port}`);
});
