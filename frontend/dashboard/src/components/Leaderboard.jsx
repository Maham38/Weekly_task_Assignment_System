export default function Leaderboard({
data
}){


return(

<div className="card shadow border-0">


<div className="card-body">


<h5>

Top Performers

</h5>



<table className="table">


<thead>

<tr>

<th>
Name
</th>


<th>
Type
</th>


<th>
Score
</th>


<th>
Completion
</th>


</tr>

</thead>



<tbody>


{
data.map(
(item,index)=>(


<tr key={index}>


<td>
{item.name}
</td>


<td>
{item.type}
</td>


<td>
{item.score}
</td>


<td>

{item.completion}%

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