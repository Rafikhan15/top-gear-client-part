import React from 'react';


import other1 from '../../../images/others/rsz_18-188336_motorcycle-helmet-front-png-png-download-motorcycle-helmet.png';
import other2 from '../../../images/others/rsz_e94f64b551b98370d48743d4e061f643.png';
import other3 from '../../../images/others/rsz_sedici_strada2_helmet_matte_black_300x300.png';


import Other from '../Other/Other';

const others = [

    { id: 1, name: 'MT', country: 'Spain', price: '20000', dis: 'Spain Best Helmet Brand.It is provide stylish comfort and safety', img: other1 },
    { id: 2, name: 'Shark', country: 'French', price: '25000', dis: 'French Top Helmet.It is provide best comfort and safety', img: other2 },
    { id: 3, name: 'KYT', country: 'Indonesia', price: '15000', dis: 'It is provide best comfort and safety.And also provide coolness and freshness', img: other3 },

]

const Others = () => {
    return (
        <div id="others" className='container'>
            <h2 className='text-primary text-center mt-5'>Others</h2>
            <div className="row">
                {
                    others.map(other => <Other
                        key={other.id}
                        other={other}
                    ></Other>)
                }
            </div>
        </div>
    );
};

export default Others;