const path = require('path');
const db = require('../../database/models');
const artistasAPIServices = require('../../database/Services/albumesServices');
const e = require('express');

const albumesAPIController = {
    
    listAlbums: async function(req, res) {

        try {
            const albums = await artistasAPIServices.listAlbums();
            return res.json(albums);
        } catch (error) {
            console.log( 'Error Controller',error);
            return { status:500 }
        }
    }, 

    detailByArtistId: async function(req, res) {
         
        try {
            const album = await artistasAPIServices.detailByArtistId(req.params.id);
            return res.json(album);
        } catch (error) {
            console.log('Error Controller', error);
            return { status:500 }
        }
        
    },
}

module.exports = albumesAPIController;
