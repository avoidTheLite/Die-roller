import { Router } from 'express';
const router = Router();
import { rollNSided } from './modules/rollMath.js';

router.use((req, res, next) => {
    let rollResult = {};
    console.log('Roll initializing...')
    next()
})

router.get('/roll/:number', (req, res) => {
    const dieNumberOfSides = req.params['number']; // Will select number of sides based on route
    const rollResult = rollNSided(dieNumberOfSides);
    
    res.send('Roll variable sided: Rolling ' + dieNumberOfSides + '-sided die. The result of your roll is: ' + rollResult);
    })

router.get('/roll', (req, res) => {
    const dieNumberOfSides = 6
    const rollResult = rollNSided(dieNumberOfSides);

    res.send('Roll 6 sided: The result of your roll is: ' + rollResult);
    })

export default router