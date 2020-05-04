import React, { Component } from 'react';
import './plans.scss';

class Plans extends Component {
  state = {
    buttonLabel: 'CHOOSE PLAN',
    bronzeId: 1,
    silverId: 2,
    goldId: 3
  }

  // This is just a demonstration of making an API request to a backend
  choosePlan = planId => {
    
    let token = 'asc812ebja2ejdkohjas91234lvas04r2hjasl023rkafafahnacs'
    const payload = { token: token, plan: planId };

      // fetch('ajaxhandlers/payment-plan-handler.php', {
      fetch('https://jsonplaceholder.typicode.com/plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {

        if (data.message !== 'Failed.') {
          alert('An error occurred. Please try again later.');
          return;
        }
        
        alert('Plan chosen successfully.');
        return;
      })
      .catch(error => console.log(error));
  };

  render() {
    const buttonLabel = this.state.buttonLabel;
    const bronzeId = this.state.bronzeId;
    const silverId = this.state.silverId;
    const goldId = this.state.goldId;

    return (
      <section>
        <h1 id="heading">CHOOSE YOUR PLAN</h1>

        <div id="plan-list">
          <article className="plan light">
            <h1>BRONZE</h1>
            <h2>GHC 0 / Month</h2>
            <h3>For hobby projects or small teams.</h3>
            <ul>
              <li>1 Workspace</li>
              <li>Unlimited Traffic</li>
              <li>10GB Storage</li>
              <li>Basic Support</li>
            </ul>
            <div>
              <button onClick={this.choosePlan.bind(this, bronzeId)}>{buttonLabel}</button>
            </div>
          </article>

          <article className="plan deep">
            <h1 id="recommended">RECOMMENDED</h1>
            <h1>SILVER</h1>
            <h2>GHC 69 / Month</h2>
            <h3>For ambitious projects.</h3>
            <ul>
              <li>5 Workspaces</li>
              <li>Unlimited Traffic</li>
              <li>100GB Storage</li>
              <li>Plus Support</li>
            </ul>
            <div>
              <button onClick={this.choosePlan.bind(this, silverId)}>{buttonLabel}</button>
            </div>
          </article>

          <article className="plan light">
            <h1>GOLD</h1>
            <h2>GHC 99 / Month</h2>
            <h3>Your enterprise solution.</h3>
            <ul>
              <li>10 Workspace</li>
              <li>Unlimited Traffic</li>
              <li>Unlimited Storage</li>
              <li>Premium Support</li>
            </ul>
            <div>
              <button onClick={() => this.choosePlan(goldId)}>{buttonLabel}</button>
            </div>
          </article>
        </div>

      </section>
    )
  }
}

export default Plans;
