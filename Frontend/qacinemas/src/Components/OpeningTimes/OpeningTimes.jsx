import { Table } from 'reactstrap';

const OpeningTimes = (props) => {
  return (
    <div className="text-white">
    <h1 align="center"> Opening Times </h1> 
    <br></br>
    <br></br>
    <br></br>
    <Table dark>
      <thead align="center">
        <tr>
          <th>Day of Week</th>
          <th>Opening Times</th>
        </tr>
      </thead>
      <tbody align="center">
        <tr>
          <th scope="row">Monday</th>
          <td>10:00AM - 22:00PM</td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>10:00AM - 22:00PM</td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>10:00AM - 23:00PM</td>
        </tr>
        <tr>
          <th scope="row">Thursday</th>
          <td>10:00AM - 23:00PM</td>
        </tr>
        <tr>
          <th scope="row">Friday</th>
          <td>10:00AM - 23:00PM</td>
        </tr>
        <tr>
          <th scope="row">Saturday</th>
          <td>10:00AM - 23:00PM</td>
        </tr>
        <tr>
          <th scope="row">Sunday</th>
          <td>12:00PM - 21:00PM</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default OpeningTimes;