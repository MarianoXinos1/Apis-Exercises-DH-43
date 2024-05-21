const path = require('path');
const db = require('../../database/models');
const artistasAPIServices = require('../../database/Services/artistasServices');
const e = require('express');

const artistasAPIController = {

    list: async function(req, res) {

        try {
            const list = await artistasAPIServices.listArtists();
            return res.json(list);
        } catch (error){
            console.log(error);
            return { status:500 }
        }
    },


    create: async function(req,res) {
        
        try{ 
            const newArtist = await artistasAPIServices.create(req.body);
            return res.status(201).json(newArtist);
        } catch (error){
            console.log('Error Controller,error');
            return {status:500}
        }

    },
    update: async function(req,res) {
            const artistId= req.params.id;
            const updateData = req.body;

            try {
                const updateArtist = await artistasAPIServices.update(artistId, updateData);
                return res.status(200).json(updateArtist);
            } catch (error) {
                console.log('Error Controller', error);
                return {status:500}
            }
        
        
    },

    destroy: (req,res) => {
        return res.send('Puedes eliminar un artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/delete/id desde la plataforma POSTMAN');
    }
}
module.exports = artistasAPIController;