import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
    {config.map((item, index) => (
          <th key={index} >
            {item.title}
            </th>
        ))}
    </tr>
    </thead>
    <tbody>
         
    {data.map((item, index) => (
     
          <tr key={index} >

            {config.map((itemD, indexD) => (

          <th key={indexD} >
            {item[itemD.field]}
            </th>
        ))}
            </tr>
        ))}
 
    </tbody>
  </table>
);

export default Grid;
