
const CollegeTable = (props) => {
    console.log("hello from college table", props.colleges)
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
          {props.colleges.map((college, index) => {
              return (
                <tr>
                  <td>{college.University}</td>
                  <td>{college.Enviroment}</td>
                  <td>{college.Professor}</td>
                  <td>{college.benefits}</td>
                  <td>{college.culture}</td>
                  <td>{college.programs}</td>
                  <td>{college.cost}</td>
                  <td>{college.weather_type}</td>
                  <td>{college.major_type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    );
}
 
export default CollegeTable;