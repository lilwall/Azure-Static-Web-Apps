module.exports = async function (context, req) {
    const fetch= require ('node-fetch');

    await fetch ('https://rick-and-morty-api-phrases.herokuapp.com/').then(response => response.json()).then(data => response.data);x
    context.res.json({
    text: String(response.phrase)
    });
    };