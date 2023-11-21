const params = new URLSearchParams(window.location.search);
const idserie = params.get('id');

desenharCardDetalhe('cardDetalhe', paisesPopulares, idserie);