import { Router } from 'express';

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/listCateg', async (req, res) => {
    try {
        res.render('categorias/listCateg');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//--------AÑADIR --------------------------------------------//
router.get('/addCateg', (req, res) => {
    res.render('categorias/addCateg');
});

router.post('/addCateg', async (req, res) => {
    try {
        res.redirect('/listCateg');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//--------ACTUALIZAR --------------------------------------------//
router.get('/editCateg', (req, res) => {
    res.render('categorias/editCateg');
});

router.post('/editCateg', async (req, res) => {
    try {
        res.redirect('/listCateg');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
