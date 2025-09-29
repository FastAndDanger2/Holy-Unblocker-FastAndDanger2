(async () => {
  await import('./src/server.mjs');
})();

const port = process.env.PORT || 3000;
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Listening on port ${port}`);
});
