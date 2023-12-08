import React from 'react'

function Card({data}) {
    //console.log(data);
  return <>
         {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">{data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isuser?"":"text-muted"}><span className="fa-li"><i className={data.isuser?"fas fa-check":"fas fa-times"}></i></span>{data.user}</li>

              <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>

              <li className={data.ispublicProjects?"":"text-muted"}><span className="fa-li"><i className={data.ispublicProjects?"fas fa-check":"fas fa-times"}></i></span>{data.publicProjects}</li>

              <li className={data.iscommunityAccess?"":"text-muted"}><span className="fa-li"><i className={data.iscommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{data.communityAccess}</li>

              <li className={data.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{data.PrivateProjects}</li>

              <li className={data.issupport?"":"text-muted"}><span className="fa-li"><i className={data.issupport?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>

              <li className={data.issubDomain?"":"text-muted"}><span className="fa-li"><i className={data.issubDomain?"fas fa-check":"fas fa-times"}></i></span>{data.subDomain}</li>
              
              <li className={data.isreports?"":"text-muted"}><span className="fa-li"><i className={data.isreports?"fas fa-check":"fas fa-times"}></i></span>{data.reports }</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
     
  </>
} 
export default Card