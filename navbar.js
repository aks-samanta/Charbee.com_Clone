let navbar= ()=>{
    return `<div>
    <div id="navbar">
        <div id="left_nav">
            <div><a  href="index.html"><img src="https://www.insightpartners.com//assets/media/2018/03/Chargebee.png" alt=""></a></div>
            
                <div id="menu">
                    <div class="dropdown">
                        <button class="dropbtn">Product</button>
                        <div class="dropdown-content">
                           
                                <div>
                                    <h3>Subscription Management</h3>
                                    <a href="#">Overview</a href="#">
                                    <a href="#">Create & Manage Plans</a href="#">
                                    <a href="#">Pricing Management</a href="#">
                                    <a href="#">Handle Trial Subscriptions</a href="#">
                                    <a href="#">Customer Self-service Portal</a href="#">
                                    <a href="#">Mobile Solutions</a href="#">
                                    <a href="#">Backdating Subscriptions</a href="#">
                                </div>
                                <div>
                                    <h3>Billing Automation</h3>
                                    <a href="#">Overview</a href="#">
                                    <a href="#">Usage Based Billing</a href="#">
                                    <a href="#">Invoicing Automation</a href="#">
                                    <a href="#">Quotes</a href="#">
                                    <a href="#">Proration</a href="#">
                                </div>
                                <div>
                                    <h3> Recurring Payments</h3>
                                    <a href="#">Overview</a href="#">
                                    <a href="#">Multiple Payment Methods</a href="#">
                                    <a href="#">Multiple Payment Gateways</a href="#">
                                    <a href="#">Smart Dunning</a href="#">
                                    <a href="#">Chargeback Management</a href="#">
                                    <a href="#">Checkout Experience</a href="#">
                                    <a href="#">Receivables</a href="#">
                                </div>
                                <div>
                                    <h3>Accounting & Taxes</h3>
                                    <a href="#">Overview</a href="#">
                                    <a href="#">Revenue Recognition</a href="#">
                                    <a href="#">Manage Sales Tax</a href="#">
                                    <a href="#">One-Click Reconciliation</a href="#">
                                </div>
                                <div>
                                    <h3>Reporting & Analytics</h3>
                                    <a href="#">Overview</a href="#">
                                    <a href="#">Deferred Revenue Reporting</a href="#">
                                </div>
                            
                        </div>
                      </div>
                    <div id="products"></div>
                    
                    
                    <div class="dropdown">
                        <a href="pricing.html"><button class="dropbtn">Pricing</button></a> 
                       
                      </div>
        
                    
                    <div class="dropdown">
                        <button class="dropbtn">Solutions</button>
                        <div class="dropdown-content">
                            <div>
                                <h3>By Role</h3>
                                <a href="#">Finance</a href="#">
                                <a href="#">Sales</a href="#">
                                <a href="#">RevOps</a href="#">
                            </div>
                            <div>
                                <h3>By Industry</h3>
                                <a href="#">B2B SaaS</a href="#">
                                <a href="#">eCommerce</a href="#">
                                <a href="#">E-learning</a href="#">
                                <a href="#">Publishing</a href="#">
                                <a href="#">Video & OTT</a href="#">
                            </div>
                            <div>
                                <h3>By Strategy</h3>
                                <a href="#"> Roll Out New Pricing</a href="#">
                                <a href="#">Expand Globally</a href="#">
                                <a href="#">Move Upmarket</a href="#">
                                <a href="#">Shift to Subscriptions</a href="#">
                            </div>
                            <div>
                                <h3>By  Business Size</h3>
                                <a href="#">Startup</a href="#">
                                <a href="#">ScaleUp</a href="#">
                                <a href="#">Enterprise</a href="#">
                            </div>
                          
                            <div>
                                <h3>By Business Model</h3>
                                <a href="#">Self-serve</a href="#">
                                <a href="#">Sales-driven</a href="#">
                            </div>
                            <div>
                                <h3>By Geography</h3>
                                <a href="#">Europe</a href="#">
                                <a href="#">Australia</a href="#">
                                <a href="#">India</a href="#">
                            </div>
                        </div>
                      </div>
                    
                    <div id="Customers"></div>
                    <div class="dropdown">
                        <a href="customers.html"><button class="dropbtn">Customers</button></a> 
                       
                      </div>
                    
        
                   
                    <div class="dropdown">
                        <button class="dropbtn">Resources</button>
                        <div class="dropdown-content" id="resources">
                          <a href="#">Learn everything that falls under the umbrella of subscriptions.
                            <p>Learning Hub ></p>
                          </a>
                          <a href="#">Read our ever-growing stories on SaaS, and get all the growth insights you need.
                            <p>Chargebee Blog ></p>
                          </a>
                          <a href="#">A quick overview of Chargebee to help you understand and implement it.
                            <p>Chargebee Docs ></p>
                          </a>
                          <a href="#">Chargebee's in-house team of implementation experts is here to make sure you go live with your Chargebee site at lightning-fast speed.
                            <p>Professional Services & Implementation</p>
                          </a>
                          <a href="#">Learn to unlock all revenue secrets to secure hyper-growth for your business. Access free certifications, courses, and expert masterclasses.
                            <p>Subscription Academy</p>
                          </a>
                          <a href="#">Explore the best practices of all things SaaS and Subscription Billing.
                            <p>Webinars</p>
                          </a>
                          <a href="#">Learn about the possibilities that change brings about and how Chargebee recognizes & celebrates change-makers by being an enabler of change.
                            <p>Champions of Change</p>
                          </a>
                          <a href="#">Link 3</a>
                        </div>
                      </div>
        
        
                    
                    <div class="dropdown">
                        <button class="dropbtn">Partners</button>
                        
                      </div>

                </div>
            </div>
        
        <div id="right_nav">
            <div><select name="lang" id="language">               
                <option value="English">English</option>
                <option value="Deutsch">Deutsch</option>
        </select></div>
            <div> <button id="login">Login ></button></div>
            <div><button id="demo">Get a Demo ></button></div>
            
           
            
        </div>
    </div>
        `
}
// document.querySelector("body").innerHTML=navbar();
// export {navbar}

