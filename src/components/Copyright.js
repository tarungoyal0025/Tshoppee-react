import React from 'react';
const CopyrightComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center py-3">
      <p className="mb-0">
        &copy; {currentYear} Tshoppee. All rights reserved.
      </p>
    </div>
  );
};
export default CopyrightComponent;
