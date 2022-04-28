import { Router } from "express";
import { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } from "../controllers/usuarios.js";

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/:id', usuariosDelete);



export default router;