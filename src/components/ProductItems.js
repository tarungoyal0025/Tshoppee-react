// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function ProductItems(props) {
//   return (
//     <div key={props.key}>
//       <div className='my-3'>
//         <div className="card" style={{ width: "18rem" }}>
//           <Link to={{
//             pathname: '/description',
//             state: {
//               imageUrl: props.imageUrl,
//               title: props.title,
//               description: props.description,
//               price: props.price
//             }
//           }}>
//             <img src={props.imageUrl} className="card-img-top" alt="..." />
//           </Link>
//           <div className="card-body">
//             <h5 className="card-title">{props.title}</h5>
//             <p className="card-text">{props.description}</p>
//             <p className="card-text">{props.price}</p>
//             <a href="/" className="btn btn-sm btn-dark mt-2">Add to Cart</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItems(props) {
  return (
    <div>
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <Link to={{
            pathname: '/description',
            state: {
              imageUrl: props.imageUrl,
              title: props.title,
              description: props.description,
              price: props.price
            }
          }}>
            <img src={props.imageUrl} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">{props.price}</p>
            <a href="/" className="btn btn-sm btn-dark mt-2">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}
