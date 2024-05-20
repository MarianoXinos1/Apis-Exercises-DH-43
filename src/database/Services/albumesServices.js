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

    detailByArtistId: async function(artistaId){

        try{
            const album = await db.Album.findAll({  // No uso findByPk porque no funciona con FK.
                where: { id_artista: artistaId },
                include: [
                    {association: 'artista'}  // Para acceder a la tabla y buscar artistaId
                ]
            });
            return album;
        } catch (error) {
            console.log('Error al buscar albumes en la tabla de artistas', error);
            return {status:500}
        }
    }

}

module.exports = albumesAPIServices;