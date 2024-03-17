import { LineChart as Lchart, Line } from 'recharts';

const Linechart = () => {
    const studentData = [
        { name: "John", id: 1, mathMark: 85, physicsMark: 78, chemistryMark: 70 },
        { name: "Emily", id: 2, mathMark: 78, physicsMark: 80, chemistryMark: 85 },
        { name: "Michael", id: 3, mathMark: 90, physicsMark: 85, chemistryMark: 88 },
        { name: "Sarah", id: 4, mathMark: 82, physicsMark: 75, chemistryMark: 79 },
        { name: "David", id: 5, mathMark: 88, physicsMark: 92, chemistryMark: 90 },
        { name: "Jessica", id: 6, mathMark: 75, physicsMark: 68, chemistryMark: 72 },
        { name: "Daniel", id: 7, mathMark: 92, physicsMark: 87, chemistryMark: 91 },
        { name: "Rachel", id: 8, mathMark: 85, physicsMark: 80, chemistryMark: 84 },
        { name: "Matthew", id: 9, mathMark: 79, physicsMark: 72, chemistryMark: 75 },
        { name: "Olivia", id: 10, mathMark: 86, physicsMark: 88, chemistryMark: 82 }
      ];
  
    return (
        <div>
            <Lchart width={500} height={400} data={studentData}> 
            <Line dataKey="mathMark" stroke="green"> </Line>
            <Line dataKey={"physicsMark"} stroke="red"></Line>
            
            </Lchart>
           
        </div>
    );
};

export default Linechart;
