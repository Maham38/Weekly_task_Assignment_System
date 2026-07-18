export default function SummaryCard({title,value,icon}){


return(

<div className="col-md-3 mb-3">

<div className="card shadow border-0 p-3">


<div className="d-flex justify-content-between">


<div>

<h6 className="text-muted">
{title}
</h6>


<h2 className="fw-bold">
{value}
</h2>

</div>


<div className="fs-1">
{icon}
</div>


</div>


</div>

</div>

)

}