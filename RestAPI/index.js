const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./conexion');
const { Cliente } = require('./model/Cliente');
const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send("Bienvenido");
});

app.get('/clientes', (request, response) => {
    Cliente.find().then((clientes) => {
        response.send(clientes);
    }, (error) => {
        reponse.status(400).send(error);
    });
});

app.get('/clientes/busqueda/:id', (request, response) => {
    let clienteId = request.params.id;
    Cliente.findById(clienteId).then((cliente) => {
        if(!cliente){
            return response.status(400).send();
        }
        response.send(cliente);
    }, (error) => {
        response.status(400).send(error);
    })
})

app.post('/clientes/nuevo', (request, response) => {
    let cliente = new Cliente({
        nombre: request.body.nombre,
        direccion: request.body.direccion,
        telefono: request.body.telefono
    });
    cliente.save().then((cliente) => {
        response.send(cliente);
    }, (error) => {
        response.status(400).send(error);
    });
});

app.put('/clientes/update/:id', (request, response) => {
    let clienteId = request.params.id;
    let actualizaciones = {
        nombre: request.body.nombre,
        direccion: request.body.direccion,
        telefono: request.body.telefono
    }
    Cliente.findByIdAndUpdate(clienteId, actualizaciones, {new: true}).then((cliente) => {
        if(!cliente){
            return response.status(400).send()
        }
        response.send(cliente);
    }, (error) => {
        response.status(400).send(error);
    });

});

app.delete('/cliente/delete/:id', (request, response) => {
    let clienteId = request.params.id;
    Cliente.findByIdAndRemove(clienteId).then((cliente) => {
        if(!cliente){
            return response.status(400).send();
        }
        response.send(cliente);
    }, (error) => {
        response.status(400).send(error);
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});