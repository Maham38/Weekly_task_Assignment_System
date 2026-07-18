export default function RecentActivity({
data
}){


return(

<div className="card shadow border-0 mt-4">


<div className="card-body">


<h5>

Recent Activities

</h5>


<table className="table table-hover">


<thead>

<tr>

<th>Intern</th>

<th>Group</th>

<th>Task</th>

<th>Status</th>

<th>Score</th>

</tr>

</thead>



<tbody>


{

data.map(
(item,index)=>(


<tr key={index}>


<td>
{item.intern}
</td>


<td>
{item.group}
</td>


<td>
{item.task}
</td>


<td>

<span className="badge bg-primary">

{item.status}

</span>


</td>


<td>

{item.score ?? "-"}

</td>


</tr>


)

)


}



</tbody>


</table>


</div>

</div>


)

}