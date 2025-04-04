// import React, { useState } from 'react';
// import '../style/tableView.css'; // Ensure to create this CSS file for styling
// import excelFile from '../assets/egyptData3.numbers';

import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import '../style/tableView.css';
import excelFile from '../assets/egyptData4.xlsx';

const TableView = () => {
  const [viewType, setViewType] = useState('nodes');
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleToggleView = () => {
    setViewType(viewType === 'nodes' ? 'edges' : 'nodes');
  };

  useEffect(() => {
    fetch(excelFile)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: 'array' });

        // Sheet 1 = Nodes
        const sheetNodes = workbook.Sheets[workbook.SheetNames[0]];
        const nodesData = XLSX.utils.sheet_to_json(sheetNodes);

        const parsedNodes = nodesData.map((row) => ({
          Name: row.Name || '',
          Label: row.Label || '',
          Gender: row.Gender || '',
          Animal: row.Animal || '',
          Origin: row.Origin || '',
        }));

        // Sheet 2 = Edges
        const sheetEdges = workbook.Sheets[workbook.SheetNames[1]];
        const edgesData = XLSX.utils.sheet_to_json(sheetEdges);

        const parsedEdges = edgesData.map((row) => ({
          from: row.from || '',
          to: row.to || '',
          label: row.label || '',
          Reference: row.Reference || '',
        }));

        setNodes(parsedNodes);
        setEdges(parsedEdges);
      })
      .catch((err) => console.error('Error reading Excel file:', err));
  }, []);

  return (
    <div className="TableView">
      <h2>{viewType === 'nodes' ? 'Character List' : 'Relationship List'}</h2>
      <button onClick={handleToggleView}>
        {viewType === 'nodes' ? 'Show Relationships' : 'Show Gods'}
      </button>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {viewType === 'nodes' ? (
                <>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Gender</th>
                  <th>Animal</th>
                  <th>Culture</th>


                </>
              ) : (
                <>
                  <th>From</th>
                  <th>To</th>
                  <th>Label</th>
                  <th>Reference</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {viewType === 'nodes'
              ? nodes.map((node, index) => (
                  <tr key={index}>
                    <td>{node.Name}</td>
                    <td>{node.Label}</td>
                    <td>{node.Gender}</td>
                    <td>{node.Animal}</td>
                    <td>{node.Origin}</td>
                  </tr>
                ))
              : edges.map((edge, index) => (
                  <tr key={index}>
                    <td>{edge.from}</td>
                    <td>{edge.to}</td>
                    <td>{edge.label}</td>
                    <td>{edge.Reference}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;


// const TableView = ({ nodes, edges }) => {
//   const [viewType, setViewType] = useState('nodes'); // State to toggle between nodes and edges

//   const handleToggleView = () => {
//     setViewType(viewType === 'nodes' ? 'edges' : 'nodes');
//   };

//   return (
//     <div className="TableView">
//       <h2>{viewType === 'nodes' ? 'Character List' : 'Relationship List'}</h2>
//       <button onClick={handleToggleView}>
//         {viewType === 'nodes' ? 'Show Relationships' : 'Show Gods'}
//       </button>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               {viewType === 'nodes' ? (
//                 <>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Group</th>
//                   <th>Description</th>
//                 </>
//               ) : (
//                 <>
//                   <th>From</th>
//                   <th>To</th>
//                   <th>Label</th>
//                   <th>Reference</th>
//                 </>
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {viewType === 'nodes' ? (
//               nodes.map(node => (
//                 <tr key={node.id}>
//                   <td>{node.ID}</td>
//                   <td>{node.Name}</td>
//                   <td>{node.group}</td>
//                   <td>{node.Label}</td>
//                 </tr>
//               ))
//             ) : (
//               edges.map((edge, index) => (
//                 <tr key={index}>
//                   <td>{edge.from}</td>
//                   <td>{edge.to}</td>
//                   <td>{edge.label}</td>
//                   <td>{edge.Reference}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TableView;
