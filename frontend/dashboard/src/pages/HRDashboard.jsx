import {
useEffect,
useState
}
from "react";


import {
fetchHRDashboard
}
from "../api";


import SummaryCard from "../components/SummaryCard";

import TaskStatusChart from "../components/TaskStatusChart";

import Leaderboard from "../components/Leaderboard";

import RecentActivity from "../components/RecentActivity";



export default function HRDashboard(){



const [dashboard,setDashboard]=useState(null);



const loadDashboard=async()=>{


try{


const response =
await fetchHRDashboard();


setDashboard(
response.data
);



}

catch(error){

console.log(error);

}


};



useEffect(()=>{

loadDashboard();

},[]);



if(!dashboard)

return(

<div className="container mt-5">

<h3>
Loading HR Dashboard...
</h3>

</div>

);




return(


<div className="container-fluid bg-light min-vh-100 p-4">



{/* <h1 className="mb-4 text-dark fw-bold">

HR Dashboard

</h1> */}




<div className="row">


<SummaryCard

title="Total Tasks"

value={
dashboard.summary.total_tasks
}

icon="📋"

/>



<SummaryCard

title="Submissions"

value={
dashboard.summary.submissions
}

icon="📤"

/>




<SummaryCard

title="Late Submissions"

value={
dashboard.summary.late_submissions
}

icon="⚠️"

/>



<SummaryCard

title="Certificates"

value={
dashboard.summary.certificates
}

icon="🏆"

/>


</div>





<div className="row mt-3">


<div className="col-md-6">


<TaskStatusChart

data={
dashboard.task_status
}

/>


</div>




<div className="col-md-6">


<div className="card shadow border-0 p-4">


<h5>

Evaluation Performance

</h5>


<h1>

{dashboard.summary.average_score}

%

</h1>


<p>

Average Intern Score

</p>



<h5>

Feedback Rating

</h5>


<h2>

⭐ {dashboard.summary.feedback_rating}

</h2>


</div>


</div>


</div>





<div className="mt-4">


<Leaderboard

data={
dashboard.leaderboard
}

/>


</div>





<RecentActivity

data={
dashboard.recent_activity
}

/>



</div>


)


}