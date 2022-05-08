import React from 'react';


import part1 from '../../../images/parts/rsz_ej-strat-qmiemm3sd2c-unsplash.png';
import part2 from '../../../images/parts/rsz_istockphoto-1220778705-612x612.png';
import part3 from '../../../images/parts/rsz_motorcycle-spare-parts-components-engine-speedometer-motorcycle-spare-parts-components-engine-speedometer-lighting-153623713.png';
import Part from '../Part/Part';



const parts = [

    { id: 1, name: 'Name Plate', dis: 'This name plate is high quality', img: part1 },
    { id: 2, name: 'Motorbike Tire', dis: 'This Motorbike Tire is best other brand.', img: part2 },
    { id: 3, name: 'Speed Meter', dis: 'Digital Speed Meter is best quality.', img: part3 },

]

const Parts = () => {
    return (
        <div id="parts" className='container'>
            <h2 className='text-primary text-center mt-5'>Motorbike Spare Parts</h2>
            <div className="row">
                {
                    parts.map(part => <Part
                        key={part.id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;