// GET ALL TOURS
exports.getAllTours =  (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    });
};
// GET a single TOUR.
exports.getSingleTour = (req, res) => {

    // Javascript trick to convert strings to numbers.

    const id = req.params.id * 1;

    if(id > tours.length) {
        return res.status(404).json({ 
            status: 'fail',
            message: 'Could not find ID' 
        });
    }

    // Find takes a callback function.

    const tour = tours.find(el => el.id === id);

    res.status(200).json({
        status: 'sucess',
        requestedAt: req.requestTime,
        data: {
            tour
        }
    });
};

// POST A TOUR
exports.createTour = (req, res) => {

    // console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id: newId}, req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            requestedAt: req.requestTime,
            data: {
                tour: newTour
            }
        })
    });
};

// PATCH Data Incomplete.
exports.patchTour = (req, res) => {

    const id = req.params.id * 1;

    if(id > tours.length) {
        return res.status(404).json({ 
            status: 'Fail',  
            message: 'Could not find ID.' 
        });
    }

    // Find takes a callback function.

    const tour = tours.find(el => el.id === id);

    res.status(200).json({
        status: 'Success',
        requestedAt: req.requestTime,
        data: {
            tour,
            message: 'Updated Tour!'
        }
    })
};

// DELETE Data Incomplete.
exports.deleteTour = (req, res) => {

    const id = req.params.id * 1;

    if(id > tours.length) {
        return res.status(404).json({ 
            status: 'Fail',  
            message: 'Could not find ID.' 
        });
    }

    // Find takes a callback function.

    const tour = tours.find(el => el.id === id);

    res.status(204).json({
        status: 'Success',
        data: null
    })
};