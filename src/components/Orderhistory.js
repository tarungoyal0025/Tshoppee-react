import React from 'react';

const OrderHistory = () => {
  return (
    <div className='container mt-4 mb-5'>
      <h2 className='fs-3'>Order History</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date of Order</th>
            <th>Delivery Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4784545</td>
            <td>Mon, 11th June 2023</td>
            <td>Fri, 18th June 2023</td>
            <td>₹5997</td>
          </tr>
          <tr>
            <td>6789678</td>
            <td>Tue, 15th June 2023</td>
            <td>Sat, 22nd June 2023</td>
            <td>₹7899</td>
          </tr>
          <tr>
            <td>3789678</td>
            <td>Tue, 17th June 2023</td>
            <td>Sat, 21nd June 2023</td>
            <td>₹7899</td>
          </tr>
          <tr>
            <td>2789678</td>
            <td>Tue, 15th June 2023</td>
            <td>Sat, 22nd June 2023</td>
            <td>₹7899</td>
          </tr>
          <tr>
            <td>7789678</td>
            <td>Tue, 15th June 2023</td>
            <td>Sat, 22nd June 2023</td>
            <td>₹7899</td>
          </tr>
          <tr>
            <td>9789678</td>
            <td>Tue, 15th June 2023</td>
            <td>Sat, 22nd June 2023</td>
            <td>₹7899</td>
          </tr>
          <tr>
            <td>4784545</td>
            <td>Mon, 11th June 2023</td>
            <td>Fri, 18th June 2023</td>
            <td>₹5997</td>
          </tr>
          <tr>
            <td>4784545</td>
            <td>Mon, 11th June 2023</td>
            <td>Fri, 18th June 2023</td>
            <td>₹5997</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
