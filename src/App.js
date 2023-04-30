import logo from './logo.svg';
import './App.css';
import Cart from './cart';

function App() {

  let data =[
    {
      plan:"Free",
      price:0,
      users:"Single User",
      usersEnabler:true,
      storage:"5GB storage",
      storageEnabler:true,
      publicprojects:"unlimited public projects",
      publicprojectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateprojects:"Unlimited private projects",
      privateprojectsEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportenabler:false,
      subdomain:"Free Subdomain",
      subdomainEnabler:false,
      reports:"Monthly Status reports",
      reportsEnabler:false
    },
    
   
    {
      plan:"Plus",
      price:9,
      users:"5 User",
      usersEnabler:true,
      storage:"50GB storage",
      storageEnabler:true,
      publicprojects:"unlimited public projects",
      publicprojectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateprojects:"Unlimited private projects",
      privateprojectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportenabler:true,
      subdomain:"Free Subdomain",
      subdomainEnabler:true,
      reports:"Monthly Status reports",
      reportsEnabler:false
    },
    {
      plan:"Pr0",
      price:49,
      users:"Unlimited User",
      usersEnabler:true,
      storage:"150GB storage",
      storageEnabler:true,
      publicprojects:"unlimited public projects",
      publicprojectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateprojects:"Unlimited private projects",
      privateprojectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportenabler:true,
      subdomain:"Unlimited Free Subdomain",
      subdomainEnabler:true,
      reports:"Monthly Status reports",
      reportsEnabler:true,
    },
  ]
  
  return <div >
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
       data.map((e,i)=>{
        return<Cart data={e} key={i}/>
       })
      }
      
    </div>
    </div>
    </section>
    </div>
}

export default App;
