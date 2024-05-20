const path = require('path');
const db = require('../../database/models');
const artistasAPIServices = require('../../database/Services/albumesServices');
const e = require('express');

const albumesAPIController = {
    
    listAlbums: async function(req, res) {

        try {
            let albums = await artistasAPIServices.listAlbums();
            return res.json(albums);
        } catch (error) {
            console.log( 'Error Controller',error);
        }
    }, 

    'detail': (req, res) => {
        return res.send('Devuelve el detalle de un album asociado a un (" id ") de un artista indicado en la ruta o en la query string.');
    }
}

module.exports = albumesAPIController;
