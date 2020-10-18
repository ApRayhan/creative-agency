import React from 'react';

const Service = ({service}) => {
  return (
    <tr>
      <td>{service.clientName}</td>
      <td>{service.clientEmail}</td>
      <td>{service.clientWork}</td>
      <td>{service.projectDetails}</td>
      <td>
        <select class="status_type">
          <option value="panding">Panding</option>
          <option value="done">Done</option>
          <option value="ongoging">Ongoing</option>
        </select>
      </td>
    </tr>
  );
};

export default Service;