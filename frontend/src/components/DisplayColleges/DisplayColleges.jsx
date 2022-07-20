
const DisplayColleges = (props) => {
    return ( 
    <table>
        <thead>
          <tr>
            <th>University</th>
            <th>Enviroment</th>
            <th>Professor</th>
            <th>benefits</th>
            <th>culture</th>
            <th>programs</th>
            <th>cost</th>
            <th>weather_type</th>
            <th>major_type</th>
          </tr>
        </thead>
        <tbody>
        {props.parentColleges.map((college, index) => {
              return (
            <tr>
                <td>{index + 1}</td>
                <td>{University}</td>
                <td>{Enviroment}</td>
                <td>{Professor}</td>
                <td>{benefits}</td>
                <td>{culture}</td>
                <td>{programs}</td>
                <td>{cost}</td>
                <td>{weather_type}</td>
                <td>{major_type}</td>
            </tr>
            );
          })}
        </tbody>
    </table>
    );
}
 
export default DisplayColleges;