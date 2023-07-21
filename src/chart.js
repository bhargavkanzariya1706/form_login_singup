// const addSymbols = (e) => {
//     var suffixes = ["", "K", "M", "B"];
//     var order = Math.max(
//       Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
//       0
//     );

//     if (order > suffixes.length - 1) {
//       order = suffixes.length - 1;
//     }
//     var suffix = suffixes[order];
//     return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
//   };

//   const options = {
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       text: "All Employe Salary",
//     },
//     axisX: {
//       title: "Employe Name ",
//       reversed: true,
//     },
//     axisY: {
//       title: "Monthly Salary",
//       includeZero: true,
//       labelFormatter: addSymbols,
//     },
//     axisX1: {
//       title: "Department",
//       reversed: true,
//     },
//     data: [
//       {
//         type: "bar",
//         dataPoints: data.map((emp) => ({
//           y: parseFloat(emp.salary),
//           label: emp.name + "   " + emp.department,
//         })),
//       },
//     ],
//   };

// //jsx

//   <div>
//       <CanvasJSChart options={options} />
//       <div>
//         <NavLink
//           to="/profile"
//           className="btn btn-success  bg-500 text-50 p-2  hover:bg-indigo-600 rounded"
//         >
//           Profile Page &rarr;
//         </NavLink>
//       </div>
//     </div>