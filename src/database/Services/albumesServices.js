const db = require('../models');
const sequelize = db.sequelize;  

let albumesAPIServices = {


    listAlbums: async function() {
         
        try{
            const albums = await db.Album.findAll({
                include: [
                    {association: 'artista'}   // Esto incluirá todos los álbumes asociados con cada artista.
                ]
            });
            return albums;
        } catch (error) {
            console.log('Error al buscar albumes en la tabla de artistas', error);
            return {status:500}
        }
    },

}

module.exports = albumesAPIServices;