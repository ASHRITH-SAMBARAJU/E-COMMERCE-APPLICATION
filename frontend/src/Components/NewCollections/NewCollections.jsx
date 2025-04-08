
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NewCollections.css';
// import { backend_url } from '../../App';

// const newCollectionItems = [
//   { id: 1, name: 'MEN SECTION', image: 'C:\my projects\sir ecom\frontend\src\Components\Assets\men.png.png', route: '/mens' },
//   { id: 2, name: 'WOMEN SECTION', image: 'C:\my projects\sir ecom\frontend\src\Components\Assets\womenban.png', route: '/womens' },
//   { id: 3, name: 'KIDS SECTION', image: 'C:\my projects\sir ecom\frontend\src\Components\Assets\kidban.png', route: '/kids' },
// ];

// const NewCollections = () => {
//   return (
//     <div className='new-collections'>
//       <h1>NEW COLLECTIONS</h1>
//       <hr />
//       <div className="collections">
//         {newCollectionItems.map((item) => (
//           <Link to={item.route} key={item.id} className='brand-box'>
//             <img src={backend_url + item.image} alt={item.name} />
//             <p>{item.name}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewCollections;
import React from 'react';
import { Link } from 'react-router-dom';
import './NewCollections.css';

// Import local images
import menImg from '../Assets/men.png.png';
import womenImg from '../Assets/womenban.png';
import kidsImg from '../Assets/kidban.png';

const newCollectionItems = [
  { id: 1, name: 'MEN SECTION', image: menImg, route: '/mens' },
  { id: 2, name: 'WOMEN SECTION', image: womenImg, route: '/women' },
  { id: 3, name: 'KIDS SECTION', image: kidsImg, route: '/kids' },
];

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollectionItems.map((item) => (
          <Link to={item.route} key={item.id} className='brand-box'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
