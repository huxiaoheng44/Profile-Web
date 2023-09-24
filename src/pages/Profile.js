import React from "react";
import GridLayout, {WidthProvider} from 'react-grid-layout';  // <-- Import GridLayout
import "./Profile.css";
import InfoCard from "../components/InfoCard";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
const Profile = () => {
  
  const DecoratedGridLayout = WidthProvider(GridLayout);

  const gridWidth = 3;

  const personalInfo = [
    { field: 'E-mail', value: 'huxiaoheng33@gmail.com' },
    { field: 'Telephone', value: '+49 1623384004' },
    { field: 'Residence', value: 'Munich' },
    { field: 'Major', value: 'Informatics' },
    { field: 'School', value: 'Technical University of Munich' },
    { field: 'Hobby', value: 'Basketball & Ping-Pong' }
  ];


  const generatedLayout = generateSequentialLayout(personalInfo, gridWidth);
  return (
    <div>
        {/* avatar and name part */}
        <div className="profile-avatar">
            <div className="avatar-container">
                <img className="avatar-image" src={process.env.PUBLIC_URL + '/avatar.jpg'} alt="Avatar"/>
            </div>
            <div className="avatar-name">
                Xiaoheng Hu
            </div>
        </div>

        <hr className="Profile-line" />

        {/* info part */}
        <DecoratedGridLayout 
        className="info-container" 
        layout={generatedLayout} 
        cols={3} 
        rowHeight={110}>
            {personalInfo.map((item, index) => (
                <div className="InfoCard-container" key={generatedLayout[index].i} >
                    <InfoCard  field={item.field} value={item.value} />
                </div>

            ))}
        </DecoratedGridLayout>
    </div>
  );
};

function generateSequentialLayout(items, gridWidth) {
  return items.map((item, index) => {
    return {
      x: index % gridWidth,
      y: Math.floor(index / gridWidth),
      w: 1,
      h: 1,
      i: index.toString(),
      resizable: false,
    };
  });
}

export default Profile;

