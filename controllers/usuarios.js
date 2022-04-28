

export const usuariosGet = (req, res) => {
    const { q, nombre, apiKey } = req.query;

    res.json({
        message: 'Hello users',
        q,
        nombre,
        apiKey
    });
}

export const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;

    res.json({
        message: 'Hello POST',
        nombre, edad
    });
}
export const usuariosPut = (req, res) => {
    const {id} = req.params;

    res.json({
        message: 'Hello PUT',
        id
    });
}
export const usuariosDelete = (req, res) => {


    res.json({
        message: 'Hello DELETE'
    });
}