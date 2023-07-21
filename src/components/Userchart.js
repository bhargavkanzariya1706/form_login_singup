import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink} from "react-router-dom";
import CanvasJSReact from '@canvasjs/react-charts';

function Userchart() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://63be78edf5cfc0949b58277e.mockapi.io/api"
          );
          setData(response.data);
           
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
 


  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const addSymbols = (e) => {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(
      Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
      0
    );

    if (order > suffixes.length - 1) {
      order = suffixes.length - 1;
    }
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "All Employe Salary",
    },
    axisX: {
      title: "Employe Name ",
      reversed: true,
    },
    axisY: {
      title: "Monthly Salary",
      includeZero: true,
      labelFormatter: addSymbols,
    },
    data: [
      {
        type: "bar",
        dataPoints:data.map((emp) => ({
          y: parseFloat(emp.salary),
          label: emp.name + "   " + emp.department,
        })),
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
      <div>
        <NavLink
          to="/profile"
          className="btn btn-success  bg-500 text-50 p-2  hover:bg-indigo-600 rounded"
        >
          Profile Page &rarr;
        </NavLink>
      </div>
    </div>
  );
}

export default Userchart;
