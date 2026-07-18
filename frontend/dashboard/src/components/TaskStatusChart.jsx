import {

Bar

}

from "react-chartjs-2";


import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

}

from "chart.js";



ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

);



export default function TaskStatusChart({
data
}){


const chartData={


labels:data.map(
item=>item.status
),


datasets:[

{

label:"Tasks",

data:data.map(
item=>item.count
)

}

]


};



return(

<div className="card shadow border-0 p-4">


<h5>

Task Status

</h5>


<Bar data={chartData}/>


</div>


)


}