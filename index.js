// Listen for incoming requests
const port = process.env.PORT || 8000;
// const port = 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
