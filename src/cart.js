import React from 'react'
import "./Cart.css";
function cart(props) {
  console.log(props.data)
    return   <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data. usersEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.usersEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.users}</li>
              <li className={props.data. storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li className={props.data.  publicprojectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.publicprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicprojects}</li>
              <li className={props.data. communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.communityAccess}</li>
              <li className={props.data.privateprojectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.privateprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateprojects}</li>
              <li className={props.data. phoneSupportenabler?"":"text-muted"}><span className="fa-li"><i className={props.data.phoneSupportenabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.phoneSupport}</li>
              <li className={props.data. subdomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.subdomain}
              </li>
              <li className={props.data. reportsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.reportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  }
  
  export default cart;