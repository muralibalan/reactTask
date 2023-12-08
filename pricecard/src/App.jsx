import React from "react"
import Card from "./components/Card"
function App() {
  const data = [{
    plan : "FREE",
    price : "0",
    user : "Single User",
    isuser : true,
    storage : "5GB Storage",
    isstorage : true,
    publicProjects : "Unlimited Public Projects",
    ispublicProjects : true,
    communityAccess : "communityAccess",
    iscommunityAccess : true,
    PrivateProjects : "Unlimited Private Projects",
    isPrivateProjects : false,
    support : "Dedicated Phone Support",
    issupport : false,
    subDomain : "Free SubDomain",
    issubDomain : false,
    reports : "Monthly Status Reports",
    isreports : false
  },
  {
    plan : "PLUS",
    price : "9",
    user : "5 User",
    isuser : true,
    storage : "50GB Storage",
    isstorage : true,
    publicProjects : "Unlimited Public Projects",
    ispublicProjects : true,
    communityAccess : "communityAccess",
    iscommunityAccess : true,
    PrivateProjects : "Unlimited Private Projects",
    isPrivateProjects : true,
    support : "Dedicated Phone Support",
    issupport : true,
    subDomain : "Free SubDomain",
    issubDomain : true,
    reports : "Monthly Status Reports",
    isreports : false

  },
  {
    plan : "PRO",
    price : "49",
    user : "Unlimited User",
    isuser : true,
    storage : "150GB Storage",
    isstorage : true,
    publicProjects : "Unlimited Public Projects",
    ispublicProjects : true,
    communityAccess : "communityAccess",
    iscommunityAccess : true,
    PrivateProjects : "Unlimited Private Projects",
    isPrivateProjects : true,
    support : "Dedicated Phone Support",
    issupport : true,
    subDomain : "Unlimited Free SubDomains ",
    issubDomain : true,
    reports : "Monthly Status Reports" ,
    isreports : true  
  }]

  return (
    <>
     <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((e,i)=>{
        return<Card data = {e} key ={i}/>
      })
     } 
    </div>
  </div>
</section>
    </>
  )
}

export default App
 