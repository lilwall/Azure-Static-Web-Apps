module.exports = async function (context, req) {
    const fetch= require ('node-fetch');

    await fetch ('https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random').then(response => response.json()).then(data => response.data);
    context.res.json({
    text: String(response.phrase)
    });
    };